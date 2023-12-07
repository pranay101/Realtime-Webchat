package websocket

import (
	"fmt"
	"log"
	"io"
	"net/http"

	"github.com/gorilla/websocket"
)


var (
	PORT = 8000
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	// check the origin of the request.... right now allowing all origins
	CheckOrigin: func(r *http.Request) bool {return true},
}



func Reader(conn *websocket.Conn){
	for {
		// read the message
		messageType, p, err := conn.ReadMessage()

		if err != nil {
			log.Println(err)
			return
		}

		// print out the message 
		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType,p); err != nil{
			log.Println(err)
			return 
		}
}
}

// websocket defination

func ServerWebsocket(w http.ResponseWriter, r *http.Request)  {

	fmt.Println(r.Host)

	// upgrade thsi connection to websocket
	ws,err := upgrader.Upgrade(w,r,nil)
	if err != nil {
		log.Println(err)
	}  

	// listen for new messages
	Reader(ws)
}


func Writer(conn *websocket.Conn) {
    for {
        fmt.Println("Sending")
        messageType, r, err := conn.NextReader()
        if err != nil {
            fmt.Println(err)
            return
        }
        w, err := conn.NextWriter(messageType)
        if err != nil {
            fmt.Println(err)
            return
        }
        if _, err := io.Copy(w, r); err != nil {
            fmt.Println(err)
            return
        }
        if err := w.Close(); err != nil {
            fmt.Println(err)
            return
        }
    }
}


func Upgrade(w http.ResponseWriter, r *http.Request) (*websocket.Conn, error) {
    ws, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Println(err)
        return ws, err
    }
    return ws, nil
}
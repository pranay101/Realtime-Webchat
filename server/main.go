package main

import (
	"fmt"
	"log"
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



func reader(conn *websocket.Conn){
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

func serverWebsocket(w http.ResponseWriter, r *http.Request)  {

	fmt.Println(r.Host)

	// upgrade thsi connection to websocket
	ws,err := upgrader.Upgrade(w,r,nil)
	if err != nil {
		log.Println(err)
	}  

	// listen for new messages
	reader(ws)
}



func setupRoutes(){
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w,"Simple Server")
	})

	// direct the webscoket endpoint to the respective function
	http.HandleFunc("/websocket", serverWebsocket)
}

func main(){
	fmt.Println("Chat App running at port",PORT)
	setupRoutes()
	http.ListenAndServe(":8000",nil)
}
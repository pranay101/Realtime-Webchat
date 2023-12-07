const socket = new WebSocket("ws://localhost:8000/websocket")


const connect = (cb) =>{
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
      };

    socket.onmessage = (message) => {
        console.log(message);
        cb(message)
    }

    socket.onclose = event =>{
        console.log("Socket Closed Connection");
    }

    socket.onerror = err =>{
        console.log("Socket error: ",err);
    }
}

const sendMessage = message =>{
    console.log("Sending Message",message);
    socket.send(message)
}

export {connect,sendMessage}
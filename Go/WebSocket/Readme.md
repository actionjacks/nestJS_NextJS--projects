# in client js file

// http.Handle("/ws", websocket.Handler(server.handleWS))

```
let socket = new WebSocket("ws://localhost:3000/ws")
```

#

```
socket.onmessage = (event)=>{
  console.log('recived from server', event.data)
}
```

#

```
socket.send("heelo from client")
```

#

import { Server } from "socket.io";
// https://socket.io/docs
const io = new Server({
  cors: {
    origin: "*",
  },
});

let likes = 0;

io.on("connection", (socket) => {
  console.log("a user connection", { socket });

  socket.on("like", () => {
    likes++;
    console.log(likes);

    // sond to all but not to socket
    // socket.broadcast.emit("likeupdate", likes);
    // send to socked no worrking
    socket.emit("likeupdate", likes);
  });
});

io.listen(3000);

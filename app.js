const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(cors());
app.use(bodyParser.json());

// app.get("/home", (req, res) => {
//   res.send("welcome");
// });

//connection setup for server
// io.on("connection", (socket) => {
//   console.log("what is socket:", socket);
//   console.log("Socket is active to be connected");

//   socket.on("chat", (payload) => {
//     //creating a event
//     console.log("what is payload", payload);
//     io.emit("chat", payload);
//   });

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});

server.listen(3233, () => {
  console.log("Server is listing at port 3233...");
});

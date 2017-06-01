const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3021;

const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', (socket) => {
   console.log('new user connected');

   socket.emit('newMessage', {
       from: "Heroku",
       text: "Hy"
   });
   socket.on('createMessage', (message) => {
      io.emit('newMessage', {
          from: message.from,
          text: message.text,
          createdAt: new Date().getTime()
      });
   });
   socket.on('disconnect', () => {
       console.log('user was disconnected');
   });
});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is running on ${port} port`)
});
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const app = express();
const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3021;

const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage("Admin", "Welcome to our chat"));

    socket.broadcast.emit('newMessage', generateMessage("Admin", "New user joined"));

    socket.on('createMessage', (message) => {
        io.emit('newMessage', generateMessage(message.from, message.text));
    });
    socket.on('disconnect', () => {
        console.log('user was disconnected');
    });
});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is running on ${port} port`)
});
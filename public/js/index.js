var socket = io();

socket.on('connect', function () {
    console.log('connected to the server');
});

socket.on('disconnect', function () {
    console.log('Disconnect server');
});


socket.on('newMessage', function (message) {
    console.log('new message', message);
});
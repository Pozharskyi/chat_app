var socket = io();

socket.on('connect', function () {
    console.log('connected to the server');

    socket.emit('createMessage', {
        from: "Artur",
        text: "Test"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnect server');
});


socket.on('newMessage', function (message) {
    console.log(message);
});
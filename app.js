var app = require('express')();
var PORT = 3000;
/**
  Creates and initializes Express server
*/
var server = app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
/**
  Declare a new web socket listening on Express server
*/
var io = require('socket.io').listen(server);
/**
  This part of the code listen to events coming from the socket
  and respond to then based on channel
*/

io.on('connection', function (socket) {
  console.log('Client connected');
  socket.on('message', function (message) {
    console.log('Socket connection works!');
  })
  socket.on('disconnect', function (message) {
    console.log('Client disconnected');
  })

})

var app = require('express')();
var PORT = 3000;

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'zorbao'
});

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
//Initialize connection to mysql
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
});
//Closes connection to mysql
connection.end();

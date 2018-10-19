var express = require("express"), http = require('http');
var app = express();
var server = http.createServer(app);
var port  = 5000;
var io = require('socket.io')(server);
server.listen(port, '0.0.0.0');



var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "naruto123"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
 
});

io.on('connection', function (socket) {
  console.log('Client connected');
  socket.on('message', function (message) {
    console.log('Message:', message);
    let params = [message[0], message[1], message[2]];
    con.query("INSERT INTO zorbao.contact_messages SET name=?,email=?,message=?; ", params, function (error,res) {
      if (error) throw error;
    });

  })
  socket.on('disconnect', function () {
    console.log('Client disconnected');
  })

  socket.on('fetch_user' , function(){
    con.query("SELECT * FROM zorbao.team_info ", function (error,res) {
      if (error) throw error;
      console.log('users get')
      io.emit('user',res);
    });
  })
  

})

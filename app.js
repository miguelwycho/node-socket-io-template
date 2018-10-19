var express = require("express"), http = require('http');
var app = express();
var server = http.createServer(app);
var port = 5000;
var io = require('socket.io')(server);
var fs = require('fs')
var path = require('path');
var formidable = require('formidable');
server.listen(port, '0.0.0.0');
app.use(express.static('src'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
})
app.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname + '/src/admin.html'));
})

app.post('/admin', function (req, res) {
  console.log("upload")
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var fileArray = [];
    for (let x = 1; x <= 7; x++) {
      fileArray.push(files['file' + x])
    }
    console.log(fileArray)
    fileArray.forEach(element => {
      if (element.name != '') {
        var oldpath = element.path;
        var newpath = __dirname + "/src/images/robo-cup/" + element.name;
        // fs.writeFile(__dirname + "/src/images/" + element.name, element, 'binary', function (err, result) {
        // })
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;

        });
      }
    });
    res.sendFile(path.join(__dirname + '/src/admin.html'));

  });
});


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
    con.query("INSERT INTO zorbao.contact_messages SET name=?,email=?,message=?; ", params, function (error, res) {
      if (error) throw error;
    });

  })
  socket.on('disconnect', function () {
    console.log('Client disconnected');
  })

  socket.on('fetch_user', function () {
    con.query("SELECT * FROM zorbao.team_info ", function (error, res) {
      if (error) throw error;
      console.log('users get')
      io.emit('user', res);
    });
  })


  socket.on('update', function (message) {
    let params = [];
    params.push(message.name);
    params.push(message.city);
    params.push(message.age);
    params.push(message.position);
    params.push(message.idteam_info);
    con.query("update zorbao.team_info set name =?,city =?,age=?,position=? where idteam_info =?;", params, function (error, res) {
      if (error) throw error;
    });
  })
  socket.on('fetch_team_images', function () {
    for (let x = 1; x <= 3; x++) {
      fs.readFile(__dirname + '/src/images/team-images/team' + x + '.png', function (err, buf) {
        // it's possible to embed binary data
        console.log(buf)
        // within arbitrarily-complex objects
        socket.emit('image', { image: true, buffer: buf.toString('base64'), n: x });
        console.log('image file is initialized');
      });
    }
  })

  socket.on('fetch_robocup_images', function () {
    fs.readdir(__dirname + '/src/images/robo-cup', function (err, items) {
      for (let x = 0;x < items.length; x++) {
        console.log(items[x])
        fs.readFile(__dirname + '/src/images/robo-cup/'+items[x], function (err, buf) {
          // within arbitrarily-complex objects
          socket.emit('robo_image', { image: true, buffer: buf.toString('base64'), n: x });
          console.log('image file is initialized');
        });
      }
    })

  })


})

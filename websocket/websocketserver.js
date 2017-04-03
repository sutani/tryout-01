
const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('ada koneksi baru');
  socket.on('disconnect', function(){
    console.log('koneksi tertutup');
  });
  socket.on('chat', (msg) => {
    console.log(msg);
  }); 
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

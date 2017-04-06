var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port, function(){
    console.log('Server listening at port ' + port);
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
        socket.on('message', function(message){
            console.log(message);
        });

        socket.emit('servermessage', "Hello World!");
});


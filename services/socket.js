const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const express = require('express');
const { callbackify } = require('util');
const app = express();
const server = http.createServer(app);
// const logo1 = require('../client/src/components/Chat/Assets/wait1.svg');


const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  }
});


var sockets = {},
users = {},
strangerQueue = false;


module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log("We have a new connection!!", socket.id);
  
    sockets[socket.id] = socket;
    users[socket.id] = {
      connectedTo: -1
    }
  
    if(strangerQueue !== false){
      users[socket.id].connectedTo = strangerQueue;
      users[strangerQueue].connectedTo = socket.id;
      socket.emit('conn',  {id: users[socket.id].connectedTo, s:2});
      sockets[strangerQueue].emit('conn', {text: "You are now chatting with a Stranger!" , id: users[strangerQueue].connectedTo, s:1});
      socket.emit('waiting', {text: "You are now chatting with a Stranger!"})
      strangerQueue = false;
    } else {
      strangerQueue = socket.id;
      socket.emit('waiting', {text: "Hold up, we are searching for someone to chat"})
    }

    socket.on("new", function () {
		
      // Got data from someone
      if (strangerQueue !== false) {
        users[socket.id].connectedTo = strangerQueue;
        users[strangerQueue].connectedTo = socket.id;
        users[socket.id].isTyping = false;
        users[strangerQueue].isTyping = false;
        socket.emit('conn');
        sockets[strangerQueue].emit('conn');
        strangerQueue = false;
      } else {
        strangerQueue = socket.id;
      }
      
    });

    socket.on("disconn", function () {
      var connTo = users[socket.id].connectedTo;
      if (strangerQueue === socket.id || strangerQueue === connTo) {
        strangerQueue = false;
      }
      users[socket.id].connectedTo = -1;
      users[socket.id].isTyping = false;
      if (sockets[connTo]) {
        users[connTo].connectedTo = -1;
        users[connTo].isTyping = false;
        sockets[connTo].emit("disconn", {who: 2});
      }
      socket.emit("disconn", {who: 1});
      peopleActive -= 2;
      io.sockets.emit('stats', {people: peopleActive});
    });
    
    socket.on('sendMessage', (message) => {
      if (users[socket.id].connectedTo !== -1 && sockets[users[socket.id].connectedTo]) {
        sockets[users[socket.id].connectedTo].emit('message', {text: message, user: users[socket.id].connectedTo})
        sockets[socket.id].emit('message', {text: message, user: users[socket.id].connectedTo});
      }
    });
  
    socket.on('disconnect', (err) => {
        console.log("User has disconnected");
  
        var connTo = (users[socket.id] && users[socket.id].connectedTo);
        if(connTo === undefined){
          connTo = -1;
        }
        if(connTo !== -1 && sockets[connTo]) {
          sockets[connTo].emit("disconn", {who: 2, reason: err && err.toString()});
          users[connTo].connectedTo = -1;
        }
  
        delete sockets[socket.id];
        delete users[socket.id];
  
        if(strangerQueue === socket.id || strangerQueue === connTo) {
          strangerQueue = false;
        }
    });
  });
}  
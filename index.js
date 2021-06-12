const express  = require('express');
const http     = require('http');
const cors     = require('cors');
const socketio = require('socket.io');
const PORT     = process.env.PORT || 5000;
const passport = require('passport');
const app      = express();
const mongoose = require('mongoose');
const server   = http.createServer(app);
const keys     = require('./config/keys'); 

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);


const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  }
});

var sockets = {},
users = {},
strangerQueue = false;


io.on('connection', (socket) => {
  console.log("We have a new connection!!", socket.id);

  sockets[socket.id] = socket;
  users[socket.id] = {
    connectedTo: -1,
  }

  if(strangerQueue !== false){
    users[socket.id].connectedTo = strangerQueue;
    users[strangerQueue].connectedTo = socket.id;
    socket.emit('conn', users[socket.id].connectedTo);
    sockets[strangerQueue].emit('conn');
    strangerQueue = false;
  } else {
    strangerQueue = socket.id;
  }
  
  socket.on('sendMessage', (message, callback) => {
    if (users[socket.id].connectedTo !== -1 && sockets[users[socket.id].connectedTo]) {
      sockets[users[socket.id].connectedTo].emit('message', message)
      callback();
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

server.listen(PORT);
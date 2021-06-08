const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const server = http.createServer(app);
// const io = socketio(server);
const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:3000',
    }
  });
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


io.on('connection', (socket) => {
    console.log("We have a new connection!!");

    socket.on('disconnect', () => {
        console.log("User has disconnected");
    });
});

app.use(router);

server.listen(PORT);
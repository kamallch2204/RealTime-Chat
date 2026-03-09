const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const {Server} = require('socket.io');
const {addMessage} = require('./controllers/MessageControllers');


dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.use('/api/messages', require('./routes/messageRoute'));

app.get('/', (req, res) => {
    res.send({
      message: "Chat API Server",
      version: "1.0.0",

      endpoints: {
        getMessages: 'GET /api/messages',
        createMessage: 'POST /api/messages',
        deleteMessage: 'DELETE /api/messages',
        testClient:'GET /socket-test.html'
      }

    });
})

io.on('connection', (socket) => 
{
    console.log('A user connected: ' + socket.id);
    socket.emit('message', {
        user:"System",
        text:'Welcome to the chat!',
        timestamp: new Date().toISOString()
         });
    socket.broadcast.emit('message', {
        user:"System",
        text:'A new user has joined the chat.',
        timestamp: new Date().toISOString()
          });
    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
        io.emit('message', {
            user:"System",
            text:'A user has left the chat.',
            timestamp: new Date().toISOString()
        });
        });
   socket.on("typing", (data) => {
        socket.broadcast.emit("userTyping", data);
    });

    socket.on('sendMessage', (data) => {
        const newMessage = addMessage(data);
        io.emit('receiveMessage', newMessage);


});
});



app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err.message
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


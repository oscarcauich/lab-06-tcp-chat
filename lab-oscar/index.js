'use scritp';

const net = require('net');
const server = net.createServer();

//define port our server should be listening to
const PORT = 3000;

//client pool
let clientPool = [];

//client constructor
function clientConnection(socket){
  socket.nickName = `gues-${Math.floor(Math.random()*10) + Math.ceil(Math.random()*100 + 1)}`;
  socket.write(`Welcome to my ChatRoom ${socket.nickName}\n`);
  console.log(socket.nickName, 'has connected');

  clientPool = [...clientPool, socket];
  console.log('here is the', clientPool[0].remoteAddress);
  socket.on('data', (buffer) => {
    let data = buffer.toString(); //data typed in by clients
    if(data.startsWith('/nickname')){
      socket.nickName = data.split('/nickname ')[1] || socket.nickName;
      socket.nickName = socket.nickName.trim();
      socket.write(`Your nickname was change to ${socket.nickName}\n`);
      return;
    }

    // "/dm slugbyte how are you"
    if(data.startsWith('/dm')){
      let content = data.split('/dm')[1] || '';
      let dmNickname = content.split(' ')[1];

      clientPool.forEach((item) =>{
        if(item.nickName == dmNickname){
          console.log(item.nickName);
          item.write(`${socket.nickName} says: ${data}`);
        }
      });
      return;
    }

    clientPool.forEach((item) =>{
      item.write(`${socket.nickName}: ${data}`);
    });
  });
}


server.on('connection', clientConnection);

server.listen(PORT, ()=>
  console.log('server started on Port #: ', PORT));//start server and console.log the port #

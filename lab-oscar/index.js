'use scritp';

const net = require('net');
const server = net.createServer();

//define port our server should be listening to
const PORT = 3000;

server.listen(PORT, ()=>
  console.log('server started on Port #: ', PORT));//start server and console.log the port #

##About this App

This App will initialize a TCP server and it will allow clients to connect to this server and it will allow user to exchange messages between each other. It will also allow user to send direct messages to a single user given they know that user's nickname.

###how to get server running

To start the server so it can start handling client connections, it need the following command type in the terminal.  
-node index.js

By default the server will be listening on port 3000 but if you need to change the port that the server listens to, all you need to do is change the port variable inside index.js file.

###how to use to connect to the server
For clients to be able to connect to the server and start sending messages to each other, all they need to do is open a terminal window and type in the following command.  
-telnet localhost 3000

--If clients would like to change their default nickname they can do so by issuing the following command.  
-/nick desired-nickname //Once they issue that command they will get the following prompt {Your nickname was change to desired-nickname}

--if clients would like to send a direct message to one client they can do so by issuing the following command.  
  -/dm nickname-of-client 'message'  

--The app also offer a troll feature which allow client to use a unlimited number of messages at the same to every connected client. to do so, type the following command.
-/troll #oftime 'message'  

--If client would like to close their sesson, they can do so by issuing the following command.  
-/quit  

Learnign backend in depth --

1.First thing that is what is the node js ??

Let's understand that what is node js . Node js is an runtime enviourement that allow us to run the javascript on the server side .

Why its benificial ??

1. No Need to learn the any other programming language for the backend like Php , java , python etc .

Now lets understand that how Does Node.js Work?


 ┌────────────────────────────┐
 │    Client Sends Request    │
 └────────────┬───────────────┘
              │
              │
   ┌──────────▼───────────┐
   │      Node.js Server  │
   └──────────┬───────────┘
              │
              ▼
 ┌─────────────────────────────┐
 │         Event Loop          │
 └─────────────────────────────┘
              │
              ▼
   ┌─────────────────────────┐
   │ Async I/O Operations    │
   │ (File Read/Write, DB)   │
   └──────────┬──────────────┘
              │
   ┌──────────▼───────────┐
   │  Task Completed      │
   └──────────┬───────────┘
              │
   ┌──────────▼───────────┐
   │  Callback Invoked    │
   └──────────┬───────────┘
              │
   ┌──────────▼─────────────┐
   │ Response Sent to Client│
   └────────────────────────┘



1. Imagine the there is one server called "Null Server" , Now the one client or user hit the request on this server 

2. That menas user --> Null Server
  
3. Now the Node js server would recieve that request but , The server would not process that request immidiatly instead it will pass the request to the event-loop 
yes the nodejs handle the request with event loop ,


imagine that the event loop is think like its event listener its always ready to listen the req/event and process them and than  give the output , 


pending...

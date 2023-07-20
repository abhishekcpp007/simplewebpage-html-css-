const express = require("express")
const serverConfig= require('./configs/server.config')
const mongoose=require('mongoose');
const dbConfig = require("./configs/db.config");

const app= express();// starting the server
 
mongoose.connect( dbConfig.DB_URL);// FOR this we have mongodb up and running in my local machine
  const db = mongoose.connection;
  db.on("error",()=>{
    console.log("Eroor while connection to DB");

  });
  db.once("open", ()=>{
    console.log("Db is connected");
  })

// logic to connect to MongoDB and create an ADMIN user


app.listen(serverConfig.PORT, ()=>{ // application bind to port number 3333  ()- is the call back function
    console.log(` Server started on the port number ${serverConfig.PORT}`);
})
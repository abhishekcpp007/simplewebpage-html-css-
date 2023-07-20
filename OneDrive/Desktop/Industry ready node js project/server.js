const express = require("express")
const serverConfig= require("./configs/server.config")

const app= express();// starting the server

app.listen(serverConfig.PORT, ()=>{ // application bind to port number 3333  ()- is the call back function
    console.log(` Server started on the port nomber ${serverConfig.PORT}`);
})
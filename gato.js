const http = require("http");
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const fs = require("fs");

const server = http.Server(app).listen(8080);
const io = socketIo(server);
const clients = {};

// Serve static resources
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/node_modules/"));

app.get("/", (req, res) =>{
    const stream = fs.createReadStream(__dirname + "");
    stream.pipe(res);
});





const express = require("express");
const app = express();
const path = require('path');
const server = require('http').createServer(app);

app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, '../dist', 'index.html')));

server.listen(80, "0.0.0.0", () => {});
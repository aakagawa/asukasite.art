const compression = require('compression');
const express = require('express');

const { resolve } = require("path");
const app = express();
const port = process.env.PORT || 8000;
const http = require('http');

app.use(compression());

app.set('port', port);
app.use(express.static(__dirname + '/src'));
app.use(express.json());
app.get('*', (req, res)  => { 
    res.sendFile(__dirname + '/src/index.html');
});


http.createServer(app).listen(port);


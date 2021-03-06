const express = require('express')
const app = express();
const port = 3000;
const config =  require('./data/twitter_config')
const Twitter = require('twitter-node-client').Twitter;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
require('./routes')(app)
var server = require("http").createServer(app);

server.listen(port, function () {
    console.log("Express server listening on " + port);
});

//Example calls



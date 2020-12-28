/**
 * Simple tests for all DB operations
 * 
 * Adds the test data to the Database = vacation Collection = vacations
 */


const DB_USER = "Arjun";
const DB_PASSWORD = "Arjun123456";
const DB_NAME = "GameLab";
const CLUSTER_HOST = "game.uvz4n.mongodb.net";

// Setup the DB URI


process.env.DB_URI = "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@cluster0-46e5h.mongodb.net/"+DB_NAME+"?retryWrites=true&w=majority"

var express = require('express')
var bodyParser = require('body-parser')


var router = express.Router();

// setup the game api
require('./api/v1/game')(router);

// setup the hotels api
require('./api/v1/gamesets')(router);

// Create the express app
app = express();

// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);



// Start the listener
app.listen(3000);
console.log('Listening on 3000')


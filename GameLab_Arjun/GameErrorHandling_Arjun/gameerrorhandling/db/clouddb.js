/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority

 const DB_USER = "Arjun";
 const DB_PASSWORD = "Arjun123456";
 const DB_NAME = "GameLab";
 const CLUSTER_HOST = "game.uvz4n.mongodb.net";

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"
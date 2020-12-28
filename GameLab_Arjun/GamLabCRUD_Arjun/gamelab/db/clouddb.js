// /**
//  * Setup the Database URL
//  */

const DB_USER = "Arjun";
const DB_PASSWORD = "Arjun123456";
const DB_NAME = "GameLab";
const CLUSTER_HOST = "game.uvz4n.mongodb.net";

//DB Connection String
//mongodb+srv://venkat:<password>@apidemo.xiijf.mongodb.net/<dbname>?retryWrites=true&w=majority

exports.DB_URI= `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`;


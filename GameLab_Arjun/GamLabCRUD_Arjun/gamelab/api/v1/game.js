/**
 * Contains the definition of the API endpoints for  game library
 * 
 */
// As a best practice keep the resource name same as the file name
var RESOURCE_NAME = 'game';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 

// Setup the vacations db
var db = require('../../db/game')

module.exports = function(router){
    'use strict';

    // RETRIEVE all active game library items
    // Active = validTill >= Today's date

    //    /v1/Vacations
    router.route(URI).get(function(req, res,next){
        console.log("GET game")
        //1. Setup query riteria for the active pacakages
        var criteria = {validTill : {$gte : new Date()}}

        //2. execute the query
        db.select(criteria, function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved vacations = %d",docs.length)
                res.send(docs)
            }
        });
    });

    // CREATE new game review
    router.route(URI).post(function(req, res,next){
        console.log("POST  game")

        //1. Get the data
        var doc = req.body;

        //2. Call the insert method
        db.save(doc, function(err,saved){
            if(err){
                // The returned error need to be defined better - in this example it is being left as is
                res.status(400).send(err)
            } else {
                res.send(saved)
            }
        });
    });
}

/**
 * Simple tests for all DB operations
 * 
 * Adds the test data to the Database = game Collection = game
 */


// Setup the DB_URI
process.env.DB_URI = require("../db/clouddb").DB_URI

//Test#1  Insert the game data
var db = require('../db/game')
var data = require('../data/game')


// Save a single row
db.save(data.SingleRow,function(err, saved){
    if(err){
        console.log("Failed single row save")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Save single row - %s",saved.name)
    }
});

// Save multiple rows
db.saveMany(data.MultipleRows,function(err, docs){
    if(err){
        console.log("Failed multiple row insert")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Multiple rows inserted - %d",docs.length)
    }
});

// Select game with some criteria
var selectCriteria = {validTill : {$gt : new Date()}}
db.select(selectCriteria, function(err, data){
    if(err){
        console.log("Failed to get game : %s",criteria)
        console.log(err)
    } else {
        console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
    }
});

// Update the game
var updateCriteria = {name:'Apex Legends'}
var doc = {description:'UPDATED Desc for TESTING'}
db.update(updateCriteria,doc,function(err, doc){
    if(err){
        console.log("Failed to get update")
        console.log(err)
    } else {
        console.log("Successfully updated with criteria %s", updateCriteria)
    }
})

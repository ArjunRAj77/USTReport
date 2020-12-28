/**
 * All database operations related to the game collection will reside in this file
 */
var model = require('../models/gamesets')
var settings = require('../db/settings')

// CREATE the game package
exports.save = function (data, callback) {

    new model.gamesets(data).save(function (err, inserted) {
        callback(err, inserted)

    })
}

// CREATE multiple game packages
exports.saveMany = function (rows, callback) {

    model.gamesets.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}

// UPDATE the game packages
// http://mongoosejs.com/docs/api.html#model_Model.update
exports.update = function (criteria, doc, callback) {
    // Replaced .update() with .updateMany() as .update() is deprecated
    model.gamesets.updateMany(criteria, doc, function (err, data) {
        callback(err, data)

    })
}

// RETRIEVE vacation game based on criteria
exports.select = function (criteria, callback) {
    model.gamesets.find(criteria, function (err, data) {
        callback(err, data)
    })
}
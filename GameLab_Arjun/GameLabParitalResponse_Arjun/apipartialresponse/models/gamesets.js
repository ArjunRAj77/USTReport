/**
 * 
 * 
 * Model for the game library system.
 */

var settings = require('../db/settings')


var GameSchema = settings.mongoose.Schema(
    {
        // Name of the game - The Tomb Raider is the  - primary Key
        name: {type:String, required:[true,'name is needed']},
        description : {type:String, required:true},
        // the games can be of any genre
        type: {type:String, enum:['Action role-playing game','Battle Royale']},
        // Destination city
        awards : [{award_title:String, award_year:String}],
        // Includes - what all does the package Include
        Game_platforms : [{
            platform:{type:String, enum:['PlayStation 4', 'Xbox One','Microsoft Windows','Nintendo Switch','Playstation 5','Xbox series X']}      
          }],
        // The release date of the game:
        intialReleaseDate:{type:String, required:true},
        //The engine used to make the game  
        Engine:{type:String, required:true},
        //The developers of the game  
        Developers:{type:String, required:true},
        // Rating of the game
        Rating: Number,
        //Pricing of the game
        pricePP: Number,
        // Special offers
        offer : {
            discount: Number,
            description : String,
            expires:{type:Date, required:false}
        },
        // Till what date is the offer valid
        validTill:{type:Date, required:true},
        // Package may get sold out
        soldout: {type:Boolean, required:true, default:false},
        // Link to pictures
        pictures:{type:[String]}
    }
);

// Export the model
exports.game = settings.mongoose.model('gamesets', GameSchema)
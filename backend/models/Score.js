const mongoose = require('mongoose'),
    Schema = mongoose.Schema

var ScoreSchema = new Schema (
    {
        scoreNum: {
            type: Number, 
            required: true
        },
        user: {
            type: String, 
            required: true
        },
        game: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Scores', ScoreSchema)
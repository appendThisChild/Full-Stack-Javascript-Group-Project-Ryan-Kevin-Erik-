const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artistName: {
        type: String,
        required: true,

    },
    genre: {
        type: String, 
        required: true
    }
})



module.exports = mongoose.model("Artist", artistSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: {
        type: String,
        required: true,

    },
    artistID: {
        type: mongoose.Schema.ObjectId, 
        ref: 'Artist',
        required: true
    }
})



module.exports = mongoose.model("Album", albumSchema)
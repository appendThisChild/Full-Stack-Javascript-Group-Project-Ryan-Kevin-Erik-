const express = require('express')
const songRouter = express.Router()
const Song = require('../models/song')


songRouter.get('./:albumID', (req, res) => {
    Song.find({ albumID: req.params.albumID }, (req, res)=> {

    })
})


module.exports = songRouter
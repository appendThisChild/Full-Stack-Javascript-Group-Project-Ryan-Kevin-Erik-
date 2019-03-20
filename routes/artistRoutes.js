const express = require('express')
const artistRouter = express.Router()
const Artist = require('../models/artist.js')

artistRouter.post('/', (req,res)=>{
    const newArtist = new Artist(req.body)
    newArtist.save((err, savedArtist)=>{
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedArtist)
    })
})

artistRouter.get('/:artist', (req, res)=>{
    console.log(req.params)
    Artist.findOne({artistName: req.params.artist},(err,foundArtist)=>{
        console.log(foundArtist)
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(foundArtist)
    })
})
module.exports = artistRouter
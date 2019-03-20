const express = require('express')
const albumRouter = express.Router()

const Album = require('../models/album')

albumRouter.post('/:artistID',(req,res)=>{
    const newAlbum = new Album(req.body)
    newAlbum.artistID = req.params.artistID
    newAlbum.save((err,saveAlbum)=>{
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send(savedAlbum)
    })
})

albumRouter.get('/:artistID',(req,res)=>{
    Album.find({artistID: req.params.artistID},(req,res)=>{
        
    })
})
module.exports = albumRouter
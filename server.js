const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/artist', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
}) 

// Our routes
// - search ... get .. searching for specific artist by name or genre
// 
// - liked ... get, post, delete .. user's liked playlist
//
// - selected artist by identifyer ... 
// 

// app.use((err, req, res, next) => {
//     console.error(err)
//     return res.send({errMsg: err.message})
// })
app.use('/artist', require('./routes/artistRoutes.js'))
app.use('/album', require('./routes/albumRoutes.js'))
app.use('/song', require('./routes/songRoutes.js') )


app.listen(7000, () => {
    console.log(' Server is running on Port 7000')
})

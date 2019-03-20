const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('// Something here... //', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
}) 

// Our routes
// -
// - 

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


app.listen(6500, () => {
    console.log(' Server is running on Port 6500')
})

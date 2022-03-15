const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.set('port', process.env.PORT || 4000)
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('/modpacks')
})

const modpackController = require('./controllers/modpackController')
app.use('/modpacks', modpackController)

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log('noice')
  })
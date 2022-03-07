const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('/modpacks')
})

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
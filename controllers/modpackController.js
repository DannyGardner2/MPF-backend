const express = require('express')
const router = express.Router()
const ModPack = require('../models/Modpack')

router.get('/', (req, res, next) => {
    ModPack.find({})
    .then((modpacks) => res.json(modpacks))
    .catch(next)
})

router.get('/:id', async (req, res, next) => {
    try {
        const modpacks = await ModPack.findById(req.params.id)
        if (modpacks) {
            res.json(modpacks)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router

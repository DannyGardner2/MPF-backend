const mongoose = require('../db/connection');

const modPack = new mongoose.Schema(
    {
        title: String,
        mcversion: String,
        thumbnail: String,
        category: Array,
        mods: Array
    }
);

module.exports = mongoose.model('ModPack', modPack);
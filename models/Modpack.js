const mongoose = require('../db/connection');

const ModPack = new mongoose.Schema(
    {
        title: String,
        mcversion: String,
        thumbnail: String,
        category: Array,
        mods: Array
    }
);

module.exports = mongoose.model('ModPack', ModPack);
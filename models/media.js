const mongoose = require("mongoose");
const schema = mongoose.Schema;


const media = new schema({
    nom: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    }
    , online: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('media', media);
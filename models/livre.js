const mongoose = require("mongoose");
const schema = mongoose.Schema;


const livre = new schema({
    titre: {
        type: String,
        required: true,
    },
    langue: {
        type: String,
        required: true,
    },
    auteur: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    lien: {
        type: String,
        required: true,
    }
    // , online: {
    //     type: String,
    //     required: true,
    // }

});

module.exports = mongoose.model('livre', livre);
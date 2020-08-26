var bodyParser = require("body-parser");
const express = require("express");
Media = require("../models/media");

const postMedia = (req, res) => {
    const nom = req.body.nom;
    const type = req.body.type;
    const short = req.body.short;
    const detail = req.body.detail;
    const poster = req.body.poster;
    const local = req.body.local;
    const online = req.body.online;

    const media = new Media({ nom: nom, type: type, short: short, detail: detail, poster: poster, local: local, online: online });
    media.save()
        .then((result) => {
            console.log(result);
            res.json('ajouté')
        })
        .catch((err) => {
            console.log(err);
        });
};

const getMedias = (req, res) => {
    Media.find()
        .then(media => {
            console.log(media);
            res.json(media)
        })
        .catch((err) => {
            console.log(err);
        });
};
const getMedia = (req, res) => {
    const id = req.body.id;
    Media.finById(id)
        .then(media => {
            console.log(media);
            res.json(media)
        })
        .catch((err) => {
            console.log(err);
        });
};


exports.postMedia = postMedia
exports.getMedia = getMedia
exports.getMedias = getMedias
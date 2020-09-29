var bodyParser = require("body-parser");
const express = require("express");
Livre = require("../models/livre");

const postLivre = (req, res) => {
    const titre = req.body.titre;
    const langue = req.body.langue;
    const auteur = req.body.auteur;
    const description = req.body.description;
    const poster = req.body.poster;
    const lien = req.body.lien;
    // const online = req.body.online;

    const livre = new Livre({ titre: titre, langue: langue, auteur: auteur, description: description, poster: poster, lien: lien });
    livre.save()
        .then((result) => {
            console.log(result);
            res.json('ajouté')
        })
        .catch((err) => {
            console.log(err);
        });
};
const getLivres = (req, res) => {
    Livre.find()
        .then(livre => {
            console.log(livre);
            res.json(livre)
        })
        .catch((err) => {
            console.log(err);
        });
};
const getLivre = (req, res) => {
    const id = req.body.id;
    Livre.finById(id)
        .then(livre => {
            console.log(livre);
            res.json(livre)
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postLivre = postLivre;
exports.getLivres = getLivres;
exports.getLivre = getLivre;
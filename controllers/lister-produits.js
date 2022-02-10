const Produits = require('../models/Produits');

exports.getLister = function(req, res, next) {
    res.render('lister-produits');
}
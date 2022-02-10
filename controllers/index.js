//Création d'une fonction pour appeler la page index
exports.getIndex = function(req, res, next) {
    res.render('index');
}
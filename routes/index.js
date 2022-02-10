var express = require('express');
var router = express.Router();

//Importation du fichier du controlleur index
let index = require('../controllers/index')

/* Récupération de la page index */
router.get('/', index.getIndex);

//Exportation de la route pour être utilisable depuis l'extérieur du fichier
module.exports = router;
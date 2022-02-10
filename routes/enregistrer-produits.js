//Importation des modules à utiliser
var express = require('express');
var router = express.Router();
var multer = require('../middlewares/multer_config');

//Importation du controlleur enregistrer-produit
let enregistrer = require('../controllers/enregistrer-produits')

/* Récupération de la page >enregistrer  */
router.get('/', enregistrer.getEnregistrer);


//La méthode post ferra appel au middleware multer pour l'enregistrement
//de l'image de chaque produit, puis enregistre le produit avec la méthode submitProductdataToDB 
router.post('/', multer, enregistrer.submitProductdataToDB);


module.exports = router;
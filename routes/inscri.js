var express = require('express');
var router = express.Router();
var multer = require('../middlewares/multer_config');

//Importation du fichier du controlleur incri
let inscri = require('../controllers/inscri')

/* Récupération de la page incri */
router.get('/', inscri.getInscri);
// router.post('/', inscri.submitProductdataToDB)
router.post('/',multer, inscri.submitProductdataToDB);

//Exportation de la route pour être utilisable depuis l'extérieur du fichier
module.exports = router;
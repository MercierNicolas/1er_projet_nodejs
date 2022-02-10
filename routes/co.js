var express = require('express');
var router = express.Router();
var multer = require('../middlewares/multer_config');

//Importation du fichier du controlleur index
let co = require('../controllers/co')

/* Récupération de la page index */
router.get('/', co.getCo);
router.post('/',multer, co.login);
//Exportation de la route pour être utilisable depuis l'extérieur du fichier
module.exports = router;
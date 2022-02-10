var express = require('express');
var router = express.Router();
let lister = require('../controllers/lister-produits')

/* GET home page. */
router.get('/', lister.getLister);

module.exports = router;
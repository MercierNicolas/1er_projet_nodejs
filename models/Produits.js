// Importation du module mongoose de MongoDB
//Mongoose permet de créer un Shema des données enregistrer dans MongoDB
const mongoose = require('mongoose');

//Création d'un Shema de données du produit à enregistrer dans MongoDB
const produitSchema = mongoose.Schema({  
    nom_produit: { type: String, require: true },
    prix_produit: { type: Number, require: true },
    descript_produit: { type: String, require: true },
    url_image: { type: String, require: true }
})

//Exportation du Schema de données
module.exports = mongoose.model('Produit', produitSchema);
// Importation du module mongoose de MongoDB
//Mongoose permet de créer un Shema des données enregistrer dans MongoDB
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Création d'un Shema de données du produit à enregistrer dans MongoDB
const compteSchema = mongoose.Schema({  
    user_nom: { type: String, require: true },
    user_prenom: { type: String, require: true },
    user_email: { type: String, require: true, unique : true  },
    user_mdp: { type: String, require: true }
})

compteSchema.plugin(uniqueValidator);

//Exportation du Schema de données
module.exports = mongoose.model('Compte', compteSchema);

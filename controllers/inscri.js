//Importation du Schema Produit depuis notre modèle
const Compte = require('../models/Compte');
const bcrypt = require('bcrypt');



//Création d'une fonction pour appeler la page inscri
exports.getInscri = function(req, res, next) {
    res.render('inscri');
}

//Création d'une 
exports.submitProductdataToDB = function(req, res, next) {
    
    // Hash du mdp
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash( req.body.user_mdp, salt, function(err, hash){
            console.log("MDP AVANT:", req.body.user_mdp);
            console.log("MDP APRES:", hash);
            //Création d'une instance de l'objet Compte
                
            const compte = new Compte({
                //Récupération des valeur des champ du formulaire d'enregistrement
                //avec req.body  
                user_nom: req.body.user_nom,
                user_prenom: req.body.user_prenom,
                user_email: req.body.user_email,
                user_mdp: hash,
                        
                });
                //Enregistrement du produit
                compte.save()
                    .then(() => res.status(201).json(
                        {message: 'Inscription enregistré avec succès ! '}))
                    .catch(error => res.status(400).json({ error: error.message }));
                    });
                });
                

}
/*
exports.submitProductDataToConsole = function(req, res, next) {
    
    console.log("MDP AVANT:", req.body.user_mdp);

    // Hash du mdp
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash( req.body.user_mdp, salt, function(err, hash){
            console.log("MDP APRES:", hash);

        });
      });
    




  
}
*/
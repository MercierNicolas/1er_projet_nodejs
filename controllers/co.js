//Importation du Schema Produit depuis notre modèle
const Compte = require('../models/Compte');
const bcrypt = require('bcrypt');



//Création d'une fonction pour appeler la page connexion
exports.getCo = function(req, res, next) {
    res.render('co');
}


exports.login = function(req, res, next) {
        Compte.findOne({user_email: req.body.user_email})
        .then(user => {
            if(!user.user_email){
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.user_mdp_co , user.user_mdp)
            .then(valid => {
                if(!valid){
                    return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                    userId : user.user_nom,
                    userEmail :  user.user_email
                })
            })
            .catch(error => res.status(500).json({ error }));

        })
     .catch(error => res.status(500).json({ error }));
    
       
};


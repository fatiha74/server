const express = require('express');
const entrepriseRouter = express.Router();


const {
    getAllEntreprise,
    getEntreprise,
    createEntreprise,
    updateEntreprise,
    deleteEntreprise
} = require('./entreprise.controller.js')


// on ajoute les constantes correspondantes à chaque route
entrepriseRouter.route('/entreprise')
    .get(getAllEntreprise)
    .post(createEntreprise)


entrepriseRouter.route('/entreprise/:id')
    .get(getEntreprise)
    .put(updateEntreprise)
    .delete(deleteEntreprise);

module.exports = entrepriseRouter;
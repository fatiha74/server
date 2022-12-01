const express = require('express');
const myRouter = express.Router();


const {
    getContrat,
    createContrat,
    updateContrat,
    deleteContrat
} = require('./contrat.controller.js')


// on ajoute les constantes correspondantes à chaque route
myRouter.route('/contrat')
    .get(getContrat)
    .post(createContrat)
    .put(updateContrat)
    .delete(deleteContrat);


module.exports = myRouter;
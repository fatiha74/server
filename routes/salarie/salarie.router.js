const express = require('express');
const salarieRouter = express.Router();


const {
    getAllSalarie,
    getSalarie,
    createSalarie,
    updateSalarie,
    deleteSalarie
} = require('./salarie.controller.js')


// on ajoute les constantes correspondantes à chaque route
salarieRouter.route('/salarie')
    .get(getAllSalarie)
    .post(createSalarie)


salarieRouter.route('/Salarie/:id')
    .get(getSalarie)
    .put(updateSalarie)
    .delete(deleteSalarie);

module.exports = salarieRouter;
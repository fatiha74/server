const express = require("express");
const app = express();
const cors = require("cors");
// les routes
const entrepriseRouter = require('./routes/entreprise/entreprise.router.js');
// const salarieRouter = require('./routes/salarie/salarie.router.js');
// const contratRouter = require('./routes/contrat/contrat.router.js');



app.use(cors());
app.use(express.json());
app.use(entrepriseRouter)











app.listen(5000, () => {
    console.log("Mon serveur fonctionne ");
});

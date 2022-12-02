const pool = require('../../db.js')

// ! GET all salarie
const getAllSalarie = (async (req, res) => {
    try {
        const allSalarie = await pool.query("SELECT * FROM salarie");
        res.json(allSalarie.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// ! GET une salarie
const getSalarie = (async (req, res) => {
    try {
        // L'id passé en parametre dans l'url sur postman
        const { id } = req.params;
        const salarie = await pool.query("SELECT * FROM salarie WHERE salarie_id = $1", [id]);
        res.json(salarie.rows[0]);
        console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})

// !CREATE
const createSalarie = (async (req, res) => {
    try {

        // on recupere la valeur de l'attribut
        const { nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, nom_jeune_fille,date_naissance,lieu_naissance,role_ } = req.body;
        // la valeur dans values $1 recupere la description que l'on a ecrit sur postman
        // RETURNING * retourne à chaque fois la data ici description que l'on peut voir sur postman
        const newSalarie = await pool.query("INSERT INTO salarie (nom,prenom,rue,ville,cp,telephone,email,mot_de_passe,nom_jeune_fille,date_naissance,lieu_naissance,\"role_\") VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING * ", [nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, nom_jeune_fille,date_naissance,lieu_naissance,role_]);
        res.json(newSalarie.rows[0])
        console.log(req.body)
    } catch (err) {
        console.error(err.message)
    }
    
})

// !UPDATE
const updateSalarie = (async (req, res) => {

    console.log(req.params);

    try {
        // L'id passé en parametre dans l'url sur postman

        const { id } = req.params;
        const { nom, prenom, rue, ville, cp, telephone, email, mot_de_passe,nom_jeune_fille,date_naissance,lieu_naissance,role_ } = req.body;

        // [description, id] == [argument 1 $1, argument 2 $2]
        const updateSalarie = await pool.query("UPDATE salarie SET nom = $1, prenom = $2, rue = $3,ville=$4,cp = $5, telephone = $6,email=$7,mot_de_passe= $8,\"role_\"=$9, raison_sociale= $10, code_ape=$11  WHERE salarie_id = $12", [nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, SIRET, raison_sociale, code_ape, utilisateur_id]);


        res.json(updateSalarie)
    } catch (err) {
        console.error(err.message)
    }

})

// !DELETE
const deleteSalarie = (async (req, res) => {
    try {
        // je recupere le parametre id passer dans l'url
        const { id } = req.params;
        const deleteSalarie = await pool.query("DELETE FROM salarie WHERE salarie_id = $1", [id]);
        res.json("le salarie est supprimé!")

    } catch (err) {
        console.error(err.message)
    }

})

// on exporte les constantes

module.exports = {
    getAllSalarie,
    getSalarie,
    createSalarie,
    updateSalarie,
    deleteSalarie
}

const pool = require('../../db.js')

// ! GET all entreprise
const getAllEntreprise = (async (req, res) => {
    try {
        const allEntreprise = await pool.query("SELECT * FROM entreprise");
        res.json(allEntreprise.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// ! GET une entreprise
const getEntreprise = (async (req, res) => {
    try {
        // L'id passé en parametre dans l'url sur postman
        const { id } = req.params;
        const entreprise = await pool.query("SELECT * FROM entreprise WHERE entreprise_id = $1", [id]);
        res.json(entreprise.rows[0]);
        console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})

// !CREATE
const createEntreprise = (async (req, res) => {
    try {

        // on recupere la valeur de l'attribut
        const { nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, SIRET, raison_sociale, code_ape, role_ } = req.body;
        // la valeur dans values $1 recupere la description que l'on a ecrit sur postman
        // RETURNING * retourne à chaque fois la data ici description que l'on peut voir sur postman
        const newEntreprise = await pool.query("INSERT INTO entreprise (nom,prenom,rue,ville,cp,telephone,email,mot_de_passe,\"SIRET\",raison_sociale,code_ape,role_) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING * ", [nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, SIRET, raison_sociale, code_ape, role_]);
        res.json(newEntreprise.rows[0])
        console.log(req.body)
    } catch (err) {
        console.error(err.message)
    }
    // res.send('cree new entreprise')
})

// !UPDATE
const updateEntreprise = (async (req, res) => {

    console.log(req.params);

    try {
        // L'id passé en parametre dans l'url sur postman

        const { id } = req.params;
        const { nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, SIRET, raison_sociale, code_ape } = req.body;

        // [description, id] == [argument 1 $1, argument 2 $2]
        const updateEntreprise = await pool.query("UPDATE entreprise SET nom = $1, prenom = $2, rue = $3,ville=$4,cp = $5, telephone = $6,email=$7,mot_de_passe= $8,\"SIRET\"=$9, raison_sociale= $10, code_ape=$11  WHERE entreprise_id = $12", [nom, prenom, rue, ville, cp, telephone, email, mot_de_passe, SIRET, raison_sociale, code_ape, utilisateur_id]);


        res.json(updateEntreprise)
    } catch (err) {
        console.error(err.message)
    }

})

// !DELETE
const deleteEntreprise = (async (req, res) => {
    try {
        // je recupere le parametre id passer dans l'url
        const { id } = req.params;
        const deleteEntreprise = await pool.query("DELETE FROM entreprise WHERE entreprise_id = $1", [id]);
        res.json("l'entreprise est supprimé!")

    } catch (err) {
        console.error(err.message)
    }
    res.send('delete')
})

// on exporte les constantes

module.exports = {
    getAllEntreprise,
    getEntreprise,
    createEntreprise,
    updateEntreprise,
    deleteEntreprise
}

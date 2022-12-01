const getAllContrat = (async (req, res) => {
    try {
        const allcontrat = await pool.query("SELECT * FROM contrat");
        res.json(allContrat.rows);
    } catch (err) {
        console.error(err.message)
    }
    // res.send("on recupere donnee de l'Contrat")
})

const getContrat = (async (req, res) => {
    try{
        // L'id passé en parametre dans l'url sur postman
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM contrat WHERE contrat_id = $1", [id]);
        res.json(todo.rows[0]);
        console.log(req.params)
    }catch (err){
        console.error(err.message)
    }
    // res.send("on recupere donnee de l'Contrat")
})

// const createContrat = (async (req, res) => {
//     // try {

//         // on recupere la valeur de l'attribut
//         const { entreprise_id,salarie_id,type_contrat,is_fulltime,date_debut,periode_fin_essai,motif_recrutement,fonction,statut } = req.body;
//         // la valeur dans values $1 recupere la description que l'on a ecrit sur postman
//         // RETURNING * retourne à chaque fois la data ici description que l'on peut voir sur postman
//         const newTodo = await pool.query("INSERT INTO todo (entreprise_id,salarie_id,type_contrat,\"is_fulltime\",date_debut,periode_fin_essai,motif_recrutement,fonction,statut) VALUES($1) RETURNING * ", [ entreprise_id,salarie_id,type_contrat,is_fulltime,date_debut,periode_fin_essai,motif_recrutement,fonction,statut ]);
//         res.json(newEntreprise.rows[0])
//         console.log(req.body)
//     } catch (err) {
//         console.error(err.message)
//     }
// }
//     // res.send('cree new Contrat')
// )

const updateContrat = ((req, res) => {
    res.send('update Contrat')
})

const deleteContrat = ((req, res) => {
    res.send('delete')
})

// on exporte les constantes

module.exports = {
    getContrat,
    createContrat,
    updateContrat,
    deleteContrat
}
const getSalarie = ((req, res) => {

    res.send("on recupere donnee de l'Salarie")
})

const createSalarie = ((req, res) => {
    res.send('cree new Salarie')
})

const updateSalarie = ((req, res) => {
    res.send('update Salarie')
})

const deleteSalarie = ((req, res) => {
    res.send('delete')
})

// on exporte les constantes

module.exports = {
    getSalarie,
    createSalarie,
    updateSalarie,
    deleteSalarie
}
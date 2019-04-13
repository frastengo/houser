module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses =>
            res.status(200).send(houses)
        )
    },

    addHouse: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state, zip, img, mortage, rent} = req.body
        db.add_house([name, address, city, state, zip, img, mortage, rent]).then(houses => {
            res.status(200).send(houses)
        })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_house([id]).then(houses => {
            res.status(200).send(houses)
        })
    },

    updateRent: (req, res) => {
        const db = req.app.get('db')
        const { name } = req.body
        const { id } = req.params
        // console.log(rent)
        db.update_rent([id, name]).then(houses => {
            res.status(200).send(houses)
        })
    }
}
const users = []
let globalId = 0

module.exports = {
    createUser: (req, res) => {
        let {name, alignment} = req.body
        let newUser = {
            id: globalId,
            name,
            alignment: 'none'
        }    
                 
        users.push(newUser)
        console.log(users)
        res.status(200).send(users)
        globalId++
    },
    reformUser: (req, res) => {
        let {id} = req.params
        let {alignment} = req.body
        let index = users.findIndex(elem => elem.id === +id)

        if(users[index].alignment === 'blue') {
            res.status(200).send('Enlightenment awaits you')
        } else if(users[index].alignment === 'red') {
            res.status(200).send('Ignorance is bliss')
        } else {
            res.sendStatus(400)
        }
    },
    assimilateUser: (req, res) => {
        let index = users.findIndex(elem => elem.id === +req.params.id)
        users.splice(index, 1)
        res.status(200).send(users)
    }
}
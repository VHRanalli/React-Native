const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    //esse metodo criptografa a senha que esta vindo do body para ca
    //apenas comente essa linha para não ter a criptografia
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    //Create >> parte de inserção do crud
    // o comando abaixo execulta a função de cadastro no banco
    const save = (req, res) => {
        obterHash(req.body.password, hash => { //se voce comentou a criptografia e interessante comentar a variavel hash
            const password = hash //comenta isso

            app.db('users')
                .insert({ 
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password //aqui voce pode passar req.body.password << so troca a password
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}
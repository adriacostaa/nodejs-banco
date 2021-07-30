const db = require('./db')

const Pessoa = db.sequelize.define('pessoa', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
})

//Criaçao a tabela
//Pessoa.sync({force: true})

module.exports = Pessoa;
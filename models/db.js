const Sequelize = require("sequelize")

const sequelize = new Sequelize('db', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
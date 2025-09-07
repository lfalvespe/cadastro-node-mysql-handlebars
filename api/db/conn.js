const { Sequelize } = require('sequelize')

require('@dotenvx/dotenvx').config({override: true})

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQLUSER, 
    process.env.MYSQL_ROOT_PASSWORD, 
    {
        host: process.env.MYSQLHOST,
        dialect: 'mysql',
        port: process.env.MYSQLPORT,
        dialectModule: require('mysql2')
    }
)

// try {
//     sequelize.authenticate()
//     console.log('Concetado ao sequelize')
// } catch (error) {
//     console.log(error)
// }

module.exports = sequelize
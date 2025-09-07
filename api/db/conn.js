const { Sequelize } = require('sequelize')

require('@dotenvx/dotenvx').config({override: true})

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
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
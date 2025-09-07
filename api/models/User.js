const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})

module.exports = User
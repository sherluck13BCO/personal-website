const Sequelize = require('sequelize');
const database = require('./database');

const Contact = database.define('contacts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
    },
    message:{
        type: Sequelize.STRING
    }
}, {
    timestamps: true
});

database.sync();

module.exports.Contact = Contact;
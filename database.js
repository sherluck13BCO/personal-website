const Sequelize = require('sequelize');

const connectionUrl = 'postgres://bljconez:bljconez@localhost:5432/bljconez';
const database = new Sequelize(connectionUrl);

module.exports = database;

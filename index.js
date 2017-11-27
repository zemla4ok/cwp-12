const Sequelize = require('sequelize')
const config = require('./config.json');
const db = require('./models')(Sequelize, config);

//todo: queries to DB
Labka();

async function Labka() {
    await require('./inserts')(db);
    console.log('asdas');
}
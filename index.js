const Sequelize = require('sequelize')
const config = require('./config.json');
const db = require('./models')(Sequelize, config);

//todo: queries to DB
Labka();

async function Labka() {
    await require('./inserts')(db);
    console.log('asdas');

    //1
    console.log('*****************1*****************');
    let result = await db.turtles.findAll();
    console.log('All turtles');
    result.forEach((val) => {
        console.log(val.name);
    });
    console.log();

    //2
    console.log('*****************2*****************');
    
}
const Sequelize = require('sequelize')
const config = require('./config.json');
const db = require('./models')(Sequelize, config);

//todo: queries to DB
Labka();

async function Labka() {
    await db.sequelize.sync({force: true});
    
    await require('./insertPizzas')(db);
    await require('./insertWeapons')(db);
    await require('./insertTurtles')(db);

    //1
    console.log('*****************1*****************');
    console.log('All turtles:');    
    let result = await db.turtles.findAll();
    result.forEach((val) => {
        console.log(val.name);
    });
    console.log();

    //2
    console.log('*****************2*****************');
    console.log('favourite pizza is hawaiian');
    result = await db.turtles.findAll({
        where: {
            '$firstFavouritePizza.name$': 'hawaiian'
        },
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
     })
     result.forEach((val) => {
         console.log(val.name);
     });
     console.log();

    //3
    console.log('*****************3*****************');
    console.log('unique favourite pizzas')
    result = await db.turtles.findAll({
        group: 'firstFavouritePizzaId',
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    result.forEach((val) => {
        console.log(val.firstFavouritePizza.name);
    })
    console.log();

    //7
    console.log('*****************7*****************');
    console.log('pizza with id=1');
     result = await db.pizzas.findAll({
         where: {
             id: 1
         }
     })
    result.forEach((val) => {
        console.log(val.name);
    })
    console.log();



}
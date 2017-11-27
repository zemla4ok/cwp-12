const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
    //todo: create object for connecting to db-sequelize

    const turtles = Turtle(Sequelize, sequelize);
    const weapons = Weapon(Sequelize, sequelize);
    const pizzas = Pizza(Sequelize, sequelize);

    //todo: creating relations between tables

    return{
        turtles,
        weapons,
        pizzas,

        sequelize: sequelize,
        Sequelize: Sequelize
    };
};
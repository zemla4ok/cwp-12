module.exports = (Sequelize, sequelize) => {
    return sequelize.define('turtles', {
        //todo: description of fields
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        color: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        weaponId: {
            type: Sequelize.INTEGER
        },
        firstFavouritePizzaId: {
            type: Sequelize.INTEGER
        },
        secondFavouritePizzaId: {
            type: Sequelize.INTEGER
        }
    });
};
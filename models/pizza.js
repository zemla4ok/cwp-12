module.exports = (Sequelize, sequelize) => {
    return sequelize.define('pizzas', {
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
        description: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        calories: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    });
};
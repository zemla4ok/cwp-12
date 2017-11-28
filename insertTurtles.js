module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all(
        [
            db.turtles.create({
                name: 'Leonardo',
                color: 'blue',
                weapon: 1,
                firstFavouritePizza: 1,
                secondFavouritePizza: 2 
            }),
            db.turtles.create({
                name: 'Donatello',
                color: 'purple',
                weapon: 2,
                firstFavouritePizza: 2,
                secondFavouritePizza: 3
            }),
            db.turtles.create({
                name: 'Mickelangelo',
                color: 'yellow',
                weapon: 3,
                firstFavouritePizza: 3,
                secondFavouritePizza: 4
            }),
            db.turtles.create({
                name: 'Rafael',
                color: 'red',
                weapon: 4,
                firstFavouritePizza: 4,
                secondFavouritePizza: 1
            })       
        ]
    )
    .then(() => {
        console.log('insert turtles completed');
    })
    .catch((err) => {
        console.log(err);
    })
}
module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all(
        [
            db.pizzas.create({
                name: 'four seasons',
                description: 'peperoni, ham, champignons, mozzarell, basil',
                calories: 3500
            }),
            db.pizzas.create({
                name: 'country',
                description: 'american souce rancho, onion, cucumbers, champignons, basil, mozzarell',
                calories: 3000
            }),
            db.pizzas.create({
                name: 'bavarian',
                description: 'mustard, hunting sausages, bulgarian pepper, onion, tomatoes, mozzarell',
                calories: 3200
            }),
            db.pizzas.create({
                name: 'hawaiian',
                description: 'cheese sauce, ham, chicken, pineapple, mozzarell',
                calories: 2000
            }),
            db.pizzas.create({
                name: 'mushroom',
                description: 'garlic sauce, ham, champignons, mozzarella, basil',
                calories: 2300
            }),
            db.weapons.create({
                name: 'swords',
                dps: 99
            }),
            db.weapons.create({
                name: 'pole',
                dps: 75
            }),
            db.weapons.create({
                name: 'nunchuck',
                dps: 123
            }),db.weapons.create({
                name: 'sais',
                dps: 101
            }),
            db.turtles.create({
                name: 'Leonardo',
                color: 'blue',
                weaponId: 1,
                firstFavouritePizzaId: 1,
                secondFavouritePizzaId: 2 
            }),
            db.turtles.create({
                name: 'Donatello',
                color: 'purple',
                weaponId: 2,
                firstFavouritePizzaId: 2,
                secondFavouritePizzaId: 3
            }),
            db.turtles.create({
                name: 'Mickelangelo',
                color: 'yellow',
                weaponId: 3,
                firstFavouritePizzaId: 3,
                secondFavouritePizzaId: 4
            }),
            db.turtles.create({
                name: 'Donatello',
                color: 'red',
                weaponId: 4,
                firstFavouritePizzaId: 4,
                secondFavouritePizzaId: 1
            })
        ]
    )
}
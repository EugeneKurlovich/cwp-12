module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all([
        db.pizzas.create({
            name: 'pizza1',
            description: 'pizza',
            calories: 100
        }),
        db.pizzas.create({
            name: 'pizza2',
            description: 'pizza',
            calories: 200
        }),
        db.pizzas.create({
            name: 'pizza3',
            description: 'pizza',
            calories: 300
        }),
        db.pizzas.create({
            name: 'pizza4',
            description: 'pizza',
            calories: 400
        }),
        db.weapons.create({
            name: 'weapon1',
            dps: 100,
            ownerId: 1
        }),
        db.weapons.create({
            name: 'weapon2',
            dps: 200,
            ownerId: 2
        }),
        db.weapons.create({
            name: 'weapon3',
            dps: 300,
            ownerId: 3
        }),
        db.weapons.create({
            name: 'weapon4',
            dps: 400,
            ownerId: 4
        }),
        db.turtles.create({
            name: 'turtle1',
            color: 'color1',
            weaponId: 1,
            firstFavouritePizzaId: 1,
            secondFavouritePizzaId: 2
        }),
        db.turtles.create({
            name: 'turtle2',
            color: 'color2',
            weaponId: 2,
            firstFavouritePizzaId: 2,
            secondFavouritePizzaId: 4
        }),
        db.turtles.create({
            name: 'turtle3',
            color: 'color3',
            weaponId: 3,
            firstFavouritePizzaId: 3,
            secondFavouritePizzaId: 1
        }),
        db.turtles.create({
            name: 'turtle4',
            color: 'color4',
            weaponId: 4,
            firstFavouritePizzaId: 4,
            secondFavouritePizzaId: 3
        })
    ]);
};
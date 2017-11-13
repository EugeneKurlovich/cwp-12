const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);


WorkWork();

async function WorkWork() {
    await require('./addInfo')(db);
    //1. Выведем всех черепашек-ниндзя
    console.log("Lets go");
    let result = await db.turtles.findAll();
    console.log("-----------------------------------1");
    result.forEach((value) => {
        console.log(value.name);
    });
    // 2. Выведем всех черепашек-ниндзя у кого любимая пицца "Mozzarella"
    result = await db.turtles.findAll({
        where: {
            '$firstFavouritePizza.name$': "Mozzarella"
        },
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    console.log("-----------------------------------2");
    result.forEach((value) => {
        console.log(value.name);
    });
    // 3. Выведем все пиццы отмеченные как любимые без повторов
    result = await db.turtles.findAll({
        group: 'firstFavouritePizzaId',
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    console.log("-----------------------------------3");
    result.forEach((turtle) => {
        console.log(turtle.firstFavouritePizza.name);
    });
    // 4. Создадим пятую черепашку с вашим именем и любимым цветом. Незабываем про оружие
    result = await db.turtles.create({
        name: 'Igor',
        color: 'Yellow',
        weaponId: 1,
        firstFavouritePizzaId: 1,
        secondFavouritePizzaId: 2
    });
    console.log("-----------------------------------4");
    console.log("Черепаха создана");
    // 5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"
    result = await db.pizzas.update({
            description: "SUPER FAT!"
        },
        {
            where: {
                calories: {[db.Sequelize.Op.gt]: '3000'}
            }
        });
    // 6. Запросим число оружий с dps больше 100
    result = await db.turtles.count({
        where: {
            '$weapon.dps$': {[db.Sequelize.Op.gt]: '100'}
        },
        include: [{
            model: db.weapons,
            as: 'weapon'
        }]
    });
    console.log("-----------------------------------6");
    console.log(result);
    // 7. Найдем пиццу с id равным 1
    result = await db.pizzas.findById(1);
    console.log("-----------------------------------7");
    console.log(result.name);
    // 8. Добавим пятой черепашке любимую пиццу через объект черепахи
    result = await db.turtles.update({
            firstFavouritePizzaId: 4
        },
        {
            where: {
                name: 'Igor'
            }
        });
}

   
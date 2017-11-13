const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);


WorkWork();

async function WorkWork() {
    await require('./addInfo')(db);
    //1
    console.log("Lets go");
    let result = await db.turtles.findAll();
    console.log("-----------------------------------");
    result.forEach((value) => {
        console.log(value.name);
    });
    

    //2
      result = await db.turtles.findAll({
        where: {
            '$firstFavouritePizza.name$': "pizza1"
        },
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    console.log("-----------------------------------");
    result.forEach((value) => {
        console.log(value.name);
    });

    //3
}

   
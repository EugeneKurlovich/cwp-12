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

// 4
    result = await db.turtles.create({
        name: 'Eugene',
        color: 'color5',
        weaponId: 3,
        firstFavouritePizzaId: 2,
        secondFavouritePizzaId: 4
    });
    console.log("-----------------------------------");
    console.log("CREATED");


 //5
 result = await db.pizzas.update({
            description: "SUPER FAT!"
        },
        {
            where: {
                calories: {[db.Sequelize.Op.gt]: '100'}
            }
        });

    console.log("-----------------------------------");
    console.log("UPDATED");

//6
     result = await db.turtles.count({
        where: {
            '$weapon.dps$': {[db.Sequelize.Op.gt]: '100'}
        },
        include: [{
            model: db.weapons,
            as: 'weapon'
        }]
    });
    console.log("-----------------------------------");
    console.log(result);   

 //7

     result = await db.pizzas.findById(1);
    console.log("-----------------------------------");
    console.log(result.name);   

  //8

  esult = await db.turtles.update({
            firstFavouritePizzaId: 4,
            firstFavouritePizzaId: 3
        },
        {
            where: {
                name: 'Eugene'
            }
        });   
    console.log("-----------------------------------");
    console.log("ADDED");   

}

   
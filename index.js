const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);


WorkWork();

async function WorkWork() {
    await require('./addInfo')(db);
    //1
    let result = await db.turtles.findAll();
    console.log("-----------------------------------");
    console.log("All turtles : ");
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
    console.log("Turtles with favorite pizza is pizza 1 : ");
    result.forEach((value) => {
        console.log(value.name);
    });

//3

 result = await db.turtles.findAll({
         include: [{
             model: db.pizzas,
             as: 'firstFavouritePizza'
        }]      
     });

let mySet = new Set();

    result.forEach((i) => {
         mySet.add(i.firstFavouritePizza.name);
     });

     console.log("-----------------------------------");
     console.log("Favourite Pizzas :");
    mySet.forEach((i) => {
         console.log(i);
     });

// 4
    result = await db.turtles.create({
        name: 'Eugene',
        color: 'color5',
        weaponId: 3
    });
    console.log("-----------------------------------");
    console.log("CREATED EUGENE TURTLE");

   result = await db.turtles.findAll();
    console.log("-----------------------------------");
    console.log("All turtles : ");
    result.forEach((value) => {
        console.log("Name " + value.name);
         console.log("Color" + value.color);
          console.log("weaponId " + value.weaponId);
           console.log("FirstFavouritePizzaId " + value.firstFavouritePizzaId);
          console.log(" secondFavouritePizzaId " + value.secondFavouritePizzaId);
    });

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
    console.log("UPDATED PIZZA DESCRIPTION WHERE CALORIES GREATER 100");

 result = await db.pizzas.findAll();
    console.log("-----------------------------------");
    console.log("All pizzas : ");
    result.forEach((value) => {
        console.log("Name : " + value.name);
        console.log("description : " + value.description);
       
    });

//6

 result = await db.weapons.count(
     { 
         where: 
         {'$weapons.dps$': {[db.Sequelize.Op.gt]: '100'}} });

    console.log("-----------------------------------");
    console.log( "COUNT WEAPONS WITH DPS GREATER 100 : " + result);   


 //7
     result = await db.pizzas.findById(1);
    console.log("-----------------------------------");
    console.log("PIZZA NAME BY ID = 1 : " + result.name);   

  //8
  result = await db.turtles.update({
            firstFavouritePizzaId: 4,
            secondFavouritePizzaId: 3
        },
        {
            where: {
                name: 'Eugene'
            }
        });   
    console.log("-----------------------------------");
    console.log("ADDED EUGENE TURTLE FAVOURITE PIZZA");   
   result = await db.turtles.findAll();
    console.log("-----------------------------------");
    console.log("All turtles : ");
    result.forEach((value) => {
        console.log("Name " + value.name);
         console.log("Color" + value.color);
          console.log("weaponId " + value.weaponId);
          console.log("FirstFavouritePizzaId " + value.firstFavouritePizzaId);
          console.log(" secondFavouritePizzaId " + value.secondFavouritePizzaId);
    });

}

   
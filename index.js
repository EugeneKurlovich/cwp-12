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
    
  
}

   
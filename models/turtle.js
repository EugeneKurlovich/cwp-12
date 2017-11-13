module.exports = (Sequelize, sequelize) => {
  return sequelize.define('turtles', {
      id: {    type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true},
     name: { type: Sequelize.STRING(500),
   allowNull: false},
    color:{ type: Sequelize.STRING(500),
   allowNull: false},
    weaponId:{type: Sequelize.INTEGER},
    firstFavoritePizzaId:{type: Sequelize.INTEGER},
    secondFavoritePizzaId:{type: Sequelize.INTEGER}
  });
};

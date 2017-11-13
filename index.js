const Sequelize = require('sequelize');
const config = require('./config.json');

const db = require('./models')(Sequelize, config);


const dbOptions = {
  host: config.db.host,
  dialect: 'mssql',
  define: { timestamps: false }
};

const sequelize = new Sequelize(config.db.name,
  config.db.user, config.db.pass, dbOptions);

sequelize
  .authenticate()
  .then(() => {
    console.log('Соединение установлено.');
  })
  .catch(err => {
    console.error('Ошибка соединения:', err);
  });

   
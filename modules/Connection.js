const Sequelize = require("sequelize");

// conexão ao banco
const sequelize = new Sequelize(
  "bvjy0dmzbbq5hygp3esy",
  "uakjjxbozqbvo13n",
  "1PvAcdFfrUVdNmWUnmAF",
  {
    host: "bvjy0dmzbbq5hygp3esy-mysql.services.clever-cloud.com",
    dialect: "mysql",
  },
);

module.exports = sequelize;

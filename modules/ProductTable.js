const Sequelize = require("sequelize");

const sequelize = require("./Connection");

// criando a tabela de produtos no banco de dados
const Product = sequelize.define("produtos", {
  productName: {
    type: Sequelize.STRING,
  },
  cnpjManufacturer: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  unitaryValue: {
    type: Sequelize.INTEGER,
  },
  lotValue: {
    type: Sequelize.INTEGER,
  },
  expirationDate: {
    type: Sequelize.DATE,
  },
});

// gerando a tabela
// Product.sync({ force: true });

module.exports = Product;

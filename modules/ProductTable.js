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
    type: Sequelize.STRING,
  },
  unitaryValue: {
    type: Sequelize.STRING,
  },
  lotValue: {
    type: Sequelize.STRING,
  },
  expirationDate: {
    type: Sequelize.DATE,
  },
});

// gerando a tabela
// Product.sync({ force: true });

module.exports = Product;

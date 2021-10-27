const Product = require("./ProductTable");

const express = require("express");

const server = express();
server.use(express.json()); // faz com que o express entenda JSON

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// definindo a porta
const PORT = process.env.PORT || 3333;
server.listen(PORT);

const routes = () => {
  server.get("/products", async (req, res) => {
    const products = await Product.findAll();

    return res.json(products);
  });

  server.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const products = await Product.findByPk(id);

    return res.json(products);
  });

  server.post("/products/add", (req, res) => {
    const {
      NomeProduto,
      CNPJFabricante,
      Quantidade,
      ValorUnitario,
      ValorLote,
      DataValidade,
    } = req.body;

    Product.create({
      productName: NomeProduto,
      cnpjManufacturer: CNPJFabricante,
      amount: Quantidade,
      unitaryValue: ValorUnitario,
      lotValue: ValorLote,
      expirationDate: DataValidade,
    });

    return res.json({ msg: "Produto adicionado com sucesso!" });
  });

  server.put("/products/edit/:id", async (req, res) => {
    const { id } = req.params;

    const {
      NomeProduto,
      CNPJFabricante,
      Quantidade,
      ValorUnitario,
      ValorLote,
      DataValidade,
    } = req.body;

    const produto = await Product.findByPk(id);
    // alterando dados do produto
    produto.productName = NomeProduto;
    produto.cnpjManufacturer = CNPJFabricante;
    produto.amount = Quantidade;
    produto.unitaryValue = ValorUnitario;
    produto.lotValue = ValorLote;
    produto.expirationDate = DataValidade;

    await produto.save();

    res.json({ msg: `Produto ${id} alterado com sucesso!` });
  });

  server.delete("/products/delete/:id", async (req, res) => {
    const { id } = req.params;

    const produto = await Product.findByPk(id);
    produto.destroy();

    res.json({ msg: `Produto ${id} deletado com sucesso!` });
  });
};

module.exports = routes;

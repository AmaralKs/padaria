const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

const { cadastrarProdutoGet } = require("../controllers/produtoController");
const ProdutoController = require("../controllers/produtoController");

routes.get("/produto/relatorio", ProdutoController.recuperarProduto);
 
routes.get("/produto/cadastro/:id?", ProdutoController.cadastrarProdutoGet);

routes.post("/produto/cadastro", ProdutoController.cadastrarProdutoPost);

routes.get("/produto/remover/:id", ProdutoController.removerProduto);


module.exports = routes;
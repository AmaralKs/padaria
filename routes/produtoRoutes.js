const express = require("express");
const routes = express.Router();
const produtoController = require("../controllers/produtoController");

const auth = require("../middlewares/usuarioAuth");
const { cadastrarProdutoGet } = require("../controllers/produtoController");
const ProdutoController = require("../controllers/produtoController");

routes.get("/produto/relatorio", auth, ProdutoController.recuperarProduto);
 
routes.get("/produto/cadastro/:id?", auth, ProdutoController.cadastrarProdutoGet);

routes.post("/produto/cadastro", auth, ProdutoController.cadastrarProdutoPost);

routes.get("/produto/remover/:id", auth, ProdutoController.removerProduto);


module.exports = routes;
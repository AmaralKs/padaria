const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/usuarioController");

const auth = require("../middlewares/usuarioAuth");
const { cadastrarUsuarioGet } = require("../controllers/usuarioController");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuarios/login", UsuarioController.loginUsuarioGet);

routes.post("/usuarios/login", UsuarioController.loginUsuarioPost);
 
routes.get("/usuarios/cadastro/:id?", UsuarioController.cadastrarUsuarioGet);

routes.post("/usuarios/cadastro", UsuarioController.cadastrarUsuarioPost);

routes.get("/usuarios/logout", UsuarioController.logout);

module.exports = routes;
const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/usuarioController");

const { cadastrarUsuarioGet } = require("../controllers/usuarioController");
const usuarioController = require("../controllers/usuarioController");

routes.get("/usuarios/login", UsuarioController.loginUsuarioGet);

routes.post("/usuarios/login", UsuarioController.loginUsuarioPost);
 
routes.get("/usuarios/cadastro/:id?", UsuarioController.cadastrarUsuarioGet);

routes.post("/usuarios/cadastro", UsuarioController.cadastrarUsuarioPost);


module.exports = routes;
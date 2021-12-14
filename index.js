const express = require("express");//importando o express
const app = express();
app.use(express.urlencoded({ extended:true }));//QUERO PEGAR INFORMACOES
app.set('view engine','ejs');//QUERO VER AS COISA BONITO
app.use(express.static("public"));

//IMPORTANDO ROTAS:
const usuarioRoutes = require("./routes/usuarioRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dbUser:45039910@cluster0.o1ew2.mongodb.net/DADOS?retryWrites=true&w=majority");//conectando no BD

app.use(usuarioRoutes);
app.use(produtoRoutes);


app.get("/", function(req, res){
    res.render("index", {title:"Inicio"});
});

app.get("/sobre", function(req, res){
    res.render("sobre", {title:"Sobre"});
});

app.listen(8655, function(){ //localhost
    console.log("SERVIDOR EXECUTANDO/FUNCIONANDO");
});

app.use(function(req, res){
    res.render("erro", {title:"ERRO"});
});
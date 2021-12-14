const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = Schema({
    nome: String,
    preco: Number,
    descri: String,

});

module.exports = mongoose.model("Produto", produtoSchema);
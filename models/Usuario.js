const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    login: String,
    senha: String,
    email: String,
    telefone: Number,
    momentoCadastro:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema);
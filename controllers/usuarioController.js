const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");


module.exports = class usuarioController {

    static loginUsuarioGet(req, res) {
        const status = req.query.s;
        let msg = "";
        if(status == 1){ msg = "login e/ou senha invalido(s)"};

        res.render("usuarios/login", { title:"Login", msg });
    };

    static async loginUsuarioPost(req, res) {
        const usuario = req.body;
        
        const resultado = await Usuario.findOne({ login: usuario.login});

        if(resultado){
            if(bcrypt.compareSync(usuario.senha, resultado.senha)){
                res.redirect("/");
                return;
            };
        };
        res.redirect("/usuarios/login?s=1")
    };

    static async cadastrarUsuarioGet(req, res) {
        const status = req.query.s;
        let msg = "";
        if(status == 2){ msg = "login existente"};
        res.render("usuarios/cadastro", { title: "Cadastrar Usuario", msg, usuario: {} });

    };

    static async cadastrarUsuarioPost(req, res) {
        const usuario = req.body;//pegando os inputs
        const hash = bcrypt.hashSync(usuario.senha);
        const resultado = await Usuario.findOne({ login: usuario.login});

        if(resultado){

            res.redirect("/usuarios/cadastro?s=2")
            
        }else{
            const novoUsuario = new Usuario({
                login: usuario.login,
                senha: hash,
                email: usuario.email,
                telefone: usuario.telefone
            });
            await novoUsuario.save();//vai mandar salvar o usuario e continuar executando o resto do codigo
        };

        res.redirect("/");
    };

};
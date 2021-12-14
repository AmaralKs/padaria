const Produto = require("../models/Produto");
module.exports = class produtoController {

    static async recuperarProduto(req, res) {
        const cadastrados = await Produto.find();//pegando os dados do BD (o await faz ele esperar a recuperação da lista de clientes para renderizar a tela)
        res.render("produtos/relatorio", { cadastrados, title: "Lista de Produtos" });//renderizando a tela e passando os dados
    };

    static async cadastrarProdutoGet(req, res) {
        const id = req.params.id;
        if (id) {
            const produto = await Produto.findById(id);
            res.render("produtos/cadastro", { title: "Editar Produto", produto });
        } else {
            res.render("produtos/cadastro", { title: "Cadastrar Produto", produto: {} });
        };
    };

    static async cadastrarProdutoPost(req, res) {
        const produto = req.body;//pegando os inputs
        if (produto.id) {
            await Produto.findOneAndUpdate({ _id: produto.id}, {
                nome: produto.nome,
                preco: produto.preco,
                descri: produto.descri
            });
        } else {
            const novoProduto = new Produto({
                nome: produto.nome,
                preco: produto.preco,
                descri: produto.descri
            });
            await novoProduto.save();//vai mandar salvar o produto e continuar executando o resto do codigo
        };

        res.redirect("/");
    };

    static async removerProduto(req, res) {
        const id = req.params.id;
        await Produto.findByIdAndDelete({ _id: id });
        res.redirect("/produto/relatorio")
    };

};
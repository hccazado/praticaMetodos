const title = "Listagem - trabalhando verbos HTTP";
const listaModel = require("../model/listaModel");
const multer = require('multer');

//Definindo destino para o multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'public/img/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+'-'+Date.now())
    }
})

//instanciando middleware do multer com a definição do storage
const upload = multer({storage: storage});

const controller = {
    home: (req,res,next) =>{
        res.render("index", {
            title: title,
            item: listaModel.getLista()
            });
    },
    adiconarForm: (req,res, next) =>{
        res.render("cadastro", {
            title: title
        })
    },
    criarItem: (req, res, next) =>{
        let {id, nome} = req.body;
        console.log(req.file);
        listaModel.addItem(id, nome);
        res.redirect("/");
    },
    editarForm: (req, res, next) =>{
        let {id} = req.params;
        var item =listaModel.getItem(id);
        res.render("editar", {
            title: "Editando o item" ,
            id: item.id,
            nome: item.nome
        });
    },
    editarItem: (req, res, next) =>{
        let {id, nome} = req.body;
        listaModel.editItem(id,nome);
        res.redirect("/");
    },
    deleteItem: (req, res, next) =>{
        let {id} = req.params;
        listaModel.deleteItem(id);
        res.redirect("/");
    }
}

module.exports = controller;
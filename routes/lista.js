const express = require("express");
const router = express.Router();
const controller = require("../controller/listaController");
const multer = require('multer');

//Definindo destino para o multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'public/images/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+'-'+Date.now())
    }
})

//instanciando middleware do multer com a definição do storage
const upload = multer({storage: storage});

router.get("/", controller.home);
router.get("/adicionar", controller.adiconarForm);
router.post("/adicionar", upload.single("avatarFile"), controller.criarItem);
router.get("/:id/editar", controller.editarForm);
router.put("/:id/editar", controller.editarItem);
router.delete("/:id/excluir", controller.deleteItem);

module.exports = router;
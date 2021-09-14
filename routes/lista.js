const express = require("express");
const router = express.Router();
const controller = require("../controller/listaController");

router.get("/", controller.home);
router.get("/adicionar", controller.adiconarForm);
router.post("/adicionar", controller.criarItem);
router.get("/:id/editar", controller.editarForm);
router.put("/:id/editar", controller.editarItem);
router.delete("/:id/excluir", controller.deleteItem);

module.exports = router;
 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/SejourController");
 const userController = require("../controllers/UtilisateurController");


 router.post("/createSejour", userController.isLoggedIn, controle.createSejour);
 router.get("/", controle.getSejours);

 router.delete("/:id", userController.isLoggedIn, controle.deleteSejour);
 module.exports = router;
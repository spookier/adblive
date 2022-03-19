 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/LicenciesController");
 const userController = require("../controllers/UtilisateurController");

 router.get("/getAll", controle.getAll);

 router.post("/createBenevole", userController.isLoggedIn, controle.createBenevole);
 router.get("/getBenevoles", controle.getBenevoles);

 router.post("/createEducateur", userController.isLoggedIn, controle.createEducateur);
 router.get("/getEducateurs", controle.getEducateurs);

 router.post("/createJoueur", userController.isLoggedIn, controle.createJoueur);
 router.get("/getJoueurs", controle.getJoueurs);

 module.exports = router;
 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/LicenciesController");
 const adminController = require("../controllers/AdminController");

 router.get("/getAll", controle.getAll);

 router.post("/createBenevole", adminController.isLoggedIn, controle.createBenevole);
 router.get("/getBenevoles", controle.getBenevoles);

 router.post("/createEducateur", adminController.isLoggedIn, controle.createEducateur);
 router.get("/getEducateurs", controle.getEducateurs);

 router.post("/createJoueur", adminController.isLoggedIn, controle.createJoueur);
 router.get("/getJoueurs", controle.getJoueurs);

 module.exports = router;
 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/SponsorController");
 const userController = require("../controllers/UtilisateurController");


 router.post("/", userController.isLoggedIn, controle.createSponsor);

 router.get("/", controle.getSponsors);
 
 router.get("/:id", controle.getSponsor);

 router.delete("/:id", userController.isLoggedIn, controle.deleteSponsor);

 router.patch("/:id", userController.isLoggedIn, controle.updateSponsor);

 module.exports = router;
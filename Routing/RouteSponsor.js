 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/SponsorController");
 const adminController = require("../controllers/AdminController");


 router.post("/", adminController.isLoggedIn, controle.createSponsor);

 router.get("/", controle.getSponsors);
 
 router.get("/:id", controle.getSponsor);

 router.delete("/:id", adminController.isLoggedIn, controle.deleteSponsor);

 router.patch("/:id", adminController.isLoggedIn, controle.updateSponsor);

 module.exports = router;
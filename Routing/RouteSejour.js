 const express = require("express");
 const router = express.Router();
 const controle = require("../controllers/SejourController");
 const adminController = require("../controllers/AdminController");



 router.post("/createSejour", adminController.isLoggedIn, controle.createSejour);

 router.put("/update/:id", adminController.isLoggedIn, controle.updateSejour);

 router.get("/", controle.getSejours);

 router.delete("/:id", adminController.isLoggedIn, controle.deleteSejour);


module.exports = router;
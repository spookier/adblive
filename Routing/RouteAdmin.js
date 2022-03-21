const express = require("express");
const router = express.Router();

const controle = require("../controllers/AdminController");

router.post("/signUp",controle.isLoggedIn, controle.signUp); //Créer un compte Admin
router.post("/login", controle.login);

module.exports = router;
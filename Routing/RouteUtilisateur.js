const express = require("express");
const router = express.Router();

const controle = require("../controllers/UtilisateurController");

router.post("/signUp", controle.signUp);
router.post("/login", controle.login);

module.exports = router;
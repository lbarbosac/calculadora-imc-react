const express = require("express");
const { salvarIMC } = require("../controllers/imcController");

const router = express.Router();

router.post("/imc", salvarIMC);

module.exports = router;
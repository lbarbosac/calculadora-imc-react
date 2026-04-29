const express = require("express");
const { salvarGorduraCorporal } = require("../controllers/gorduraCorporalController");

const router = express.Router();

router.post("/gordura-corporal", salvarGorduraCorporal);

module.exports = router;
const express = require("express");
const cors = require("cors");
const imcRoutes = require("./routes/imcRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api", imcRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API da calculadora IMC funcionando." });
});

module.exports = app;
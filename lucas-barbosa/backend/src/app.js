const express = require("express");
const cors = require("cors");
const imcRoutes = require("./routes/imcRoutes");
const gorduraCorporalRoutes = require("./routes/gorduraCorporalRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api", imcRoutes);
app.use("/api", gorduraCorporalRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API da calculadora funcionando." });
});

module.exports = app;
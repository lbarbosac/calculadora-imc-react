const imcModel = require("../models/imcModel");

async function salvarIMC(req, res) {
  try {
    const { nome, peso, altura, imc, classificacao } = req.body;

    if (!nome || !peso || !altura || !imc || !classificacao) {
      return res.status(400).json({
        mensagem: "Preencha todos os campos obrigatórios."
      });
    }

    const resultado = await imcModel.criarRegistroIMC({
      nome,
      peso,
      altura,
      imc,
      classificacao
    });

    return res.status(201).json({
      mensagem: "IMC salvo com sucesso.",
      id: resultado.insertId
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao salvar no banco de dados.",
      erro: erro.message
    });
  }
}

module.exports = {
  salvarIMC
};
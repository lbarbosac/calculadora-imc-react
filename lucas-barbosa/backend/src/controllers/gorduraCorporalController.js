const gorduraCorporalModel = require("../models/gorduraCorporalModel");

async function salvarGorduraCorporal(req, res) {
  try {
    const {
      nome,
      sexo,
      altura,
      pescoco,
      cintura,
      quadril,
      percentual_gordura,
      classificacao
    } = req.body;

    if (!nome || !sexo || !altura || !pescoco || !cintura || !percentual_gordura || !classificacao) {
      return res.status(400).json({
        mensagem: "Preencha todos os campos obrigatórios."
      });
    }

    const resultado = await gorduraCorporalModel.criarRegistroGorduraCorporal({
      nome,
      sexo,
      altura,
      pescoco,
      cintura,
      quadril,
      percentual_gordura,
      classificacao
    });

    return res.status(201).json({
      mensagem: "Gordura corporal salva com sucesso.",
      id: resultado.insertId
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Erro ao salvar gordura corporal.",
      erro: erro.message
    });
  }
}

module.exports = {
  salvarGorduraCorporal
};
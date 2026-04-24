const conexao = require("../config/db");

async function criarRegistroIMC(dados) {
  const { nome, peso, altura, imc, classificacao } = dados;

  const sql = `
    INSERT INTO historico_imc (nome, peso, altura, imc, classificacao)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [resultado] = await conexao.execute(sql, [
    nome,
    peso,
    altura,
    imc,
    classificacao
  ]);

  return resultado;
}

module.exports = {
  criarRegistroIMC
};
const conexao = require("../config/db");

async function criarRegistroGorduraCorporal(dados) {
  const {
    nome,
    sexo,
    altura,
    pescoco,
    cintura,
    quadril,
    percentual_gordura,
    classificacao
  } = dados;

  const sql = `
    INSERT INTO historico_gordura_corporal
    (nome, sexo, altura, pescoco, cintura, quadril, percentual_gordura, classificacao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [resultado] = await conexao.execute(sql, [
    nome,
    sexo,
    altura,
    pescoco,
    cintura,
    quadril,
    percentual_gordura,
    classificacao
  ]);

  return resultado;
}

module.exports = {
  criarRegistroGorduraCorporal
};
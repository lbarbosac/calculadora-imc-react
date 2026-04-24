const URL_API = "http://localhost:3001/api/imc";

export async function salvarIMC(dados) {
  const resposta = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.mensagem || "Erro ao salvar no banco.");
  }

  return resposta.json();
}
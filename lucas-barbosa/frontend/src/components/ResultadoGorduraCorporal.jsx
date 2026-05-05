function ResultadoGorduraCorporal({ resultado }) {
  if (!resultado) return null;

  const classificarCor = {
    "Muito baixo": "abaixo",
    "Atlético": "atletico",
    "Fitness": "fitness",
    "Aceitável": "aceitavel",
    "Elevado": "elevado",
    "Muito elevado": "muito-elevado"
  };

  const classeResultado = classificarCor[resultado.classificacao] || "aceitavel";

  return (
    <div className={`resultado ${classeResultado}`}>
      <h2>Resultado</h2>
      <p><strong>Nome:</strong> {resultado.nome}</p>
      <p><strong>Sexo:</strong> {resultado.sexo === "masculino" ? "Masculino" : "Feminino"}</p>
      <p><strong>Percentual de gordura:</strong> {resultado.percentual_gordura}%</p>
      <p><strong>Classificação:</strong> {resultado.classificacao}</p>
    </div>
  );
}

export default ResultadoGorduraCorporal;
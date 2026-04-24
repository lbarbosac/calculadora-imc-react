function ResultadoIMC({ resultado }) {
    const classes = {
      "Abaixo do peso": "abaixo",
      "Peso normal": "normal",
      "Sobrepeso": "sobrepeso",
      "Obesidade grau 1": "obesidade",
      "Obesidade grau 2": "obesidade",
      "Obesidade grau 3": "obesidade"
    };
  
    const classeCategoria = classes[resultado.classificacao] || "normal";
  
    return (
      <div className={`resultado ${classeCategoria}`}>
        <h2>Resultado</h2>
        <p><strong>Nome:</strong> {resultado.nome}</p>
        <p><strong>IMC:</strong> {resultado.imc.toFixed(2)}</p>
        <p><strong>Classificação:</strong> {resultado.classificacao}</p>
      </div>
    );
  }
  
  export default ResultadoIMC;
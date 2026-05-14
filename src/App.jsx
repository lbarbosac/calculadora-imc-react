 import React, { useState } from "react";
import './App.css';

const CalculadoraIMC = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const pesoNumerico = parseFloat(peso);
    const alturaNumerica = parseFloat(altura);

    if (!pesoNumerico || !alturaNumerica || pesoNumerico <= 0 || alturaNumerica <= 0) {
      alert("Por favor, digite um valor válido para peso e altura");
      return;
    }

    const alturaEmMetros = alturaNumerica > 3 ? alturaNumerica / 100 : alturaNumerica;

    const imcCalculado = (pesoNumerico / (alturaEmMetros * alturaEmMetros)).toFixed(1);

    const valorIMC = parseFloat(imcCalculado);
    setImc(imcCalculado);

    if (valorIMC < 18.5) setClassificacao("Abaixo do Normal");
    else if (valorIMC <= 24.9) setClassificacao("Normal");
    else if (valorIMC <= 29.9) setClassificacao("Sobrepeso");
    else if (valorIMC <= 34.9) setClassificacao("Obesidade Grau I");
    else if (valorIMC <= 39.9) setClassificacao("Obesidade Grau II");
    else setClassificacao("Obesidade Grau III");
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <p>Calcule seu índice de massa corporal</p>

      <input
        type="number"
        placeholder="Peso em kg (ex: 75)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      <input 
        type="number"
        placeholder="Altura em cm (ex: 170)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className="resultado-area">
          <p>Seu IMC é: <strong>{imc}</strong></p>
          <p>Classificação: <strong>{classificacao}</strong></p>
        </div>
      )}

      <img 
        src="https://patient.boehringer-ingelheim.com/br/abracar-a-vida/sites/default/files/2025-10/tabela-imc.png" 
        alt="Tabela de faixas de IMC" 
        className="imc-image"
      />
    </div>
  );
};

export default CalculadoraIMC;
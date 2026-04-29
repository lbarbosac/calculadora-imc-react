import React, { useState } from "react";



const CalculadoraIMC = () => {

  const [altura, setAltura] = useState("");

  const [peso, setPeso] = useState("");

  const [imc, setImc] = useState(null);



  const calcularIMC = () => {

    if (!peso || !altura || peso <= 0 || altura <= 0) {

      alert("Por favor, digite um valor válido para peso e altura");

      return; 

    }



    const alturaEmMetros = altura / 100;

    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);

    setImc(imcCalculado.toFixed(2));

  };



  return (

    <div style={{ padding: "20px" }}>

      <h1>Calculadora de IMC</h1>

      <p>Digite seus dados abaixo:</p>

      

      <input 

        type="number" 

        placeholder="Peso (ex: 70)" 

        onChange={(e) => setPeso(e.target.value)} 

      />

      <input 

        type="number" 

        placeholder="Altura em cm (ex: 175)" 

        onChange={(e) => setAltura(e.target.value)} 

      />

      

      <button onClick={calcularIMC}>Calcular</button>



      {imc && (

        <p>Seu IMC é: <strong>{imc}</strong></p>

      )}

    </div>

  );

};



export default CalculadoraIMC;
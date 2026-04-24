export function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  export function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau 1";
    if (imc < 40) return "Obesidade grau 2";
    return "Obesidade grau 3";
  }
export function calcularGorduraCorporal(dados) {
    const { sexo, altura, pescoco, cintura, quadril } = dados;
  
    const alturaCm = Number(altura);
    const pescocoCm = Number(pescoco);
    const cinturaCm = Number(cintura);
    const quadrilCm = Number(quadril || 0);
  
    if (sexo === "masculino") {
      const gordura =
        86.010 * Math.log10(cinturaCm - pescocoCm) -
        70.041 * Math.log10(alturaCm) +
        36.76;
  
      return Number(gordura.toFixed(2));
    }
  
    const gordura =
      163.205 * Math.log10(cinturaCm + quadrilCm - pescocoCm) -
      97.684 * Math.log10(alturaCm) -
      78.387;
  
    return Number(gordura.toFixed(2));
  }
  
  export function classificarGorduraCorporal(percentual, sexo) {
    if (sexo === "masculino") {
      if (percentual < 5) return "Muito baixo";
      if (percentual < 14) return "Atlético";
      if (percentual < 18) return "Fitness";
      if (percentual < 25) return "Aceitável";
      return "Elevado";
    }
  
    if (percentual < 15) return "Muito baixo";
    if (percentual < 21) return "Atlético";
    if (percentual < 25) return "Fitness";
    if (percentual < 32) return "Aceitável";
    return "Elevado";
  }
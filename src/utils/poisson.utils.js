export const factorial = n => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

// Funcion para calcular la probabilidad Poisson de un evento
// μ = Definimos la media de la distribución de Poisson
// x = Definimos el número deseado de eventos
export const poisson = (μ, x) => {
  if (isNaN(μ) || isNaN(x)) throw Error('Valores indefinidos');

  const numerador = Math.pow(Math.E, -μ) * Math.pow(μ, x);
  const denominador = factorial(x);

  return numerador / denominador;
}

export const getPoissonProbabilities = (avgSuccessRate, conditional) => {
  let variableProbability = 0;
  switch (conditional.type) {
    case "lessThan":
      for (let i = 0; i < conditional.variables[0]; i++) {
        variableProbability += poisson(avgSuccessRate, i);
      }
      break;
    case "greaterThan":
      variableProbability = 1;
      for (let i = 0; i < conditional.variables[0]; i++) {
        variableProbability -= poisson(avgSuccessRate, i);
      }
      break;
    case "equalThan":
      variableProbability = poisson(avgSuccessRate, conditional.variables[0]);
      break;
    case "lessAndEqualThan":
      for (let i = 0; i <= conditional.variables[0]; i++) {
        variableProbability += poisson(avgSuccessRate, i);
      }
      break;
    case "greaterAndEqualThan":
      variableProbability = 1;
      for (let i = 0; i <= conditional.variables[0]; i++) {
        variableProbability -= poisson(avgSuccessRate, i);
      }
      break;
    case "lessEqualAndGreaterEqualThan":
      const leftVariable = conditional.variables[0];
      const rightVariable = conditional.variables[1];
      for (let i = leftVariable; i <= rightVariable; i++) {
        variableProbability += poisson(avgSuccessRate, i);
      }
      break;
    default:
      variableProbability = 0;
      break;
  }


  const tableProbabilities = [];
  let acc = 0;

  while (acc < 0.9999) {
    const i = tableProbabilities.length;
    const result = poisson(avgSuccessRate, i);
    acc += result;
    if (isNaN(result)) continue;
    tableProbabilities.push({
      n: i,
      poisson: result,
      percentage: (result * 100).toFixed(2) + '%',
    });
  }

  return { variableProbability, tableProbabilities };
};
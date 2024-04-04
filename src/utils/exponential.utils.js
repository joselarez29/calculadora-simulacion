// Funcion para calcular la probabilidad Poisson de un evento
// μ = Definimos la media de la distribución
// x = Definimos el número deseado de eventos
export const exponential = (μ, x, isLessThan = true) => {
  if (isNaN(μ) || isNaN(x)) throw Error('Valores indefinidos');

  const result = 1 - (Math.E ** ((x * -1) / μ))

  return isLessThan ? result : Math.abs(result - 1);
}

export const getExponentialProbabilities = (avgSuccessRate, conditional) => {
  const variance = avgSuccessRate ** 2;

  let variableProbability = 0;
  switch (conditional.type) {
    case "greaterAndEqualThan":
      variableProbability = exponential(avgSuccessRate, conditional.variables[0], false);
      break;
    case "lessEqualAndGreaterEqualThan":
      const leftVariable = exponential(avgSuccessRate, conditional.variables[0]);
      const rightVariable = exponential(avgSuccessRate, conditional.variables[1]);
      variableProbability = rightVariable - leftVariable;
      break;
    default:
      variableProbability = exponential(avgSuccessRate, conditional.variables[0]);
      break;
  }


  const tableProbabilities = [];
  const isLessAndEqualThan = conditional.type === "lessAndEqualThan";
  let continueDistribution = true;
  while (continueDistribution) {
    const n = variance < 1 ? tableProbabilities.length * variance : tableProbabilities.length;
    const result = exponential(avgSuccessRate, n, isLessAndEqualThan);
    if (isNaN(result)) continue;
    tableProbabilities.push({
      n,
      probability: result,
      percentage: (result * 100).toFixed(2) + "%",
    });
    continueDistribution = isLessAndEqualThan ? (tableProbabilities?.at(-1)?.probability ?? 0) < 0.9999 : (tableProbabilities?.at(-1)?.probability ?? 0) > 0.00009;
  }

  return { variableProbability, tableProbabilities };
};
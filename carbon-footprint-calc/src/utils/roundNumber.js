export const roundNumber = (value, decimalPlaces = 2) =>
  Number(
    Math.round(parseFloat(value + "e" + decimalPlaces)) + "e-" + decimalPlaces
  );

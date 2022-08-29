// Converts house consumption to annual if necessary
export const houseConsumptionToAnnual = {
  electric: (el) => el,
  naturalGas: (el) => el,
  fuelOil: (el) => el,
  lpg: (el) => el,
  waste: (el) => el * 52, // Input is in weeks
  water: (el) => el * 365, // Input is in days
};

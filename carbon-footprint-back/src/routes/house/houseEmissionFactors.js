import { SHORT_TON_IN_KG } from "../../utils/unitsConversion/shortTonInKg.js";
import { TON_IN_KG } from "../../utils/unitsConversion/tonInKg.js";
import { US_GALLON_IN_LITER } from "../../utils/unitsConversion/usGallonInLiter.js";

export const houseEmissionFactors = {
  electric: 0.7, // kg Co2e/kWh
  naturalGas: 6.6, // kg Co2e/therms
  fuelOil: 11.6 * US_GALLON_IN_LITER, // kg Co2e/liter
  lpg: 6.8 * US_GALLON_IN_LITER, // kg Co2e/liter
  waste: (0.53 * TON_IN_KG) / SHORT_TON_IN_KG, // kg Co2e/kg
  water: 0.376, // kg Co2e/kWh
};

// EF for water taken from: https://www.researchgate.net/figure/Energy-consumption-rate-and-CO-2-emission-factor-of-water-in-Japan-FY-2008-kg-CO-2-m_tbl1_276044385 [Table 1]

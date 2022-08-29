// EFS where converted from kg Co2e/kg_product to kg Co2e/kCal_product:
// Operation: kg_Co2e/kg_product * avg_product_group_kg/avg_product_group_kCal
export const foodEmissionFactors = {
  meat: (5.88 * 0.164) / 0.407,
  dairy: 6.53 * 0.244 * 0.149 * 0.97,
  fruitsVeggies: 1.3 * 0.125 * 0.111,
  snacks: (1.486428571 * 0.1) / 0.567,
  cerealsBakery: (1.64875 * 0.1) / 0.13,
  drinks: 2.216 * 0.33 * 0.139,
};

// EF's from Cradle-to-consumer taken from: https://escholarship.org/content/qt55b3r1qj/qt55b3r1qj_noSplash_180824a8a7999e6ed012089791ef3796.pdf?t=krnb1h [page 6]

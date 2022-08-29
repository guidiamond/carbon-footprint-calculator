import express from "express";
import { houseEmissionFactors } from "./houseEmissionFactors.js";
import { houseConsumptionToAnnual } from "./houseConsumptionToAnnual.js";
import { houseSchema } from "./houseSchema.js";

export const houseRoute = express.Router();

/**
 * House Route success response schema
 * @typedef {object} HouseRouteResponse
 * @property {string} emission.required - Co2 emission in kg co2e/year
 */

/**
 * House Route success response schema
 * @typedef {object} HouseRouteError
 * @property {string} error.required - Error message
 */

/**
 * GET /impact/house
 * @description Calculates co2 emissions for a single power source
 * @param {string} input.query.required - Value of consumption in [electric: kWh/yr, naturalGas: therms/yr, fuelOil: liters/yr, lpg: liters/yr, waste: kg/week, water: liters/day]
 * @param {string} type.query.required - Type of power source - enum:electric,naturalGas,fuelOil,lpg,waste,water
 * @return {HouseRouteResponse} 200 - success response
 * @return {HouseRouteError} 400 - Error
 */
houseRoute.get("/impact/house", (req, res) => {
  const { input, type } = req.query;

  // Validate inputs
  try {
    houseSchema.validateSync(req.query);
  } catch (err) {
    console.log(err);
    const error = err.errors[0] || "Error validating the schema";
    res.status(400);
    return res.json({ error });
  }

  // Co2 Calculations:

  // Get corresponding emissionFactor
  const emissionFactor = houseEmissionFactors[type];
  // Convert usage to annual
  const annualConsumption = houseConsumptionToAnnual[type](input);
  // Multiply usage by EF
  const co2EmissionKg = emissionFactor * annualConsumption;

  res.status(200);
  return res.json({ emission: co2EmissionKg });
});

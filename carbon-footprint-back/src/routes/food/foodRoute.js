import express from "express";
import { foodEmissionFactors } from "./foodEmissionFactors.js";
import { foodSchema } from "./foodSchema.js";

export const foodRoute = express.Router();

/**
 * Food Route success response schema
 * @typedef {object} FoodRouteResponse
 * @property {string} emission.required - Co2 emission in kg co2e/year
 */

/**
 * House Route success response schema
 * @typedef {object} FoodRouteError
 * @property {string} error.required - Error message
 */

/**
 * GET /impact/food
 * @description Calculates co2 emissions for a single food group
 * @param {string} input.query.required - kCal/day consumed of food group
 * @param {string} type.query.required - Name of the food group - enum: meat,dairy,fruitVeggies,snacks,cerealsBakery,drinks
 * @return {FoodRouteResponse} 200 - Success response
 * @return {FoodRouteError} 400 - Error
 */
foodRoute.get("/impact/food", (req, res) => {
  const { input, type } = req.query;

  // Validate inputs
  try {
    foodSchema.validateSync(req.query);
  } catch (err) {
    console.log(err);
    const error = err.errors[0] || "Error validating the schema";
    res.status(400);
    return res.json({ error });
  }

  // Co2 Calculations:

  // Get corresponding emissionFactor
  const emissionFactor = foodEmissionFactors[type];
  // Convert usage to annual
  const annualConsumption = input * 365; // Days to year conversion
  // Multiply usage by EF
  const co2EmissionKg = emissionFactor * annualConsumption;

  res.status(200);
  return res.json({ emission: co2EmissionKg });
});

import cors from "cors";
import express from "express";
import { setupSwagger } from "./configs/swagger.js";
import { houseRoute } from "./routes/house/houseRoute.js";
import { foodRoute } from "./routes/food/foodRoute.js";
import { env } from "./configs/env.js";

export const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

setupSwagger(app); // Setup swagger route for documentation

// Routes
app.use(houseRoute);
app.use(foodRoute);

export const server = app.listen(env.PORT, () => {
  console.log(`Listening on ${env.PORT}`);
});

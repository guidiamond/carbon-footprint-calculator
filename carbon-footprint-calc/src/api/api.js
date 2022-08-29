import axios from "axios";

// Setup Carbon Footprint Calculator's API request emitter
export const carbonFCApi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  responseType: "json",
});

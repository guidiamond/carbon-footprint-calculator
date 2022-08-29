import * as yup from "yup";

export const foodSchema = yup.object().shape({
  input: yup
    .number()
    .required("Input missing!")
    .min(0, "Input must be greater than 0"),
  type: yup
    .string()
    .required("Type missing!")
    .oneOf([
      "meat",
      "dairy",
      "fruitsVeggies",
      "snacks",
      "cerealsBakery",
      "drinks",
    ]),
});

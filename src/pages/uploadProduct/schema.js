import * as yup from "yup";
export const addProductSchema = yup.object().shape({
  title: yup.string().required().max(20),
  rate: yup.number().required().positive("Must be a positive number"),
  quantity: yup.number().required().positive("Must be a positive number"),
  description: yup.string().required().max(150),
});

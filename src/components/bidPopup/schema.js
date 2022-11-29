import * as yup from "yup";

export const bidSchema = (price, quantity) => {
  return yup.object().shape({
    price: yup
      .number()
      .required()
      .positive()
      .min(price, "Bid must be greater than rate"),
    quantity: yup
      .number()
      .required()
      .max(quantity, "This value exceeds the quantity")
      .positive(),
  });
};

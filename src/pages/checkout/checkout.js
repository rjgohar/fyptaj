import React from "react";
// import Review from "./Review";
import {
  Divider,
  Typography,
  Button,
  Box,
  makeStyles,
} from "@material-ui/core";
import TextField from "../../components/input";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Buttons from "../../components/buttons";
import InputField from "../../components/inputField";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(
  `pk_test_51JdCvyGJIiFBZOe7NrXS0wFJCLhm1NQnWlGuxHg5A0CwAFoXfDNvXnYhwyqZgFV6TFpUyEAdiZdYvSiL9JyP7Ay600L1w8qKiE`
);

const PaymentForm = ({ backStep, nextstep, timeout }) => {
  const classes = useStyles();
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: "1",
        customer: {
          firstname: "Sartaj",
          lastname: "Ahmad",
          email: "sartaj@gmail.com",
        },
        shipping: {
          name: "International",
          street: "Sadiqabad",
          town_city: "Rawalpindi",
          county_state: "Pakistan",
          postal_zip_code: "1500",
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      //   HandleOnCapture(checkToken.id, orderData);
      //   timeout();
      //   nextstep();
    }
  };

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom style={{ margin: "20px 0px" }}>
          Payment Method
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.main}>
        <Box className={classes.inner}>
          <input type="text" placeHolder="User ID" className={classes.input} />
          <input type="text" placeHolder="Name" className={classes.input} />
        </Box>
        <Box className={classes.inner}>
          <input type="text" placeHolder="Address" className={classes.input} />
          <input type="text" placeHolder="City" className={classes.input} />
        </Box>
        <Box className={classes.inner}>
          <input type="text" placeHolder="Country" className={classes.input} />
          <input type="text" placeHolder="Phone" className={classes.input} />
        </Box>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form
                style={{
                  width: "500px",
                  padding: "8px 0px",
                  margin: "auto",
                }}
                onSubmit={(e) => handleSubmit(e, elements, stripe)}
              >
                <Box style={{ border: "1px solid #1BA665", padding: "1em" }}>
                  <CardElement />
                </Box>
                <Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      padding: "1em",
                      flexDirection: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/checkout">
                      <Buttons variant="contained" onClick={backStep}>
                        Back
                      </Buttons>
                    </Link>

                    <Link to="/thanks">
                      {" "}
                      <Buttons
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={!stripe}
                      >
                        Pay
                      </Buttons>
                    </Link>
                  </div>
                </Box>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </Box>
    </>
  );
};

export default PaymentForm;

const useStyles = makeStyles((theme) => ({
  main: {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 25,
    justifyContent: "center",
  },
  input: {
    width: "350px",
    height: "40px",
    marginTop: "20px",
    paddingLeft: "12px",
    fontSize: "22px",
    border: "1px solid #1BA665",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("xs")]: {
      width: "280px",
    },
  },

  inner: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

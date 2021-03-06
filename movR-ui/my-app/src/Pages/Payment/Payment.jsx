import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Payment.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function Payment({ data }) {
  const history = useHistory();
  const bill = data.bill;
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8000/payment", {
          amount: parseFloat(bill) * 100,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          const putObject = {
            bill: data.bill,
            completed: data.completed,
            totalHours: data.totalHours,
            totalDistance: data.totalDistance,
          };
          const response = await axios.put(
            `http://localhost:8000/trips/${data.id}`,
            putObject
          );
          console.log(response.data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="paymentPage-container">
      <h1 className="landing-txt1" style={{ textAlign: "center" }}>
        Enter Payment Details!
      </h1>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="PaymentButton">Pay</button>
        </form>
      ) : (
        <div className="paymentPage-sucess">
          <h1 className="landing-txt1">Payment Successful!</h1>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => history.push("/tripsummary", { id: data.id })}
            onClick={() => history.push("/review", { id: data.id })}
          >
            Proceed
          </Button>
        </div>
      )}
    </div>
  );
}

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
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
          amount: parseFloat(bill),
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
    <>
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
        <div>
          <h2>Payment Successful!</h2>
          <Button>View your trips!</Button>
        </div>
      )}
    </>
  );
}

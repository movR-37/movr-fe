import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export interface IReviewPayment {
  data: {
    mover: string,
    user: string,
    bill: number
    email: string
  }
}

export default function ReviewPayment({ data }: IReviewPayment) {
  const history = useHistory();

  const goBack = () => {
    const email = data.email;
    history.push('/profile', { value: { mover: email } });
  }

  const goToPayment = () => {
    history.push('/payment', { value: { bill: data.bill } })
  }

  return (
    <div>
      <h2>Mover: {data.mover}</h2>
      <h2>User: {data.user}</h2>
      <h2>Bill: {data.bill}</h2>
      <Button variant="contained" onClick={goToPayment}>Pay</Button>
      <Button variant="contained" onClick={goBack}>Go Back</Button>
    </div>
  );
}

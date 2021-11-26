import React from "react";
import Form from "../../components/Form";
import { useLocation } from "react-router-dom";

export default function EstimatePayment() {
  const { id } = useLocation().state;
  return (
    <div>
      <Form id={id} />
    </div>
  );
}

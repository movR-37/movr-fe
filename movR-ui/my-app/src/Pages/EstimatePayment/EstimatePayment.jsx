import React from "react";
import Form from "../../components/Form";
import { useLocation } from "react-router-dom";
import "./EstimatePayment.css";
export default function EstimatePayment() {
  const { id } = useLocation().state;
  return (
    <div className="estimatePayment-container">
      <div className="estimatePayment-form">
        <Form id={id} />
      </div>
    </div>
  );
}

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51JykAKBSdhgrO9p4oHqftexGjM8Z08fU7MNERJirjz7hcc7WRjbN0z7gOnvAIo5CPJVbFtoFwKJdpdaVTvKRrzQm002P6tVTbx"
);

export default function PaymentWrapper() {
  const { data } = useLocation().state;
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Payment data={data} />
      </Elements>
    </div>
  );
}

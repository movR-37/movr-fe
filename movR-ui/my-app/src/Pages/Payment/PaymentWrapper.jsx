import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const stripePromise = loadStripe(
  "pk_test_51JykAKBSdhgrO9p4oHqftexGjM8Z08fU7MNERJirjz7hcc7WRjbN0z7gOnvAIo5CPJVbFtoFwKJdpdaVTvKRrzQm002P6tVTbx"
);

export default function PaymentWrapper() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Enter Payment Details!</h1>
      <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
    </div>
  );
}

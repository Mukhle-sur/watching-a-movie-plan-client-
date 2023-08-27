import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useShopCart from "../../../Hooks/useShopCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const { id } = useParams();

  const [addPackage] = useShopCart();

  const singlePrice = addPackage.find((item) => item._id === id);

  return (
    <div className="w-full h-full">
      <SectionTitle
        subHeading={"Process to Payment"}
        heading={"Payment"}
      ></SectionTitle>

      <div className="w-1/2 m-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm singlePrice={singlePrice}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

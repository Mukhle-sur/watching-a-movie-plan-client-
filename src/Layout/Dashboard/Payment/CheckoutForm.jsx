import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOut.css";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../Hooks/UseAuth";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ singlePrice }) => {
  const { price, addShopPack, title, name, _id } = singlePrice;
  console.log(singlePrice);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }
    setProcessing(false);
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        buyPackId: addShopPack,
        addedItemId: _id,
        price: price,
        date: new Date(),
        PackName: title,
        packageName: name,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          toast.success("Payment Successfully");
          axiosSecure.delete(`/userAddPackage/${_id}`).then((deleteRes) => {
            if (deleteRes.data.deletedCount > 0) {
              console.log("Paid items deleted from cart");
            }
          });
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>

        {cardError && (
          <p className="text-lg font-semibold text-red-500 mt-5">{cardError}</p>
        )}
        {transactionId && (
          <p className="text-black text-lg font-bold mt-5 ">
            Your TransactionId :{" "}
            <span className="text-green-600 font-medium ml-3">
              {transactionId}
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;

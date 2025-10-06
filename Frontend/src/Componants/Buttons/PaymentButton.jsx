import React from "react";
import { ApiPath } from "../../Api/ApiPath";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const PaymentButton = ({ amount, hotelbooked }) => {
  const handlePayment = async () => {
    try {
      if (!amount || amount < 1) {
        Toastify({
          text: "Amount must be at least ₹1",
          duration: 3000,
          gravity: "top",
          position: "center",
          style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
        }).showToast();
        return;
      }

      // ✅ Create order on backend using ApiPath function
      const { data } = await ApiPath.paymentRoutes.createOrder({ amount });
      if (!data.success) {
        throw new Error("Order creation failed on backend");
      }
      const order = data.order;

      if (!window.Razorpay) {
        Toastify({
          text: "Razorpay SDK not loaded",
          duration: 3000,
          gravity: "top",
          position: "center",
          style: { background: "#ff6b6b" },
        }).showToast();
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "HeavenOnEarth",
        description: "Hotel Booking Payment",
        order_id: order.id,
        handler: async function (response) {
          try {
            // ✅ Verify payment using ApiPath function
            const verify = await ApiPath.paymentRoutes.verifyPayment(response);
            if (verify.data.success) {
              if (hotelbooked) hotelbooked(); // call hotel booking after payment
              Toastify({
                text: "Payment Successful! ✅",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
              }).showToast();
            } else {
              Toastify({
                text: "Payment Verification Failed!",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
              }).showToast();
            }
          } catch (err) {
            console.error("Payment verification error:", err);
            Toastify({
              text: "Payment verification failed!",
              duration: 3000,
              gravity: "top",
              position: "center",
              style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
            }).showToast();
          }
        },
        theme: { color: "#3399cc" },
      };

      const razor = new window.Razorpay(options);
      razor.open();

      Toastify({
        text: "Razorpay checkout opened",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: { background: "#4b7bec" },
      }).showToast();
    } catch (err) {
      console.error("Payment error:", err);
      Toastify({
        text: "Payment failed to start",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: { background: "linear-gradient(to right, teal, #ffc371)" },
      }).showToast();
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-teal-600 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-white w-full hover:bg-green-700 cursor-pointer transition-colors"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PaymentButton;

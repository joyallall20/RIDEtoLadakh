// src/Componants/Buttons/PaymentButton.jsx
import React from "react";
import axios from "axios";

const PaymentButton = ({ amount, hotelbooked }) => {
  const handlePayment = async () => {
    try {
      // 1️⃣ Create order in backend
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount }
      );

      if (!data.success) {
        return alert("Failed to create order. Try again.");
      }

      const order = data.order;

      // 2️⃣ Razorpay checkout options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Frontend key only
        amount: order.amount,
        currency: order.currency,
        name: "TravelX Hotel Booking",
        description: "Payment for hotel booking",
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment on backend
            const verify = await axios.post(
              "http://localhost:5000/api/payment/verify-payment",
              response
            );

            if (verify.data.success) {
              alert("✅ Payment Successful!");
              if (hotelbooked) hotelbooked(); // Save booking
            } else {
              alert("❌ Payment Verification Failed!");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("❌ Verification failed. Check console.");
          }
        },
        prefill: {
          name: "Joyal Lall", // You can replace with user name from context
          email: "joyal@example.com", // Replace with user email
          contact: "9999999999", // Optional
        },
        theme: {
          color: "#0f172a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed to start. Check console.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:scale-[1.02] transition-all"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PaymentButton;

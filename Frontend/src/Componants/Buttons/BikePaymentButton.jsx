import React from "react";
import {AxiosInstence} from "../../Api/AxiosInstence"; 
import { ApiPath } from "../../Api/ApiPath";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const BikePaymentButton = ({ amount = 100, bikeBookingData, onPaymentSuccess }) => {

  const handlePayment = async () => {
    if (amount < 1) {
      Toastify({
        text: "Amount must be at least ₹1",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
      }).showToast();
      return;
    }

    try {
      // 1️⃣ Create Razorpay order via backend
      const { data: order } = await AxiosInstence.post(ApiPath.BikepaymentRoutes.createOrder, {
  totalPrice: amount
});

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

      // 2️⃣ Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "RIDEtoLADAKH",
        description: "Bike Booking Payment",
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3️⃣ Confirm booking in backend
            const { data: bookingConfirm } = await AxiosInstence.post(ApiPath.BikepaymentRoutes.verifyPayment, {
              ...bikeBookingData,
              amount,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            Toastify({
              text: "Payment Successful! Booking Confirmed 🎉",
              duration: 3000,
              gravity: "top",
              position: "center",
              style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
            }).showToast();

            if (onPaymentSuccess) onPaymentSuccess(bookingConfirm.booking);

          } catch (err) {
            console.error("Booking confirmation failed:", err);
            Toastify({
              text: "Payment succeeded but booking failed!",
              duration: 3000,
              gravity: "top",
              position: "center",
              style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
            }).showToast();
          }
        },
        theme: { color: "#3399cc" },
      };

      // 4️⃣ Open Razorpay checkout
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

export default BikePaymentButton;

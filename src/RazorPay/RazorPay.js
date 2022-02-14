function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const __DEV__ = document.domain === "localhost";
export const handlePay = async (dataTotal) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const options = {
    key: __DEV__ ? "rzp_test_PpOinqLyVBHOcP" : "PRODUCTION_KEY",
    currency: "INR",
    amount: dataTotal * 100,
    name: "E-Cart",
    description: "Thank you for order",

    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9823456543",
    },
    handler: async function (response) {
      alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature);
      console.log("success");
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

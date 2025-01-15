import React from 'react';

const RazorpayButton = ({ cart }) => {
  const handlePayment = () => {
    // Calculate total amount
    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay API Key
      amount: totalAmount * 100, // Amount in paise (multiply by 100 for INR)
      currency: 'INR',
      name: 'Your Restaurant Name',
      description: 'Order Payment',
      image: 'https://your-logo-url.com/logo.png', // Optional: Add your logo URL
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe', // Replace with dynamic user data if available
        email: 'john.doe@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      style={{
        backgroundColor: '#F37254',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
      onClick={handlePayment}
    >
      Pay Now
    </button>
  );
};

export default RazorpayButton;

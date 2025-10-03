import React, { useState } from "react";
import "./Upi.css";

export default function UpiPaymentPage() {
  const [name, setName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handlePayment = () => {
    if (!name || !upiId || !amount) {
      setStatus("⚠️ Please fill all fields.");
      return;
    }
    setTimeout(() => {
      setStatus(`✅ Payment of ₹${amount} from ${upiId} successful!`);
      setName("");
      setUpiId("");
      setAmount("");
    }, 1200);
  };

  return (
    <div className="body1">
      <div className="upi-wrapper">
        <div className="upi-glass-card">
          <h2>💳 UPI Payment</h2>

          <input
            type="text"
            value={name}
            placeholder="Enter App Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            value={upiId}
            placeholder="Enter UPI ID (e.g. name@upi)"
            onChange={(e) => setUpiId(e.target.value)}
          />

          <input
            type="number"
            value={amount}
            placeholder="Enter Amount (₹)"
            onChange={(e) => setAmount(e.target.value)}
          />

          <button className="pay-btn" onClick={handlePayment}>
            🚀 Pay Now
          </button>

          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </div>
  );
}

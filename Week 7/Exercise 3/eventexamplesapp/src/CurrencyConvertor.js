import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [converted, setConverted] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const conversionRates = {
    EUR: 0.011,
    USD: 0.012,
    GBP: 0.0095,
  };

  const handleSubmit = () => {
    if (!isNaN(rupees) && rupees !== "") {
      const rate = conversionRates[currency];
      const result = parseFloat(rupees) * rate;
      setConverted(result.toFixed(2));
    } else {
      alert("Please enter a valid amount in INR.");
    }
  };

  const containerStyle = {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#d7d1f2ff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const selectStyle = {
    width: "90%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#6f42c1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2>Currency Convertor</h2>

      <label style={labelStyle}>Amount in INR:</label>
      <input
        type="text"
        style={inputStyle}
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in rupees"
      />

      <label style={labelStyle}>Select Currency:</label>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        style={selectStyle}
      >
        <option value="EUR">Euro (EUR)</option>
        <option value="USD">US Dollar (USD)</option>
        <option value="GBP">British Pound (GBP)</option>
      </select>

      <button onClick={handleSubmit} style={buttonStyle}>
        Convert
      </button>

      {converted && (
        <div style={{ marginTop: "15px", fontSize: "18px" }}>
          <strong>Converted Value:</strong> {converted} {currency}
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;

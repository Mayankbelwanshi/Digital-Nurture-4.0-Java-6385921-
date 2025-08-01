import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  class MessageUtil {
    static sayHello() {
      alert("Hello! This is a static message.");
    }
  }

  const handleIncrement = () => {
    incrementCounter();
    MessageUtil.sayHello();
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  const appStyles = {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#e5f1f0ff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    padding: "10px 16px",
    margin: "8px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={appStyles}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button style={buttonStyle} onClick={handleIncrement}>
        Increment
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
        onClick={handleDecrement}
      >
        Decrement
      </button>

      <hr style={{ margin: "20px 0" }} />
      <button style={buttonStyle} onClick={() => sayWelcome("Welcome!")}>
        Say Welcome
      </button>

      <hr style={{ margin: "20px 0" }} />
      <button
        style={{ ...buttonStyle, backgroundColor: "#28a745" }}
        onClick={handleClick}
      >
        Click Me (Synthetic Event)
      </button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
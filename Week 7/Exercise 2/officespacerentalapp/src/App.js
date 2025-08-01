import React from "react";
import "./App.css";
import techpnopolis from "./img/technopolis.jpeg";
import faguntower from "./img/fagun tower.jpg";
import hustlehub from "./img/HustleHub.jpeg";

function App() {
  const officeList = [
    {
      name: "Technopolis Knowledge Park",
      rent: 95000,
      address: "Mahakali Caves Road, Hanuman Nagar, Andheri East, Mumbai",
      image: techpnopolis
    },
    {
      name: "Fagun Tower",
      rent: 55000,
      address: "Egmore, Chennai",
      image: faguntower
    },
    {
      name: "Hustle Hub",
      rent: 62000,
      address: "HSR Layout, Bengaluru",
      image: hustlehub
    }
  ];

  return (
    <div className="App">
      <h1>🏢 Office Space Rental App</h1>

      {officeList.map((office, index) => (
        <div key={index} className="office-card">
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} className="office-img" />
          <p><strong>Address:</strong> {office.address}</p>
          <p
            className="rent"
            style={{ color: office.rent > 60000 ? "green" : "red" }}
          >
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

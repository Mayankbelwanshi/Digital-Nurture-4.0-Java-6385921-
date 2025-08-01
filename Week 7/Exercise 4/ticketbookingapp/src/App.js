import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="header">
        <h1>✈️ Ticket Booking App</h1>
        <div>
          {isLoggedIn ? (
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn login" onClick={handleLogin}>Login</button>
          )}
        </div>
      </header>
      <main>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

const flightData = [
  { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM" },
  { id: 2, from: "Chennai", to: "Bangalore", time: "1:30 PM" },
  { id: 3, from: "Kolkata", to: "Pune", time: "6:45 PM" }
];

function GuestPage() {
  return (
    <div className="container">
      <h2>Available Flights</h2>
      <div className="flight-list">
        {flightData.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.from} ➡ {flight.to}</h3>
            <p>Departure: {flight.time}</p>
          </div>
        ))}
      </div>
      <p className="note">🔒 Please login to book your flight.</p>
    </div>
  );
}

function UserPage() {
  const bookFlight = (id) => {
    alert(`🎉 Ticket successfully booked for flight ID: ${id}`);
  };

  return (
    <div className="container">
      <h2>Welcome! Book Your Flight</h2>
      <div className="flight-list">
        {flightData.map(flight => (
          <div key={flight.id} className="flight-card">
            <h3>{flight.from} ➡ {flight.to}</h3>
            <p>Departure: {flight.time}</p>
            <button className="btn book" onClick={() => bookFlight(flight.id)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

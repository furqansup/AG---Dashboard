// App.js
import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboards/Dashboard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;

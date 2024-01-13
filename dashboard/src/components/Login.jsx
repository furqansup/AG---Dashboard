import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="login">
      <div className="bg">
        <p>SpaceView Missions</p>
        <p>Explore space missions and outcomes in real-time with SpaceVue.</p>
      </div>
      <div className="login-container">
        <h1>Hello Again!</h1>
        <h2>Welcome Back</h2>
        <form>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p>Forgot Password</p>
      </div>
    </div>
  );
};

export default Login;

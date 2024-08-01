import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <div className="bodysign">
      <form id="login-box" onSubmit={handleSubmit}>
        <div className="left">
          <h1><b>Log In</b></h1><br/>
          
          <input
            type="text"
            name="username"
            placeholder="Username :"
            required
            value={formData.username}
            onChange={handleChange}
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          
          <input type="submit" name="signup_submit" value="LogIn" />
        </div>
        
        <div className="right">
          <span className="loginwith">Log-In with<br /></span>
          
          <button type="button" className="social-signin facebook">Log in with facebook</button>
          <button type="button" className="social-signin twitter">Log in with Twitter</button>
          <button type="button" className="social-signin google">Log in with Google+</button>
        </div>
        <div className="orl">OR</div>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can send form data to your server

    // After successful form submission, redirect to another page
    
    navigate("/Login");
  };

  return (
    <div className="bodysign">
    <form id="login-box" onSubmit={handleSubmit}>
      <div className="left">
        <h1><b>Sign Up</b></h1>
        
        <input type="text" name="username" placeholder="Username :" required />
        <input type="number" name="mobile" placeholder="Mobile No :" required />
        <input type="email" name="email" placeholder="E-mail :" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="password2" placeholder="Retype password" required />
        
        <input type="submit" name="signup_submit" value="Sign me up" />
      </div>
      
      <div className="right">
        <span className="loginwith">Sign in with<br />social network</span>
        
        <button className="social-signin facebook">Log in with facebook</button>
        <button className="social-signin twitter">Log in with Twitter</button>
        <button className="social-signin google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
    </form>
    </div>
  );
};

export default SignupForm;

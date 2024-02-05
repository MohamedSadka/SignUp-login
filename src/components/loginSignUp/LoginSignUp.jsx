import "./LoginSignUp.css";
import userInput from "../assets/person.png";
import email from "../assets/email.png";
import password from "../assets/password.png";
import { useState } from "react";

function LoginSignUp() {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={userInput} alt="user input" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email} alt="user input" />
          <input type="text" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password} alt="user input" />
          <input type="text" placeholder="Password" />
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Lost Password ? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;

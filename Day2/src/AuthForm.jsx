import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => (setIsLogin(true))}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => (setIsLogin(false))}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a target="_blank" href="#">
                Forgot Password
              </a>
              <button>Login</button>
              <p>
                Not a Member ? <a href="#">Sign up Now</a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Sign Up</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;

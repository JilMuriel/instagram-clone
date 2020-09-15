import React, { useState, useRef } from "react";
import "./login.styles.css";
import FormInput from "../../form-input/form-input";
import useSignUpForm from "./sign-in-form/use-sign-in-form";

export const Login = () => {
  const inputEl = useRef(null);
  const signup = () => {
    alert(`User Created!
           Name: ${inputs.username}
           Email: ${inputs.password}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__slider"></div>
        <div className="login__form">
          <div className="login-form__card">
            <div className="login-form-card__header">
              <h1>Instagram</h1>
            </div>
            <div className="login-form-card__body">
              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Phone number, username, or email"
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                  value={inputs.username}
                />
                <FormInput
                  label="password"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={inputs.password}
                />
                <div className="form-btn">
                  <button
                    className="login-btn"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>

            <div className="login-form-card__divider">
              <div className="login-divider__line"></div>
              <div className="login-divider__text">or</div>
              <div className="login-divider__line"></div>
            </div>

            <div className="login-form-card__footer">
              <button className="login-form-card-footer__btn" type="button">
                <span className="login-form-card-footer-btn__icon"></span>
                <span className="login-form-card-footer-btn__text">
                  Log in with Facebook
                </span>
              </button>
              <button className="forgot-password__btn">Forgot password</button>
            </div>
          </div>

          <div className="signup-form__card">
            <span>Don't have an account? Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

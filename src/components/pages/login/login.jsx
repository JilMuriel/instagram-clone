import React, { useState, useRef } from "react";
import "./login.styles.css";
import FormInput from "../../form-input/form-input";

export const Login = () => {
  const inputEl = useRef(null);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ [name]: value });
  };
  
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
              <form>
                <FormInput
                  label="Phone number, username, or email"
                  type="text"
                  onChange={handleChange}
                  value={state.username}
                  ref={inputEl}
                />
                <FormInput
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  value={state.password}
                  ref={inputEl}
                />

                <div className="form-btn">
                  <button className="login-btn" type="submit">
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

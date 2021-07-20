import React, { useState, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import "./login.styles.css";
// import FormInput from "../../form-input/form-input";
// import useSignUpForm from "./sign-in-form/use-sign-in-form";

import { FireBaseConfig } from "../../../firebase/config";

export const Login = () => {
  // const inputEl = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log("Register Data", data);
    // SignUpUser();
    FireBaseConfig.auth()
      .createUserWithEmailAndPassword(data.numberOrEmail, data.passWord)
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error));
  };
  // const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__slider">
          <img src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
        </div>
        <div className="login__form">
          <div className="login-form__card">
            <div className="login-form-card__header">
              <h1>Instagram</h1>
            </div>
            <div className="login-form-card__body">
              <form onSubmit={onSubmit}>

                {/* <FormInput
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
                /> */}
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

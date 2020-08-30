import React from "react";
import "./login.styles.css";

export const Login = () => {
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
                <div className="form-group">
                  <label htmlFor="">
                    <span class="form-input__label">
                      Phone number, username, or email
                    </span>
                    <input
                      aria-label="Phone number, username, or email"
                      aria-required="true"
                      autocapitalize="off"
                      autocorrect="off"
                      maxlength="75"
                      name="username"
                      type="text"
                      className="form-input"
                      value=""
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <span class="form-input__label">Password</span>
                    <input
                      aria-label="Phone number, username, or email"
                      aria-required="true"
                      autocapitalize="off"
                      autocorrect="off"
                      maxlength="75"
                      name="username"
                      type="password"
                      className="form-input"
                      value=""
                    />
                  </label>
                </div>
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

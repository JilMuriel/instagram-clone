import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import "./sign-up.styles.css";

// const schema = yup.object().shape({
//   numberOrEmail: yup.string().required("Number or Email is a required field"),
//   fullName: yup
//     .string()
//     .matches(/^([^0-9]*)$/, "First name should not contain numbers")
//     .required("First name is a required field"),
//   userName: yup.string().required("Username is a required field"),
//   passWord: yup.string().required("Password is a required field"),
// });

export const Button = (props) => {
  const { disabled, children } = props;
  return (
    <button
      className={`outline-none focus:outline-none focus:opacity-50 justify-center w-full flex items-center bg-primary text-white rounded py-2 px-5 w-100 mx-auto font-semibold ${
        disabled && "cursor-default"
      }`}
      disabled={disabled}
    >
      <span className="sign-up-btn__img sign-up-btn--fbicon mr-2"></span>
      {children}
    </button>
  );
};

const InputForm = ({ type, helpers, ...rest }) => (
  <>
    <input
      type={type}
      className={`outline-none w-full border p-5 ${
        helpers && "border-red-900"
      }`}
      {...rest}
    />
    {helpers && <p className="text-red-900 mb-4">{helpers.message}</p>}
  </>
);

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data", data);
  };

  return (
    <div className="sign-up h-screen bg-gray-50 border p-5">
      <div className="border sign-up__wrapper flex items-center h-full">
        <div className="border sign-up__card border mx-auto sign-up--padding bg-white">
          <div className="sign-up-card__header text-center pt-3">
            <h1 className="text-dark text-xl mb-5">Instagram</h1>
            <p className="pb-3 text-secondaryGray text-cmd font-semibold sign-up--spacing">
              Sign up to see photos and videos from your friends.
            </p>
            <Button>Log in with Facebook</Button>
          </div>
          <div className="text-center my-5 font-semibold text-secondaryGray">
            ----OR----
          </div>
          <div className="sign-up-card__body">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                  type="text"
                  placeholder="Number or Email"
                  {...register("numberOrEmail", {
                    required: "This is field is required",
                  })}
                  helpers={errors.numberOrEmail}
                />
                <InputForm
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "This is field is required",
                  })}
                />
                <InputForm
                  type="text"
                  placeholder="Username"
                  {...register("userName", {
                    required: "This is field is required",
                  })}
                />
                <InputForm
                  type="password"
                  placeholder="Password"
                  {...register("passWord", {
                    required: "This is field is required",
                  })}
                />
                <Button>Sign up</Button>
              </form>
            </div>
          </div>
          <div className="sign-up-card__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

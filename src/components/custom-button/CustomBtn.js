import React from "react";
import "../custom-button/CustomBtn.scss";

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomBtn;

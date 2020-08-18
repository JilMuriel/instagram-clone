import React from "react";
import "./page-not-found.styles.css";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found__wrapper">
        <h1 className="page-not-found__title">Sorry, this isn't available.</h1>
        <p className="page-not-found__text">
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

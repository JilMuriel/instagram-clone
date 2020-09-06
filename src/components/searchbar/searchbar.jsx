import React, { useState } from "react";
import "./searchbar.styles.css";

export const Searchbar = () => {
  const [placeHolder, setPlaceHolder] = useState(false);
  return (
    <label className="searchbar">
      <span className="searchbar__placeholder">
        <div className="searchbar-placeholder__wrapper">
          <span className="searchbar-cover__icon"></span>
          <span className="searchbar-cover__placeholder">Search</span>
        </div>
      </span>
      <input type="text" placeholder="Search" />
    </label>
  );
};
export default Searchbar;

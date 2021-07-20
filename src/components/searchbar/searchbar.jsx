import React, { useState } from "react";
import "./searchbar.styles.css";

export const Searchbar = () => {
  const [placeHolder, setPlaceHolder] = useState(false);
  return (
    <label>
      {/* <span className="searchbar__placeholder">
        <div className="searchbar-placeholder__wrapper">
          <span className="searchbar-cover__icon"></span>
          <span className="searchbar-cover__placeholder">Search</span>
        </div>
      </span> */}
      <span className="searchbar__icon"></span>
      <input className="searchbar" type="text" placeholder="Search" />
      <button className="searchbar__button"></button>
    </label>
  );
};
export default Searchbar;

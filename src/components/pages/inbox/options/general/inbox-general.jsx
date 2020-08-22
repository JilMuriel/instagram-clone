import React from "react";
import "./inbox-general.styles.css";

export const InboxGeneral = () => {
  return (
    <>
      <div className="inbox-block__item">
        <div className="inbox-message__image">
          <span className="inbox-img__block"></span>
        </div>
        <div className="inbox-message__description">
          <span className="inbox-text__blank inbox-text-blank__title"></span>
          <span className="inbox-text__blank inbox-text-blank__body"></span>
        </div>
      </div>
      <div className="inbox-block__item">
        <div className="inbox-message__image">
          <span className="inbox-img__block"></span>
        </div>
        <div className="inbox-message__description">
          <span className="inbox-text__blank inbox-text-blank__title"></span>
          <span className="inbox-text__blank inbox-text-blank__body"></span>
        </div>
      </div>
      <div className="inbox-block__item">
        <div className="inbox-message__image">
          <span className="inbox-img__block"></span>
        </div>
        <div className="inbox-message__description">
          <span className="inbox-text__blank inbox-text-blank__title"></span>
          <span className="inbox-text__blank inbox-text-blank__body"></span>
        </div>
      </div>
    </>
  );
};

export default InboxGeneral;

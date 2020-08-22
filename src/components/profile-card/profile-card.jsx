import React from "react";
import "./profile-card.styles.css";

export const ProfileCard = ({
  profileImage,
  size,
  username,
  name,
  follower,
}) => {
  return (
    <div
      className={`profile-card ${
        size === "sm" ? "profile-card-sm__padding" : null
      }`}
    >
      <div
        className={`profile-card__story-ring ${
          size === "sm" ? null : "story-ring__md"
        }`}
      >
        <div
          className={`profile-card__image ${
            size === "sm" ? "profile-img__sm" : "profile-img__md"
          }`}
        >
          <img data-testid="user-avatar" draggable="false" src={profileImage} />
        </div>
      </div>

      <div className="profile-card__content">
        <span className="profile-card__username">{username}</span>
        <span className="profile-card__name">
          {follower ? "Follows you" : name}
        </span>
      </div>

      {follower ? (
        <div className="profile-card__button">
          <span>Follow</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileCard;

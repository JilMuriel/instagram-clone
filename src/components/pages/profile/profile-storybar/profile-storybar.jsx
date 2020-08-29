import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
const storyData = [
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
  {
    name: "jil",
  },
];
const ProfileStoryBar = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="storybar">
      <div className="strorybar__wrapper">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={7.5}
          leftChevron={<button className="btn">{"<"}</button>}
          rightChevron={<button className="btn">{">"}</button>}
          insideChevron
          slidesToScroll={3}
          chevronWidth={chevronWidth}
        >
          {storyData.map((item) => (
            <div className="story-item">
              <div className="story-item__image">
                <img
                  data-testid="user-avatar"
                  draggable="false"
                  src="https://instagram.fmnl4-6.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&amp;_nc_ohc=xc6Z-_-_hSYAX-FtK7W&amp;oh=9cef9c432838e6bf0c77285867e3a681&amp;oe=5F5BF7D6"
                />
              </div>
              <span className="story-item__name">jilmuriel</span>
            </div>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default ProfileStoryBar;

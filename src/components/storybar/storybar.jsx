import React, { useState } from "react";
import "./storybar.styles.css";
import ItemsCarousel from "react-items-carousel";

import StoryItem from "./storyitem/storyitem";

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

export const StoryBar = () => {
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
            <StoryItem />
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default StoryBar;

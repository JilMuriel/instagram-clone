import React, { useState } from "react";
import "./storybar.styles.css";
import ItemsCarousel from "react-items-carousel";

export const StoryBar = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="storybar">
      <div className="strorybar__wrapper">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={2}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: 200, background: "#EEE" }}>First card</div>
          <div style={{ height: 200, background: "#EEE" }}>Second card</div>
          <div style={{ height: 200, background: "#EEE" }}>Third card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        </ItemsCarousel>
      </div>
    </div>
  );
};

export default StoryBar;

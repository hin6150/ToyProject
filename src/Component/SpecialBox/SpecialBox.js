import React from "react";
import "./SpecialBox.css";

export const SpecialBox = () => {
  return (
    <div className="OutBox">
      <div className="InnerBox">
        <img src="./img/구기자.png" alt="구기자" className="구기자" />
        <p className="BottomP">GUGIJA</p>
      </div>
      <p className="rotate-paragraph">CHEONGYANG</p>
    </div>
  );
};

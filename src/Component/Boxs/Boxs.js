import React from "react";
import "./Boxs.css";

export const FirstBox = (props) => {
  return (
    <div className="secondBox">
      <div className="secondBoxImg">
        <img src="./boryeong mud festival.png" alt="이미지위치" />
      </div>
      <div className="secondBoxText">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export const SecondBox = (props) => {
  return (
    <div className="thirdBox">
      <div className="secondBoxImg">
        <img src="./boryeong mud festival.png" alt="이미지위치" />
      </div>
      <div className="secondBoxText">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

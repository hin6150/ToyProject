import React from "react";
import "./Texts.css";

export const FirstText = (props) => {
  return (
    <div className="FirstText" style={{ width: "40vw" }}>
      <div className="FirstTextImg"></div>
      <div className="FirstTextText">{props.children}</div>
    </div>
  );
};

export const SecondText = (props) => {
  return (
    <div className="SecondText">
      <div className="SecondTextImg"></div>
      <div className="SecondTextText">{props.children}</div>
    </div>
  );
};

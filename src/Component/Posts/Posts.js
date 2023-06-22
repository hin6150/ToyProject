import React from "react";
import "./Posts.css";

export const FirstPost = (props) => {
  return (
    <div className="firstPost" style={{ width: "40vw" }}>
      <div className="firstPostImg"></div>
      <div className="firstPostText">{props.children}</div>
    </div>
  );
};

export const SecondPost = (props) => {
  return (
    <div className="secondPost">
      <div className="secondPostImg"></div>
      <div className="secondPostText">
        <p>{props.children}</p>
      </div>
    </div>
  );
};



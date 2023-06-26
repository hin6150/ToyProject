import React from "react";
import "./ChangePoster.css";

const ChangePoster = ({ setShowFest }) => {
  return (
    <div className="changePoster">
      <p className="typeButton" onClick={() => setShowFest(true)}>
        축제
      </p>
      <p> | </p>
      <p className="typeButton" onClick={() => setShowFest(false)}>
        특산품
      </p>
    </div>
  );
};

export default ChangePoster;

import React from "react";
import "./Boxs.css";

export const Box = (props) => {
  return (
    <div class="Box" style={{ width: props.size }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxText">{props.children}</div>
    </div>
  );
};

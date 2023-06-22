import React from "react";
import "./Boxs.css";

export const Box = (props) => {
  return (
    <div class="Box" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxText">{props.children}</div>
    </div>
  );
};

export const BoxTypeTwo = (props) => {
  return (
    <div class="BoxTypeTwo" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxTypeTwoText" style={{ right: props.right }}>
        {props.children}
      </div>
    </div>
  );
};

// export const BoxTypeThree = (props) => {
//   return(
//     <div class="BoxTypeThree" style={{ width: props.size, height: props.height }}/>
//     <img src={`./img/${props.url}.png`} alt={props.url} />
//     <div class="BoxTypeThreeText" style={{ right: props.right }}>
//       {props.children}
//     </div>
//   );
// };

export const LastBox = (props) => {
  return (
    <div class="LastBox" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.svg`} alt={props.url} />
      <div class="BoxText">{props.children}</div>
    </div>
  );
};

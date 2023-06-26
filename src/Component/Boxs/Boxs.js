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

export const BoxTypeThree = (props) => {
  return (
    <div
      class="BoxTypeThree"
      style={{ width: props.size, height: props.height }}
    >
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxTypeThreeText">{props.children}</div>
    </div>
  );
};

export const BoxTypeFour = (props) => {
  return (
    <div
      class="BoxTypeFour"
      style={{ width: props.size, height: props.height }}
    >
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxTypeFourTextOne">
        <p>
          BORYEONG
          <br />
          MUD
          <br />
          FESTIVAL
        </p>
      </div>
      <div class="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          보령시
          <br />
          신흥동 2282
        </p>
      </div>
      <div class="BoxTypeFourTextThree">
        <p>2023.07.21 - 2023.08.06</p>
        <p>041-930-0891</p>
      </div>
    </div>
  );
};

export const BoxTypeFive = (props) => {
  return (
    <div
      class="BoxTypeFour"
      style={{ width: props.size, height: props.height }}
    >
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div class="BoxTypeFourTextOne">
        <p>
          PINNACLE LAND
          <br />
          SPRING HEAVEN
          <br />
          FESTIVAL
        </p>
      </div>
      <div class="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          아산시
          <br />
          월선길 20-42
        </p>
      </div>
      <div class="BoxTypeFourTextThree">
        <p>2023.03.24 - 2023.05.30</p>
        <p>041-541-2582</p>
      </div>
    </div>
  );
};

export const LastBox = (props) => {
  return (
    <div class="LastBox" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.svg`} alt={props.url} />
      <div class="BoxText">{props.children}</div>
    </div>
  );
};

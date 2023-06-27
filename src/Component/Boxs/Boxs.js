import React from "react";
import "./Boxs.css";
import Tree from "../Tree/Tree";
import { useNavigate } from "react-router-dom";

export const Box = (props) => {
  return (
    <div className="Box" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxText">{props.children}</div>
    </div>
  );
};

export const BoxTypeTwo = (props) => {
  return (
    <div className="BoxTypeTwo" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeTwoText" style={{ right: props.right }}>
        {props.children}
      </div>
    </div>
  );
};

export const BoxTypeThree = (props) => {
  return (
    <div className="BoxTypeThree" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeThreeText">{props.children}</div>
    </div>
  );
};

export const BoxTypeFour = (props) => {
  return (
    <div className="BoxTypeFour" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeFourTextOne">
        <p>
          BORYEONG
          <br />
          MUD
          <br />
          FESTIVAL
        </p>
      </div>
      <div className="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          보령시
          <br />
          신흥동 2282
        </p>
      </div>
      <div className="BoxTypeFourTextThree">
        <p>2023.07.21 - 2023.08.06</p>
        <p>041-930-0891</p>
      </div>
    </div>
  );
};

export const BoxTypeFive = (props) => {
  return (
    <div className="BoxTypeFour" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeFourTextOne">
        <p>
          PINNACLE LAND
          <br />
          SPRING HEAVEN
          <br />
          FESTIVAL
        </p>
      </div>
      <div className="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          아산시
          <br />
          월선길 20-42
        </p>
      </div>
      <div className="BoxTypeFourTextThree">
        <p>2023.03.24 - 2023.05.30</p>
        <p>041-541-2582</p>
      </div>
    </div>
  );
};

export const LastBox = () => {
  return (
    <div className="LastBox">
      <Tree width="100vw" height="100vh" />
    </div>
  );
};

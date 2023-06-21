import React from "react";
import { FirstPost, SecondPost } from "../Component/Posts/Posts";
import { Link } from "react-router-dom";
import "../Detail.css";
import { FirstText, SecondText } from "../Component/Texts/Texts";

const Detail = () => {
  return (
    <div className="Main">
      <div className="header">
        <h1 className="mainName">지역 이름</h1>
        <Link to={"/"}>
          <button className="homeButton">홈</button>
        </Link>
      </div>
      <div className="postList">
        <div className="postOne">
          <p className="left">
            <button>왼쪽</button>
          </p>
          <p className="right">
            <button>오른쪽</button>
          </p>
          <FirstPost></FirstPost>
          <FirstText></FirstText>
        </div>
        <div className="postTwo">
          <p className="left">
            <button>왼쪽</button>
          </p>
          <p className="right">
            <button>오른쪽</button>
          </p>
          <SecondPost></SecondPost>
          <SecondText></SecondText>
        </div>
      </div>
    </div>
  );
};

export default Detail;

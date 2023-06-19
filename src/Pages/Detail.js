import React from "react";
import { FirstPost, SecondPost } from "../Component/Posts/Posts";
import { Link } from "react-router-dom";
import "../Detail.css";

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
          <p className="left">왼쪽</p>
          <p className="right">오른쪽</p>
          <FirstPost></FirstPost>
          <SecondPost></SecondPost>
        </div>
        <div className="postTwo">
          <FirstPost></FirstPost>
          <SecondPost></SecondPost>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import { FirstPost, SecondPost } from "../Component/Posts/Posts";
import { Link } from "react-router-dom";
import "../Detail.css";
import { FirstText, SecondText } from "../Component/Texts/Texts";
import {
  MdHome,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const Detail = () => {
  return (
    <div className="Main">
      
      <div className="header">
        <h1 className="mainName">천안(지역 이름)</h1>
        <Link to={"/"}>
          <MdHome className="homeButton">홈</MdHome>
        </Link>
      </div>

      <div className="postList">
        <div className="postOne">
          <p className="left">
            <MdKeyboardArrowLeft>왼쪽</MdKeyboardArrowLeft>
          </p>
          <p className="right">
            <MdKeyboardArrowRight>오른쪽</MdKeyboardArrowRight>
          </p>
          <FirstPost></FirstPost>
          <FirstText>
            <h1>천안흥타령춤축제</h1>
            <ul>
              <li>2023-10-05 ~ 2023-10-09</li>
              <li> 천안종합운동장 일원</li>
              <li> http://www.cheonanfestival.com/</li>
            </ul>
          </FirstText>
        </div>
        <div className="postTwo">
          <p className="left">
            <MdKeyboardArrowLeft>왼쪽</MdKeyboardArrowLeft>
          </p>
          <p className="right">
            <MdKeyboardArrowRight>오른쪽</MdKeyboardArrowRight>
          </p>
          <SecondPost></SecondPost>
          <SecondText>
            <h1>블루베리</h1>
            <p>무농약 친환경 재배된 블루베리 천안에서 수확시작</p>
          </SecondText>
        </div>
      </div>
    </div>
  );
};

export default Detail;

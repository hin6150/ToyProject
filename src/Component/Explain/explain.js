import React from "react";
import "./explain.css";
import { Link } from "react-router-dom";

export const ExplainFest = () => {
  return (
    <div className="postExplain">
      <p className="mainExplain">서해안 제일의 별미 천북 굴 구이와 굴을 이용한 갖가지 음식을 맛볼 수 있습니다.</p>
      <p className="subExplain">기 간: 12월 첫째주 예정</p>
      <Link
        to={
          "http://www.brcn.go.kr/prog/attraction/tour/sub01_07/view.do?listOrder=&searchCondition=&searchKeyword=&searchLocalCode=&searchMonth=&themeCode=1069&attractionCode=13"
        }
      >
        <p className="linkButton">상세페이지 이동</p>
      </Link>
    </div>
  );
};

export const ExplainFood = () => {
  return (
    <div className="postExplain">
      <p className="mainExplain">무농약 친환경 재배된 블루베리 천안에서 수확시작</p>
      <p className="subExplain">6월에서 8월까지 수확</p>
      <Link to={"https://www.cheonan.go.kr/prog/SiminReporter/tour/sub04_02/view.do?pageIndex=1&rotNo=5616"}>
        <p className="linkButton">상세페이지 이동</p>
      </Link>
    </div>
  );
};

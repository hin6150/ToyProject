import React from "react";
import "./explain.css";

export const ExplainFest = ({ data }) => {
  return (
    <div className="postExplain">
      <p className="mainExplain">천안의 대표적 명승고적</p>
      <p className="subExplain">종교/사찰/성지</p>
      <a href="https://tour.chungnam.go.kr/html/kr/" className="linkButton">
        상세페이지
      </a>
    </div>
  );
};
export const ExplainFest2 = ({ data }) => {
  return (
    <div className="postExplain">
      <p className="mainExplain">재밌는 벽화를 볼 수 있는 이화시장</p>
      <p className="subExplain">특화관광지</p>
      <a href="https://tour.chungnam.go.kr/html/kr/" className="linkButton">
        상세페이지
      </a>
    </div>
  );
};

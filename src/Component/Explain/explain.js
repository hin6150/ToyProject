import React from "react";
import "./explain.css";

export const ExplainFest = ({ data }) => {
  return (
    <div className="postExplain">
      <p className="mainExplain">{data.nm_sub}</p>
      <p className="subExplain">{data.type}</p>
      <a href={data.h_url ? data.h_url : "https://tour.chungnam.go.kr/html/kr/"} className="linkButton">
        상세페이지
      </a>
    </div>
  );
};

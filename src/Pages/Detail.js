import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../Detail.css";
import { MdHome, MdDensityMedium } from "react-icons/md";
import SlideShow from "../Component/Texts/Texts";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";

import ModalBasic from "../Component/Sidebar/Sidebar";
import Foodshow from "../Component/Foodshow/Foodshow";

const Detail = () => {
  const [showSlideShow, setShowSlideShow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const sideevent = () => {
    setModalOpen(true);
  };

  const festivevent = () => {
    setShowSlideShow(true);
  };

  const foodevent = () => {
    setShowSlideShow(false);
  };

  return (
    <div className="Main">
      {modalOpen && (
        <div className="Backdrop" onClick={() => setModalOpen(false)} />
      )}{" "}
      {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      <div className="header">
        <Link to={"/"}>
          <MdHome className="homeButton">홈</MdHome>
        </Link>

        <h1 className="mainName">보령</h1>
        <div>
          <div></div>
          <MdDensityMedium className="areaList" onClick={sideevent}>
            모달 띄우기
          </MdDensityMedium>
        </div>
      </div>
      <hr />
      <div className="changePoster">
        <p className="typeButton" onClick={festivevent}>
          축제
        </p>
        <p className="typeButton">|</p>
        <p className="typeButton" onClick={foodevent}>
          특산품
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className="postExplain">
          <p className="mainExplain">
            서해안 제일의 별미 <br></br>천북 굴 구이와 <br></br>굴을 이용한
            <br></br>
            갖가지 음식을 <br></br>맛볼 수 있습니다.
          </p>
          <p className="subExplain">기 간: 12월 첫째주 예정</p>
          <Link
            to={
              "http://www.brcn.go.kr/prog/attraction/tour/sub01_07/view.do?listOrder=&searchCondition=&searchKeyword=&searchLocalCode=&searchMonth=&themeCode=1069&attractionCode=13"
            }
          >
            <p className="linkButton">상세페이지 이동</p>
          </Link>
        </div>

        <div className="postList">
          {showSlideShow ? <SlideShow /> : <Foodshow />}
        </div>
      </div>
    </div>
  );
};

export default Detail;

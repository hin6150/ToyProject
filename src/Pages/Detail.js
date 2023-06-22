import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../Detail.css";
import { MdHome, MdDensityMedium } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import ModalBasic from "../Component/Sidebar/Sidebar";

const Detail = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const sideevent = () => {
    setModalOpen(true);
  };

  const festivevent = () => {
    console.log("축제 포스터");
  };

  const foodevent = () => {
    console.log("특산품 포스터");
  };

  return (
    <div className="Main">
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
            굴 축제 기간에는 서해안 제일의 별미 천북 굴 구이는 물론 굴을 이용한
            갖가지 음식을 맛볼 수 있으며 관광객을 위한 볼거리와 즐길 거리 등
            이벤트가 다채롭게 마련된다.
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
          <Carousel className="posts">
            <Paper className="postOne">1</Paper>
            <Paper className="postTwo">2</Paper>
            <Paper className="postThree">3</Paper>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Detail;

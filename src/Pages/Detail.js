import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Detail.css";
import { MdHome, MdDensityMedium } from "react-icons/md";
import SlideShow from "../Component/Texts/Texts";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";

import ModalBasic from "../Component/Sidebar/Sidebar";
import Foodshow from "../Component/Foodshow/Foodshow";
import { ExplainFest, ExplainFood } from "../Component/Explain/explain";

const Detail = () => {
  const [showSlideShow, setShowSlideShow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainName, setMainName] = useState("보령");

  const sideevent = () => {
    setModalOpen(true);
  };

  const festivevent = () => {
    setShowSlideShow(true);
  };

  const foodevent = () => {
    setShowSlideShow(false);
  };

  const handleAreaClick = (areaName) => {
    setMainName(areaName);
    setModalOpen(false);
  };

  return (
    <div className="Main">
      {modalOpen && (
        <div className="Backdrop" onClick={() => setModalOpen(false)} />
      )}
      {modalOpen && (
        <ModalBasic setModalOpen={setModalOpen} setMainName={setMainName} />
      )}
      <div className="header">
        <Link to={"/"}>
          <MdHome className="homeButton">홈</MdHome>
        </Link>

        <h1 className="mainName">{mainName}</h1>
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
          {showSlideShow ? <ExplainFest /> : <ExplainFood />}
        </div>

        <div className="postList">
          {showSlideShow ? <SlideShow /> : <Foodshow />}
        </div>
      </div>
    </div>
  );
};

export default Detail;

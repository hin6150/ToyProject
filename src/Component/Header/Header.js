import React from "react";
import { MdDensityMedium, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ mainName, setModalOpen }) => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <MdHome className="homeButton">홈</MdHome>
        </Link>
        <h1 className="mainName">{mainName}</h1>
        <MdDensityMedium className="navIcon" onClick={() => setModalOpen(true)}>
          모달 띄우기
        </MdDensityMedium>
      </div>
      <hr />
    </>
  );
};

export default Header;

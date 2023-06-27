import React, { useEffect, useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { ExplainFest, ExplainFood } from "../Component/Explain/explain";
import Header from "../Component/Header/Header";
import ChangePoster from "../Component/ChangePoster/ChangePoster";
import "./Detail.css";
import { useLocation } from "react-router-dom";
import Coverflow from "react-coverflow";

const Detail = () => {
  const [showFest, setShowFest] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainName, setMainName] = useState("보령");

  const location = useLocation();

  useEffect(() => {
    setMainName(location.pathname.substring(8));
  }, [location]);

  return (
    <div className="Main">
      {modalOpen && <Sidebar setModalOpen={setModalOpen} />}
      <Header mainName={mainName} setModalOpen={setModalOpen} />
      <ChangePoster setShowFest={setShowFest} />
      {showFest ? <ExplainFest /> : <ExplainFood />}
      {/* <Coverflow width={960} height={480} displayQuantityOfSide={2} navigation={false} enableHeading={false}>
        <div role="menuitem" tabIndex="0">
          <img
            src="[image/path/please_change]"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <img
          src="[image/path/please_change]"
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="[image/path/please_change]"
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
      </Coverflow> */}
    </div>
  );
};

export default Detail;

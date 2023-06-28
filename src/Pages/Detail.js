import React, { useEffect, useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { ExplainFest, ExplainFood } from "../Component/Explain/explain";
import Header from "../Component/Header/Header";
import ChangePoster from "../Component/ChangePoster/ChangePoster";
import "./Detail.css";
import { useLocation } from "react-router-dom";

import Carousel from "../Component/Carousel/Carousel";
import { cards } from "../Store/Const";

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
      <div style={{ display: "flex", flex: "1 0 auto" }}>
        {showFest ? <ExplainFest /> : <ExplainFood />}
        <div className="carouselBox">
          <Carousel cards={cards} height="50%" width="60%" margin="0 auto" offset={2} showArrows={false} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

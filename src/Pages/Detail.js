import React, { useEffect, useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { ExplainFest, ExplainFood } from "../Component/Explain/explain";
import Header from "../Component/Header/Header";
import ChangePoster from "../Component/ChangePoster/ChangePoster";
import "./Detail.css";
import { useLocation } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

const Detail = () => {
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />,
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />,
    },
  ];

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
          <Carousel cards={cards} height="500px" width="30%" margin="0 auto" offset={2} showArrows={false} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

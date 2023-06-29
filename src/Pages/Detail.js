import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { ExplainFest, ExplainFest2, ExplainFood } from "../Component/Explain/explain";
import Header from "../Component/Header/Header";
import ChangePoster from "../Component/ChangePoster/ChangePoster";
import "./Detail.css";
import { useLocation } from "react-router-dom";

import Carousel from "../Component/Carousel/Carousel";
import { areas, areasEnglish, cards } from "../Store/Const";
import { DataContext } from "../Store/ContextApi";
import Card from "../Component/Card/Card";

import { v4 as uuidv4 } from "uuid";

const Detail = () => {
  const [showFest, setShowFest] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainName, setMainName] = useState("보령");

  const [isLoading, setIsLoading] = useState(false);

  const [filteredDataList, setFilteredDataList] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setMainName(location.pathname.substring(8));
  }, [location]);

  const { dataList } = useContext(DataContext);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const localNmToFilter = areas[mainName]; // 원하는 위치명으로 변경

      // local_nm이 일치하는 데이터 필터링
      const filteredList = dataList.filter((data) => data.local_nm === localNmToFilter);
      setFilteredDataList(filteredList);

      // setFilteredCard((prev) => [...prev]);

      // dataList.slice(0, 5).map((data) => {
      //   const newData = {
      //     key: uuidv4(),
      //     content: <Card imagen={data.list_img} />,
      //   };
      //   setFilteredCard((prev) => [...prev, newData]);
      // });
    } finally {
      console.log(`findData ${areas[mainName]}:`, filteredDataList);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [mainName, dataList]);

  return (
    <div className="Main">
      {modalOpen && <Sidebar setModalOpen={setModalOpen} />}
      <Header mainName={areasEnglish[mainName]} setModalOpen={setModalOpen} />
      <ChangePoster setShowFest={setShowFest} />
      <div style={{ display: "flex", flex: "1 0 auto" }}>
        {showFest ? <ExplainFest /> : <ExplainFest2 />}
        <div className="carouselBox">
          <Carousel cards={cards} height="50%" width="60%" margin="0 auto" offset={2} showArrows={false} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

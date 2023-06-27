import React, { useEffect, useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { ExplainFest, ExplainFood } from "../Component/Explain/explain";
import Header from "../Component/Header/Header";
import ChangePoster from "../Component/ChangePoster/ChangePoster";
import "./Detail.css";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const [showFest, setShowFest] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainName, setMainName] = useState("보령");

  const sideevent = () => {
    setModalOpen(true);
  };
  const location = useLocation();

  useEffect(() => {
    setMainName(location.pathname.substring(8));
  }, [location]);

  return (
    <div className="Main">
      {modalOpen && <Sidebar setModalOpen={setModalOpen} setMainName={setMainName} />}
      <Header mainName={mainName} sideevent={sideevent} />
      <ChangePoster setShowFest={setShowFest} />
      {showFest ? <ExplainFest /> : <ExplainFood />}
    </div>
  );
};

export default Detail;

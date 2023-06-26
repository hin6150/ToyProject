import React from "react";
import "./Sidebar.css";

function ModalBasic({ setModalOpen, setMainName }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAreaClick = (areaName) => {
    setMainName(areaName);
    setModalOpen(false);
  };

  const areas = [
    "당진",
    "서산",
    "아산",
    "천안",
    "예산",
    "태안",
    "계룡",
    "금산",
    "공주",
    "청양",
    "홍성",
    "부여",
    "논산",
    "보령",
    "서천",
  ];

  return (
    <div>
      <div className="modal">
        <div className="modalTop">
          <p className="modalexit">충청남도 지역</p>
          <p className="modalexit" onClick={closeModal}>
            X
          </p>
        </div>
        <ul className="areaList">
          {areas.map((area) => (
            <li
              key={area}
              className="area"
              onClick={() => handleAreaClick(area)}
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalBasic;

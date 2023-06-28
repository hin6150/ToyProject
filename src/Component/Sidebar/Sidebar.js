import React from "react";
import "./Sidebar.css";
import { areas, areasEnglish } from "../../Store/Const";
import { useNavigate } from "react-router-dom";

function ModalBasic({ setModalOpen }) {
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAreaClick = (index) => {
    navigate(`/detail/${areasEnglish[index]}`);
    setModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modalTop">
        <p className="modalexit">충청남도 지역</p>
        <p className="modalexit" onClick={closeModal}>
          X
        </p>
      </div>
      <div className="areaList">
        <ul>
          {areas.map((area, index) => (
            <li key={area} className="area" onClick={() => handleAreaClick(index)}>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Sidebar = ({ setModalOpen }) => {
  return (
    <>
      <div className="Backdrop" onClick={() => setModalOpen(false)} />
      <ModalBasic setModalOpen={setModalOpen} />
    </>
  );
};

export default ModalBasic;

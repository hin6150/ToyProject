import "./Sidebar.css";

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="back">
      <div className="modal">
        <div className="modalTop">
          <p className="modalexit">충청남도 지역</p>
          <p className="modalexit" onClick={closeModal}>
            X
          </p>
        </div>
        <p className="area">서산</p>
        <p className="area">태안</p>
        <p className="area">홍성</p>
        <p className="area">예산</p>
        <p className="area">청양</p>
        <p className="area">당진</p>
        <p className="area">공주</p>
      </div>
    </div>
  );
}

export default ModalBasic;

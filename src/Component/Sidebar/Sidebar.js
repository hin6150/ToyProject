import "./Sidebar.css";

function ModalBasic({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="modal">
        <div className="modalTop">
          <p className="modalexit">충청남도 지역</p>
          <p className="modalexit" onClick={closeModal}>
            X
          </p>
        </div>
        <p className="area">당진</p>
        <p className="area">서산</p>
        <p className="area">아산</p>
        <p className="area">천안</p>
        <p className="area">예산</p>
        <p className="area">태안</p>
        <p className="area">계룡</p>
        <p className="area">금산</p>
        <p className="area">공주</p>
        <p className="area">청양</p>
        <p className="area">홍성</p>
        <p className="area">부여</p>
        <p className="area">논산</p>
        <p className="area">보령</p>
        <p className="area">서천</p>
      </div>
    </div>
  );
}

export default ModalBasic;

import React, { useState } from "react";
import * as S from "./index.styled";
import TerminalWindow from "../../images/TerminalWindow.svg";
import Modal from "./modal";
import TerminalContent from "./TerminalContent";

const TerminalIcon: React.FC = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const handleTerminalClick = () => {
    console.log("터미널 클릭")
    setIsTerminalOpen(true);
    //터미널 모달 

  };

    const handleCloseModal = () => {
    setIsTerminalOpen(false);
  };

  return (
    <S.TerminalWrapper>
      <S.TerminalContents onClick={handleTerminalClick}>
        <S.TerminalImg src={TerminalWindow} alt="terminal" />
      </S.TerminalContents>
      {isTerminalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* 터미널 컨텐츠 */}
            <Modal isOpen={isTerminalOpen} onClose={handleCloseModal}>
               <TerminalContent />
              {/* <TerminalContent /> 터미널 컨텐츠 컴포넌트를 모달 내에 포함시킵니다. */}
            </Modal>
          </div>
        </div>
      )}
    </S.TerminalWrapper>
  );
};

export default TerminalIcon;
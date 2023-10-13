import React, { useState } from "react";
import * as S from "./index.styled";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <S.ModalWrapper onClick={onClose}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </S.ModalContent>
      </S.ModalWrapper>
    );
  };
  
  export default Modal;
import styled from "styled-components";

export const TerminalWrapper = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  color: #ffffff;
  bottom: 0;
  right: 20px;
  z-index: 999;
  gap: 2rem;
`;

export const TerminalContents = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TerminalLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
};

export const TerminalImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const TerminalText = styled.strong`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const TerminalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ModalContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background: #000;
  color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: #333;
  padding: 8px;
`;

export const TerminalTitle = styled.div`
  font-weight: bold;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const Messages = styled.div`
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;
  border-bottom: 1px solid #333;

  & > div {
    padding: 4px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 8px;

  & > div {
    margin-right: 8px;
  }
`;

export const Prompt = styled.div`
  color: #33ff00;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  color: #fff;
  font-family: monospace;
  width: 100%;
  outline: none;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: grey;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  height: 80%;
    width: 80%;

`;

export const TerminalModalContent = styled.div`
width: 100%;
max-width: 800px;
height: 100%;
max-height: 560px;
margin: auto;
box-sizing: border-box;
overflow-y: auto;
`;

export const TerminalChattingContainer = styled.div`
  font-size: 20px;
  color:white;
`;

export const TerminalNameContainer = styled.div`
  font-size: 50px;
  color:skyblue;
`;
import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import TerminalWindow from "../../images/TerminalWindow.svg";
// import Modal from "./modal";
import TerminalContent from "./TerminalContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Props {
  innerWidth: number;
}

const Terminal: React.FC<Props> = ({innerWidth} : Props) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (innerWidth < 768) setIsTerminalOpen(false);
  }, [innerWidth]);

  return (
    <S.TerminalWrapper>
      {/* <S.TerminalContents onClick={() => setIsTerminalOpen(true)}> */}
      <S.TerminalImg src={TerminalWindow} alt="terminal" onClick={() => setIsTerminalOpen(true)} />
      {/* </S.TerminalContents> */}
      <Modal
        open={isTerminalOpen && innerWidth > 768}
        onClose={() => setIsTerminalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={{
          position: "absolute" as "absolute",
          bottom: "2rem",
          right: "20px",
          width: innerWidth > 1100 ? "400px" : "300px",
          height: "80%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: 24,
          p: 4,
        }}></Box>
        </Modal>
    </S.TerminalWrapper>
  );
};

export default Terminal;
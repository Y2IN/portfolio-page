import React, { useState, useEffect, useRef } from "react";
import * as S from "./index.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface ModalProps {
  isTerminalOpen: boolean;
  setIsTerminalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  innerWidth: number;
  innerHeight: number;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface TypographyDeviderProps {
  children: React.ReactNode;
  variant?: "h5" | "h6";
  color?: string;
  style?: Object;
}

const TypographyDevider: React.FC<TypographyDeviderProps> = ({
  children,
  variant,
  color,
  style,
}: TypographyDeviderProps) => {
  return (
    <Typography
      id="modal-modal-devider"
      variant={variant ? variant : "h5"}
      component="h2"
      color={color ? color : "#55adfa"}
      sx={
        style
          ? style
          : {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
      }
    >
      {children}
    </Typography>
  );
};

const TerminalModal: React.FC<ModalProps> = ({
  isTerminalOpen,
  setIsTerminalOpen,
  innerWidth,
  innerHeight,
  onKeyUp,
}: ModalProps) => {
  const [commend, setCommend] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newMessages = [...messages, commend];
      setMessages(newMessages);
      setCommend("");
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    console.log(commend);
  }, [commend]);

  return (
    <Modal
      open={isTerminalOpen && innerWidth > 768 && innerHeight > 600}
      onClose={() => setIsTerminalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={S.TerminalModalStyle(innerWidth)}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          color="#0677d9"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          %YEIN#TERMINAL%
        </Typography>
        <TypographyDevider>
          {innerWidth > 1100 ? `${"-".repeat(50)}` : `${"-".repeat(30)}`}
        </TypographyDevider>
        <TypographyDevider color="#0677b9" style={{ display: "flex" }}>
          COMMANDS
        </TypographyDevider>
        <TypographyDevider color="#6e7afb" style={{ display: "flex" }}>
          - whoami
          <br />
          - pwd
          <br />
          - ls
          <br />
          - cd
          <br />
          - exit
          <br />- clear
        </TypographyDevider>
        <TypographyDevider>
          {innerWidth > 1100 ? `${"-".repeat(50)}` : `${"-".repeat(30)}`}
        </TypographyDevider>
        <S.TerminalModalContent
          style={{ height: `${innerHeight * 0.8 - 300}px` }}
        >
          <div
            style={{
              height: "2rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <TypographyDevider
                color="#0677d9"
                variant="h6"
                style={{ display: "flex" }}
              >
                YEIN#log:~$
              </TypographyDevider>
            </div>
            <S.TerminalUserInput
              type="text"
              value={commend}
              onChange={(e) => setCommend(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "enter") setCommend("");
              }}
              spellCheck="false"
              autoFocus
            />
          </div>
        </S.TerminalModalContent>
      </Box>
    </Modal>
  );
};

export default TerminalModal;

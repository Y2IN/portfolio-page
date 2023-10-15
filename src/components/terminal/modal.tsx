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

interface TerminalCommend {
  commend: string;
  result: string;
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
  const [messages, setMessages] = useState<TerminalCommend[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const commendList = ["whoami", "pwd", "ls", "cd", "exit", "clear"];
  const messageEndRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = () => {
    const newMessage: TerminalCommend = {
      commend: commend,
      result: commendList.includes(commend)
        ? commend
        : `'${commend}'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.`,
    };
    setMessages((prev) => [...prev, newMessage]);
    console.log(messages);
    setCommend("");
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {messages.map((message, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
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
                    YEIN#log:~$ {message.commend}
                  </TypographyDevider>
                </div>
              </div>
              <div
                style={{
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
                    {message.result}
                  </TypographyDevider>
                </div>
              </div>
            </div>
          ))}
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
                if (e.key === "Enter") handleKeyPress();
              }}
              spellCheck="false"
              autoFocus
              maxLength={10} // 10글자 이상 입력 불가
            />
          </div>
          <li ref={messageEndRef} style={{ zIndex: -10 }} />
        </S.TerminalModalContent>
      </Box>
    </Modal>
  );
};

export default TerminalModal;

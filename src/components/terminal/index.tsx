import React, { useState, useEffect } from "react";
import * as S from "./index.styled";
import TerminalWindow from "../../images/TerminalWindow.svg";
import TerminalModal from "./modal";
import TerminalContent from "./TerminalContent";

interface Props {
  innerWidth: number;
  innerHeight: number;
}

const Terminal: React.FC<Props> = ({ innerWidth, innerHeight }: Props) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (innerWidth < 768 || innerHeight < 600) setIsTerminalOpen(false);
  }, [innerWidth, innerHeight]);

  return (
    <S.TerminalWrapper>
      <S.TerminalImg
        src={TerminalWindow}
        alt="terminal"
        onClick={() => setIsTerminalOpen(true)}
      />
      <TerminalModal
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      ></TerminalModal>
    </S.TerminalWrapper>
  );
};

export default Terminal;

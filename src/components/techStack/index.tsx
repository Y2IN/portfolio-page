import React from "react";
import * as S from "./index.styled";

interface TechStackProps {
  techStackRef: React.RefObject<HTMLDivElement>;
}

const TechStack: React.FC<TechStackProps> = ({
  techStackRef,
}: TechStackProps) => {
  return (
    <S.TechStackWrapper id="tech-stack" ref={techStackRef}>
      <S.TechStackTitle>tech Stack</S.TechStackTitle>
    </S.TechStackWrapper>
  );
};

export default TechStack;

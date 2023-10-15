import React from "react";
import * as S from "./index.styled";
import { Github_Dark, JavaScript, React_Dark } from "react-skillicons";

interface TechStackProps {
  techStackRef: React.RefObject<HTMLDivElement>;
}

const TechStack: React.FC<TechStackProps> = ({
  techStackRef,
}: TechStackProps) => {
  return (
    <S.TechStackWrapper id="tech-stack" ref={techStackRef}>
      <S.TechStackTitle>Once I've Used</S.TechStackTitle>
      <S.StackWrapper>
        <S.StackContainer>
          <S.skillText>LANGUAGES</S.skillText>
          <React_Dark className="icon" />
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>FRONTEND</S.skillText>
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>COMMUNICATION</S.skillText>
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>DEVOPS</S.skillText>
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>TOOL</S.skillText>
        </S.StackContainer>
      </S.StackWrapper>
    </S.TechStackWrapper>
  );
};

export default TechStack;

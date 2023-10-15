import React from "react";
import * as S from "./index.styled";
import Navbar from "../navbar";
import yeinPhoto from "../../images/yeinPhoto.png";
import profile from "../../images/profile.svg";
import mail from "../../images/mail.svg";
import birth from "../../images/birth.svg";
import phone from "../../images/phone.svg";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  return (
    <S.AboutWrapper id="about" ref={aboutRef}>
      <S.AboutTitle>ABOUT ME</S.AboutTitle>
      <S.explainWrapper>
        <S.photoWrapper src={yeinPhoto} />
        <S.explainItemByRow>
          <S.explainItemsByColumn>
            <S.explainItem>
              <S.profileiIcon src={profile} />
              <S.Text>제예인</S.Text>
            </S.explainItem>
            <S.explainItem>
              <S.profileiIcon src={birth} />
              <S.Text>2000.02.28</S.Text>
            </S.explainItem>
          </S.explainItemsByColumn>
          <S.explainItemsByColumn>
            <S.explainItem>
              <S.profileiIcon src={phone} />
              <S.Text>010.9905.1081</S.Text>
            </S.explainItem>
            <S.explainItem>
              <S.profileiIcon src={mail} />
              <S.Text>dpdls0228@aum.net</S.Text>
            </S.explainItem>
          </S.explainItemsByColumn>
        </S.explainItemByRow>
      </S.explainWrapper>
      <S.deatilText>
        <S.Text>설명적어야함</S.Text>
        <S.Text>잊지말기</S.Text>
      </S.deatilText>
    </S.AboutWrapper>
  );
};

export default About;

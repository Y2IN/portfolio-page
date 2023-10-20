import React from "react";
import * as S from "./index.styled";
import yeinPhoto from "../../images/yeinPhoto.png";
import profile from "../../images/profile.svg";
import mail from "../../images/mail.svg";
import birth from "../../images/birth.svg";
import phone from "../../images/phone.svg";
import git from "../../images/git.svg";
import school from "../../images/school.svg";

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
            <S.explainItem>
              <S.profileiIcon src={phone} />
              <S.Text>010.9905.1081</S.Text>
            </S.explainItem>
          </S.explainItemsByColumn>
          <S.explainItemsByColumn>
            <S.explainItem>
              <S.profileiIcon src={git} />
              <S.Text>한국공학대학교 전자공학부</S.Text>
            </S.explainItem>
            <S.explainItem>
              <S.profileiIcon src={mail} />
              <S.Text>dpdls0228@daum.net</S.Text>
            </S.explainItem>
            <S.explainItem>
              <S.profileiIcon src={school} />
              <S.Text>https://github.com/Y2IN</S.Text>
            </S.explainItem>
          </S.explainItemsByColumn>
        </S.explainItemByRow>
      </S.explainWrapper>
      <S.deatilText>
        {/* <S.Text>사용자를 생각하는 개발자</S.Text>
        <S.Text>소통할 줄 아는 개발자</S.Text> */}
        {/* <S.Text>잊지말기</S.Text> */}
      </S.deatilText>
    </S.AboutWrapper>
  );
};

export default About;

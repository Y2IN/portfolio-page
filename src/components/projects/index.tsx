import React from "react";
import * as S from "./index.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "../../images/ts1.png";
import ts2 from "../../images/ts2.png";
import ts3 from "../../images/ts3.png";
import ts4 from "../../images/ts4.png";
import ts5 from "../../images/ts5.png";
import ts6 from "../../images/ts6.png";
import ts7 from "../../images/ts7.png";

import githublogo from "../../images/githublogo.svg";
import inception2 from "../../images/inception2.png";
import inception from "../../images/inception.png";
import webserv from "../../images/webserv.png";
import webserv2 from "../../images/webserv2.png";
import minishell from "../../images/minishell.png";
import minishell2 from "../../images/minishell2.png";
import smartwindow1 from "../../images/smartwindow1.png";
import smartwindow2 from "../../images/smartwindow2.png";
import smartwindow3 from "../../images/smartwindow3.png";
import minirt from "../../images/minirt.png";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

// import githublogo from "../../images/githublogo.svg";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const projects: Array<{
  id: string;
  date: string;
  kr: string;
  content: string;
  link?: string;
  photo: string[];
  use: string;
}> = [
  {
    id: "칙칙퐁퐁",
    use: "React Nest.js postgresql socket.io docker-compose nginx git",
    date: "2023.07 ~ 2023.09(5명)",
    kr: "실시간 멀티플레이 게임",
    content:
      "jwt를 사용하여 소셜 로그인 기능 구현\n\nsocket을 사용하여 실시간 채팅 서비스 구현\n\nsocket을 사용하여 실시간 게임 서비스 구현\n\n웹 개발의 전반적인 흐름 경험",
    link: "https://github.com/Y2IN/transcendence",
    photo: [ts1, ts2, ts3, ts4, ts5, ts6, ts7],
  },
  {
    id: "Inception",
    use: "docker docker-compose alpine nginx mariadb WordPress",
    date: "2023.06 ~ 2023.07(1명)",
    kr: "가상환경에서 워드프레스 구현",
    content:
      "docker-compose를 사용하여 컨테이너를 빌드\n\n Alpine Linux를 사용하여 이미지 패키지 설치\n\nnginx를 사용하여 웹서버 구현\n\nmariadb를 사용하여 데이터베이스 구현\n\nWordPress를 사용하여 웹사이트 구현\n\n개발 및 운영 환경에서 컨테이너화 기술의 중요성 이해",
    link: "https://github.com/Y2IN/42Seoul/tree/main/5/Inception",
    photo: [inception2, inception],

    // photo: "photo위치",
  },
  {
    id: "Webserv",
    use: "c++ Nginx git",
    date: "2023.03 ~ 2023.06(3명)",
    kr: "c++로 웹서버 구현",
    content:
      "HTTP Request를 파싱하여 Response를 보내는 웹서버 구현\n\ncgi를 사용하여 동적 웹페이지 구현\n\nconfig file 학습 및 구현\n\n HTTP method, header, body 학습 및 구현\n\n웹 서버의 기본 개념, 동작 원리, HTTP프로토콜 및 네트워킹에 대해 학습",
    link: "https://github.com/Y2IN/42webserv",
    photo: [webserv, webserv2],
    // photo: "photo위치",
  },
  {
    id: "miniRT",
    use: "c bash",
    date: "2022.3 ~ 2022.(2명)",
    kr: "ray tracing 구현",
    content:
      "ray tracing을 사용하여 3차원 그래픽 구현\n그래픽스 이론 이해\n\n빛의 반사, 굴절, 그림자 등을 구현\n\n다양한 도형 구현\n\n다양한 빛 구현\n\n다양한 카메라 구현\n\n다양한 효과 구현",
    link: "https://github.com/Y2IN/42Seoul/tree/main/3/minishell",
    photo: [minirt],
  },
  {
    id: "minishell",
    use: "c bash",
    date: "2022.10 ~ 2022.11(2명)",
    kr: "bash shell 구현해서 운영체제 기본 동작 원리 학습",
    content:
      "CLI 구현 및 명령어 처리 방법 학습\n\n프로세스 생성 종료 및 관리에 대해 학습\n\n쉘 스크립트 작성을 통해 자동화 및 작업 자동화에 대한 이해를 높임\n\n오류 처리 및 디버깅 능력 향상 시킴 ",
    link: "https://github.com/Y2IN/42Seoul/tree/main/3/minishell",
    photo: [minishell, minishell2],
  },
  {
    id: "smart window",
    use: "c arduino androidStudio",
    date: "2020.06 ~ 2021.10(5명",
    kr: "아두이노와 안드로이드 스튜디오를 활용하여 자동 제어 창문 구현",
    content:
      "가스 센서, 습도 센서, 조도 센서, 온도 센서 등을 활용하여 창문을 자동으로 제어하는 시스템 구현\n\n 블루투스 통신을 통해서 받아온 데이터를 사용자에게 수치화하여 전달하고자 App 제작\n\n안드로이드 스튜디오를 활용하여 App 제작",
    photo: [smartwindow1, smartwindow2, smartwindow3],
  },
];

//사진 슬라이드 컴포넌트 구현
const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const settings = {
    infinite: true, // 무한 반복 옵션
    speed: 500, // 슬라이드 속도
    slidesToShow: 1, // 한 화면에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한번에 슬라이드할 개수
    arrows: true,

    // ref: sliderRef, // sliderRef를 사용하여 슬라이더를 컨트롤
  };

  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <S.SliderImage src={image} style={{ objectFit: "contain" }} />
          </div>
        ))}
      </Slider>
    </S.SliderContainer>
  );
};

const Project = ({ project, isMobile }) => (
  <S.projectContainer>
    <S.projectTitle className="project-title">{project.id}</S.projectTitle>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <S.projectskill className="project-title use">
        {project.use}
      </S.projectskill>
      <S.projectDate className="project-title date">
        {project.date}
      </S.projectDate>
    </div>
    <S.Line />
    <div
      style={{
        display: "flex",
        justifyContent: isMobile ? "center" : "",
        alignItems: isMobile ? "center" : "flex-start",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {isMobile ? (
        <div style={{ display: "flex" }}>
          <ImageSlider images={project.photo} />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ImageSlider images={project.photo} />
        </div>
      )}
      <S.projectImgExplainContainer>
        <S.projectsubTitle className="project-title">
          {project.kr}
        </S.projectsubTitle>
        <br />
        <S.projectDescription
          className="project-description"
          style={{ whiteSpace: "pre-line" }}
        >
          {project.content}
        </S.projectDescription>
      </S.projectImgExplainContainer>
    </div>
    {project.link && (
      <S.sitelink href={project.link} target="_blank">
        <S.github src={githublogo} />
      </S.sitelink>
    )}
  </S.projectContainer>
);

const Projects: React.FC<ProjectsProps> = ({ projectsRef }: ProjectsProps) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");

  return (
    <S.ProjectWrapper id="projects" ref={projectsRef}>
      <S.ProjectTitle>PROJECTS</S.ProjectTitle>
      <div className="projects-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} isMobile={isMobile} />
        ))}
      </div>
    </S.ProjectWrapper>
  );
};

export default Projects;

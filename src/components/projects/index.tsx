import React from "react";
import * as S from "./index.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ccpp from "../../images/ccpp.png";
import ccpp2 from "../../images/ccpp2.png";
import githublogo from "../../images/githublogo.svg";
import styled, { keyframes } from "styled-components";

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
    use: "React, Node.js, Socket.io, MongoDB, AWS",
    date: "2023.07 ~ 2023.09(5명)",
    kr: "퐁 게임 + 채팅 서비스 구현",
    content:
      "jwt를 사용하여 소셜 로그인 기능 구현\nsocket을 사용하여 실시간 채팅 서비스 구현\nsocket을 사용하여 실시간 게임 서비스 구현",
    link: "https://github.com/Y2IN",
    photo: [ccpp, ccpp2],
  },
  {
    id: "Inception",
    use: "docker docker-compose alpine nginx mariadb WordPress",
    date: "2023.06 ~ 2023.07(1명)",
    kr: "가상환경에서 워드프레스 구현",
    content:
      "docker-compose를 사용하여 컨테이너를 빌드\n Alpine Linux를 사용하여 이미지 패키지 설치\nnginx를 사용하여 웹서버 구현\nmariadb를 사용하여 데이터베이스 구현\nWordPress를 사용하여 웹사이트 구현",
    link: "주소 3",
    photo: [],

    // photo: "photo위치",
  },
  {
    id: "Webserv",
    use: "c++ socket",
    date: "2023.03 ~ 2023.06(3명)",
    kr: "c++로 웹서버 구현",
    content: "프로젝트 설명 2",
    link: "주소 2",
    photo: [],
    // photo: "photo위치",
  },
  {
    id: "minishell",
    use: "c ",
    date: "2021.01 ~ 2021.02(5명)",
    kr: "프로젝트 이름 4",
    content: "프로젝트 설명 4",
    link: "주소 4",
    photo: [],
  },
  {
    id: "smart window",
    use: "c arduino androidStudio",
    date: "2020.06 ~ 2021.10(5명)",
    kr: "아두이노를 활용하여 자동 제어 창문 구현",
    content: "프로젝트 설명 5",
    link: "주소 5",
    photo: [],
  },
];

//사진 슬라이드 컴포넌트 구현
const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const sliderRef = React.useRef<Slider>(null);

  // React.useEffect(() => {
  //   // 이미지가 2장 이상인 경우에만 자동 슬라이딩 설정
  //   if (images.length > 1) {
  //     const slider = sliderRef.current;

  // 자동 슬라이딩 설정 (3초마다)
  // const autoSlide = () => {
  //   slider?.slickNext(); // 다음 슬라이드로 이동
  // };

  // const intervalId = setInterval(autoSlide, 3000); // 인터벌 생성

  // slider?.on?.("beforeChange", () => {
  //   clearInterval(intervalId); // 이전 인터벌 제거
  // });

  // autoSlide(); // 처음 자동 슬라이딩 시작
  //   }
  // }, [images]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

const Project = ({ project }) => (
  <S.projectContainer>
    {/* <div className="project-title">{project.id}</div>
     */}
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ImageSlider images={project.photo} />
      {/* <S.projectImage src={project.photo} className="project-image" /> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <S.projectsubTitle className="project-title">
          {project.kr}
        </S.projectsubTitle>
        <S.projectDescription
          className="project-description"
          style={{ whiteSpace: "pre-line" }}
        >
          {project.content}
        </S.projectDescription>
      </div>
    </div>
    <S.sitelink href={project.link} target="_blank">
      <S.github src={githublogo} />
    </S.sitelink>
  </S.projectContainer>
);

const Projects: React.FC<ProjectsProps> = ({ projectsRef }: ProjectsProps) => {
  return (
    <S.ProjectWrapper id="projects" ref={projectsRef}>
      <S.ProjectTitle>PROJECTS</S.ProjectTitle>
      <div className="projects-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </S.ProjectWrapper>
  );
};

export default Projects;

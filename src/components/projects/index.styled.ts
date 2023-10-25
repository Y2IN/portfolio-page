import { link } from "fs";
import styled, { keyframes } from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 1;
  // .slick-slide {
  //   display: flex;
  // }

  // .slick-track {
  //   display: flex;
  // }

  // .slick-list {
  //   display: flex;
  // }
`;

export const ProjectTitle = styled.div`
  display: flex;
  text-align: center;
  //font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;
  line-height: 300%;

  @media screen and (max-width: 1100px) {
    font-size: 4rem;
  }
`;

export const projectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100rem;
  height: 60rem;
  border-radius: 1.875rem;
  border: 1px solid #000000;
  background: rgba(217, 217, 217, 0.3); /* 투명도 조절 (0.3으로 설정) */
  opacity: 0.8;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 90%; /* 모바일 화면에서 너비를 줄입니다. */
    // max-width: 500px; /* 원하는 최대 너비로 설정하세요. */
    height: auto; /* 높이를 자동으로 조절하거나 원하는 값으로 설정하세요. */
    margin: 0 auto; /* 페이지 중앙에 오도록 설정합니다. */
  }

  @media screen and (max-width: 768px) {
    width: 90%; /* 모바일 화면에서 너비를 줄입니다. */
    // max-width: 500px; /* 원하는 최대 너비로 설정하세요. */
    height: auto; /* 높이를 자동으로 조절하거나 원하는 값으로 설정하세요. */
    margin: 0 auto; /* 페이지 중앙에 오도록 설정합니다. */
  }
`;

export const github = styled.img`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  // z-index: 2;
  width: 5rem;
  height: 5rem;

  @media screen and (max-width: 1100px) {
    width: 3rem;
    height: 3rem;
  }
  @media screen and (max-width: 768px) {
    // display: none;
    width: 2rem;
    height: 2rem;
  }
`;

export const projectTitle = styled.span`
  display: flex;
  font-size: 5rem;
  font-weight: 400;
  //font-family: Inter;
  font-style: normal;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;

  @media screen and (max-width: 1100px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const projectskill = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  //font-family: Inter;
  font-style: normal;
  padding-left: 2rem;

  @media screen and (max-width: 1100px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const projectDate = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  //font-family: Inter;
  font-style: normal;
  padding: 0 2rem;

  @media screen and (max-width: 1100px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const Line = styled.div`
  display: flex;
  border-top: 1px solid #000;
  margin: 2rem;
`;

export const projectImage = styled.img`
  display: flex;
  margin-left: 3rem;
  margin-right: 3rem;
  width: 40rem;
  height: 40rem;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`;

export const projectsubTitle = styled.div`
  display: flex;
  font-size: 2.5rem;
  //font-family: Inter;
  font-style: normal;
  margin-bottom: 1rem;

  @media screen and (max-width: 1100px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const projectDescription = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  //font-family: Inter;
  font-style: normal;

  @media screen and (max-width: 1100px) {
    font-size: 1.5rem;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    align-items: center;
  }
`;

export const projectImgExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    font-size: 1rem;
    justify-content: center;
    // align-items: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SliderContainer = styled.div`
  width: 40rem;
  margin-left: 3rem;
  margin-right: 3rem;
  height: 100%;
  // position: static; /* 슬라이더의 위치 조정 */
  overflow: visible; /* 슬라이더의 넘침 설정 */

  @media screen and (max-width: 1100px) {
    width: 20rem; /* 모바일 버전에서 슬라이더의 너비 조정 */
    overflow: visible; /* 슬라이더의 넘침 설정 */
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 15rem; /* 모바일 버전에서 슬라이더의 너비 조정 */
    overflow: visible; /* 슬라이더의 넘침 설정 */
    height: 100%;
  }
`;

export const SliderImage = styled.img`
  display: flex;
  justify-content: center; /* 이미지를 가운데에 배치 */
  // margin-left: 1rem;
  // margin-right: 3rem;
  width: 40rem; /* 슬라이더의 너비 조정 (원하는 크기로 변경) */
  height: 40rem; /* 슬라이더의 높이 조정 (원하는 크기로 변경) */
  objet-fit: cover; /* 이미지의 비율을 유지하면서 가장 크게 설정 */

  @media screen and (max-width: 1100px) {
    width: 20rem; /* 모바일 버전에서 이미지의 너비 조정 */
    height: 20rem; /* 모바일 버전에서 이미지의 높이 조정 */
  }

  @media screen and (max-width: 768px) {
    width: 15rem; /* 모바일 버전에서 이미지의 너비 조정 */
    height: 15rem; /* 모바일 버전에서 이미지의 높이 조정 */
  }
`;

export const Content = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const sitelink = styled.a`
  display: flex;
`;

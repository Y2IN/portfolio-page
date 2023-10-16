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
`;

export const ProjectTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;
  line-height: 300%;
`;

export const projectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: 60rem;
  border-radius: 1.875rem;
  border: 1px solid #000000;
  background: rgba(217, 217, 217, 0.3); /* 투명도 조절 (0.3으로 설정) */
  opacity: 0.8;
  box-sizing: border-box;
`;
export const githubWrapper = styled.nav`
  // width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // position: fixed;
  color: #ffffff;
  bottom: 0;
  left: 20px;
  z-index: 999;
  gap: 2rem;
`;

export const github = styled.img`
  display: flex;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: none;
`;

export const projectTitle = styled.span`
  display: flex;
  font-size: 5rem;
  font-weight: 400;
  font-family: Inter;
  font-style: normal;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const projectskill = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Inter;
  font-style: normal;
  padding-left: 2rem;
`;

export const projectDate = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Inter;
  font-style: normal;
  padding: 0 2rem;
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
`;

export const projectsubTitle = styled.div`
  display: flex;
  font-size: 2.5rem;
  font-family: Inter;
  font-style: normal;
  margin-bottom: 1rem;
`;

export const projectDescription = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  font-family: Inter;
  font-style: normal;
`;

export const projectImgExplainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SliderContainer = styled.div`
  width: 40rem;
  margin-left: 3rem;
  margin-right: 3rem;
  height: 100%;
  position: relative;
`;

export const SliderImage = styled.img`
  // width: 100%;
  // height: 100%;
  display: flex;
  margin-left: 3rem;
  margin-right: 3rem;
  width: 40rem;
  height: 40rem;
  z-index: 3;
`;

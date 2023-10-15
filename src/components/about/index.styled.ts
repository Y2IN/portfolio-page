import { LogoImg } from "./../navbar/index.styled";
import { photoWrapped } from "./index.styled";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const AboutTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;
  line-height: 300%;
`;

export const Text = styled.div`
  display: flex;
  color: #fbf2f2;
  text-align: center;
  font-family: Inter;
  font-size: 3.25rem;
  font-style: normal;
  font-weight: 400;
`;

export const photoWrapper = styled.img`
  display: flex;
  // position: absolute;
  // margin-top: 15%;
  // margin-right: 70%;
  // justify-content: center;

  width: 17.1875rem;
  height: 18.9375rem;
  border-radius: 1.875rem;
  // z-index: 2;
`;

export const explainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: 18.9375rem;
  align-items: center;
`;

export const profileiIcon = styled.img`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
`;

export const explainItemsByColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 8rem;
`;

export const explainItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
`;

export const explainItemByRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const deatilText = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 60%;
  margin: 5%;
`;

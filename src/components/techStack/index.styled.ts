import styled from "styled-components";

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: white;
  z-index: 1;
`;

export const Text = styled.div`
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;

  @media screen and (max-width: 1100px) {
    font-size: 4rem;
  }
`;

export const skillText = styled.div`
  display: flex;
  color: #fbf2f2;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;

  @media screen and (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

export const skilltype = styled.div`
  display: flex;
  color: #fbf2f2;
  text-align: center;
  font-family: Inter;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 1100px) {
    font-size: 1rem;
  }
`;

export const TechStackTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;
  line-height: 300%;

  @media screen and (max-width: 1100px) {
    font-size: 4rem;
    line-height: 200%;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50vh;
  gap: 3rem;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  max-width: 300px;
  border-radius: 1.875rem;
  border: 1px solid #000000;
  background: rgba(217, 217, 217, 0.5);
  opacity: 0.8;
  padding: 2rem;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 18rem;
    max-width: 100%;
    padding: 1rem;
  }

  img {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;

    @media screen and (max-width: 1100px) {
      width: 70px;
      height: 70px;
    }
  }

  img:hover {
    opacity: 0.5;
  }

  img:hover::after {
    content: attr(title);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-family: Inter;
    font-weight: 400;
    opacity: 1;
    z-index: 2;

    @media screen and (max-width: 1100px) {
      font-size: 1rem;
    }
  }

  img:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1.875rem;
    z-index: 0;
  }
`;

export const icon = styled.img`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;

  @media screen and (max-width: 1100px) {
    width: 2rem;
    height: 2rem;
  }
`;

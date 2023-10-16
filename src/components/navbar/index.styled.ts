import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  color: #ffffff;
  top: 0vh;
  left: 0;
  z-index: 999;
  gap: 2rem;
`;

export const Hamburger = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const LeftContents = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 2rem;
`;

export const LeftLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
};

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const RightContents = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: transparent;

  & > *:last-child {
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;

    & > *:not(:first-child) {
      display: none;
    }

    & > *:first-child {
      padding-right: 2rem;
    }
  }
`;

export const ListContainer = styled.div`
  display: absolute;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  background-color: red;

  @media screen and (max-width: 768px) {
    display: absolute;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    right: 0;
    background-color: green;
  }
`;
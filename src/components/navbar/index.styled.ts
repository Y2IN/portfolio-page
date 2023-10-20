import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
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
    margin-top: 2rem;
    align-items: center;
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

export const RightContents = styled.div<{
  $isListOpen: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: transparent;

  & > *:last-child {
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: static;
    right: 0;
    top: auto;
    height: 100%;
    padding: 1rem;
    gap: 1rem;
    align-items: center;

    & > *:not(:first-child) {
      display: flex;
      position: relative;
      right: ${(props) => (props.$isListOpen ? "0px" : "-120px")};
      transition: right 0.5s ease;
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

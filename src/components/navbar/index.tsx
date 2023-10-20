import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as S from "./index.styled";
import list from "../../images/list.svg";
import close from "../../images/x-icon.svg";
import logo from "../../images/402.png";

interface NavbarProps {
  innerWidth: number;
}

const Navbar: React.FC<NavbarProps> = ({ innerWidth }: NavbarProps) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleListClick = () => {
    setIsListOpen(!isListOpen);
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (innerWidth > 767) setIsListOpen(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [innerWidth]);

  useEffect(() => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.clientHeight;
      setIsTop(scrollY < navbarHeight);
    }
  }, [scrollY]);

  return (
    <S.NavbarWrapper id="navbar" className={isTop ? "top" : ""} ref={navbarRef}>
      <S.LeftContents>
        <Link
          to="main-banner"
          smooth={true}
          duration={500}
          style={S.LeftLinkStyle}
        >
          <S.LogoImg src={logo} alt="logo" />
          <p>제예인 포트폴리오</p>
        </Link>
      </S.LeftContents>
      <S.RightContents $isListOpen={isListOpen}>
        <S.Hamburger
          src={isListOpen ? close : list}
          alt="list"
          onClick={() => setIsListOpen(!isListOpen)}
        />
        <Link
          to="main-banner"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>MAIN</p>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>ABOUT</p>
        </Link>
        <Link
          to="tech-stack"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>TECH STACK</p>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>PROJECTS</p>
        </Link>
      </S.RightContents>
    </S.NavbarWrapper>
  );
};

export default Navbar;

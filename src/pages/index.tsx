import * as React from "react"
import * as S from "./styled"
import type { HeadFC, PageProps } from "gatsby"
import MainBanner from "../components/mainBanner";
import Projects from "../components/projects";
import About from "../components/about";
import TechStack from "../components/techStack";
import Navbar from "../components/navbar";
import Terminal from "../components/terminal";

const IndexPage: React.FC<PageProps> = () => {
  const browserSizeRef = React.useRef<HTMLDivElement>(null);


  React.useEffect(() => {
    // 화면 크기가 변경될 때마다 FirstBackground 컴포넌트의 높이를 조절합니다.
    const resizeHandler = () => {
      if (browserSizeRef.current) {
        const windowHeight = window.innerHeight;
        browserSizeRef.current.style.height = `${windowHeight}px`;
      }
    };

    // 초기화 및 이벤트 리스너 등록
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div>
    <div style={{ marginTop: "100px" }}>
    <Navbar innerWidth={innerWidth} />
    {/* <Terminal innerWidth={innerWidth} /> */}
    <S.Wrapper>
      {/* <Navbar innerWidth={innerWidth} /> */}
      <MainBanner mainBannerRef={browserSizeRef} />
      <About aboutRef={browserSizeRef} />
      <TechStack techStackRef={browserSizeRef} />
      <Projects projectsRef={browserSizeRef} />
    </S.Wrapper>
    </div>
    </div>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>제예인 포트폴리오</title>
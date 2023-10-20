import React from "react";
import * as S from "./index.styled";
import c from "../../images/c.svg";

interface TechStackProps {
  techStackRef: React.RefObject<HTMLDivElement>;
}

const TechStack: React.FC<TechStackProps> = ({
  techStackRef,
}: TechStackProps) => {
  return (
    <S.TechStackWrapper id="tech-stack" ref={techStackRef}>
      <S.TechStackTitle>Once I've Used</S.TechStackTitle>
      <S.StackWrapper>
        <S.StackContainer>
          <S.skillText>LANGUAGES</S.skillText>
          {/* <S.icon> */}
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png"
            alt="C"
            title="C"
            content="familiar"
          />

          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png"
            alt="C++"
            title="C++"
          />

          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
            alt="TypeScript"
            title="TypeScript"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"
            alt="Python"
            title="Python"
          />
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>FRONTEND</S.skillText>
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
            alt="HTML"
            title="HTML"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            alt="CSS"
            title="CSS"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            alt="React"
            title="React"
          />
          <img
            width="100"
            src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/2bd495ca-29d8-4415-8e8c-a1979721816a"
            alt="Gatsby"
            title="Gatsby"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
            alt="Figma"
            title="Figma"
          />
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>TOOL</S.skillText>
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
            alt="Visual Studio Code"
            title="Visual Studio Code"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192108889-232b3431-a585-4b36-a62d-9078bd3641d9.png"
            alt="Vim"
            title="Vim"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192108895-20dc3343-43e3-4a54-a90e-13a4abbc57b9.png"
            alt="Android Studio"
            title="Android Studio"
          />
          <img
            width="100"
            src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/a57a85ba-e2dd-4036-85b6-7e1532391627"
            alt="Arduino"
            title="Arduino"
          />
        </S.StackContainer>
        <S.StackContainer>
          <S.skillText>etc</S.skillText>
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            alt="Git"
            title="Git"
          />
          <img
            width="100"
            src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
            alt="GitHub"
            title="GitHub"
          />
          <img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"
            alt="Docker"
            title="Docker"
          />
          {/* <br /> */}
          {/* <S.skillText>Deployment</S.skillText> */}
        </S.StackContainer>
      </S.StackWrapper>
    </S.TechStackWrapper>
  );
};

export default TechStack;

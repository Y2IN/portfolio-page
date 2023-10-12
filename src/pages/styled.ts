import styled from "styled-components";

export const Wrapper = styled.div<{ $background?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$background});
`;

export const SecondBackground = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  border: 1px solid #000;
`;
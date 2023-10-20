import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  min-height: 100vh;
  z-index: 1;

  @media (max-width: 1100px) {
    /* 작은 화면에 맞게 스타일 조절 */
    padding: 3rem;
    width: 90%;
    height: auto;
  }
`;

export const AboutTitle = styled.div`
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 6.25rem;
  font-style: normal;
  line-height: 300%;

  @media (max-width: 1300px) {
    /* 작은 화면에 맞게 폰트 크기 조절 */
    font-size: 3rem;
  }
`;

export const Text = styled.div`
  display: flex;
  color: #fbf2f2;
  text-align: center;
  font-family: Inter;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;

  @media (max-width: 1300px) {
    /* 작은 화면에 맞게 폰트 크기 조절 */
    font-size: 2rem;
    white-space: nowrap;
  }

  @media (max-width: 1100px) {
    /* 작은 화면에 맞게 폰트 크기 조절 */
    font-size: 1.5rem;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    /* 작은 화면에 맞게 폰트 크기 조절 */
    font-size: 1rem;
    white-space: nowrap;
  }
`;

export const photoWrapper = styled.img`
  display: flex;
  width: 19rem;
  height: 25rem;
  border-radius: 1.875rem;

  @media (max-width: 1300px) {
    /* 작은 화면에 맞게 이미지 크기 조절 */
    width: 16rem;
    height: 23rem;
    padding: 3rem;
  }

  @media (max-width: 1100px) {
    /* 작은 화면에 맞게 이미지 크기 조절 */
    width: 15rem;
    height: 18rem;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    /* 작은 화면에 맞게 이미지 크기 조절 */
    width: 15rem;
    height: 18rem;
    padding: 3rem;
  }
`;

export const explainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: 18.9375rem;
  align-items: center;

  @media (max-width: 1300px) {
    /* 작은 화면에 맞게 너비와 높이, 방향 조절 */
    width: 90%;
    height: auto;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    /* 작은 화면에 맞게 너비와 높이, 방향 조절 */
    height: auto;
    align-items: flex-start;
  }
`;

export const profileiIcon = styled.img`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;

  @media (max-width: 1100px) {
    /* 작은 화면에 맞게 이미지 크기 조절 */
    width: 2rem;
    height: 2rem;
  }
`;

export const explainItemsByColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 8rem;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* 데스크탑 화면에서 세로 방향으로 아이템 나열 */
    // margin-top: 0;
    // margin-left: 2rem;
    // margin-right: 2rem;
    gap: 2rem;
  }
`;

export const explainItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
    width: 100%;
  }
`;

export const explainItemByRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* 데스크탑 화면에서 가로 방향으로 아이템 나열 */
    gap: 2rem;
  }
`;

export const deatilText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  margin: 5%;

  @media (max-width: 1100px) {
    /* 작은 화면에 맞게 여백 조절 */
    margin: 2%;
  }
`;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   width: 100%;
//   height: 100vh;
//   z-index: 1;
// `;

// export const AboutTitle = styled.div`
//   display: flex;
//   text-align: center;
//   font-family: Inter;
//   font-size: 6.25rem;
//   font-style: normal;
//   line-height: 300%;
// `;

// export const Text = styled.div`
//   display: flex;
//   color: #fbf2f2;
//   text-align: center;
//   font-family: Inter;
//   font-size: 2.25rem;
//   font-style: normal;
//   font-weight: 400;
// `;

// export const photoWrapper = styled.img`
//   display: flex;
//   // position: absolute;
//   // margin-top: 15%;
//   // margin-right: 70%;
//   // justify-content: center;

//   width: 19rem;
//   height: 25rem;
//   border-radius: 1.875rem;
//   // z-index: 2;
// `;

// export const explainWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 80%;
//   height: 18.9375rem;
//   align-items: center;
// `;

// export const profileiIcon = styled.img`
//   display: flex;
//   width: 3.125rem;
//   height: 3.125rem;
// `;

// export const explainItemsByColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 30vw;
//   gap: 8rem;
// `;

// export const explainItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 3rem;
// `;

// export const explainItemByRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export const deatilText = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 80%;
//   height: 60%;
//   margin: 5%;
// `;

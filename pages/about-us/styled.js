import styled from "styled-components";

export const AboutUsContainer = styled.section`
  .sectionOne {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 60vh;
    background: url("../assets/aboutus.png");
    .over-lay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 60vh;
      background: rgba(0, 0, 0, 0.43);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: #ffffff;
        font-weight: bold;
        font-size: 60px;
      }
      h2 {
        color: #ffffff;
        font-size: 20px;
      }
      @media screen and (max-width: 767px) {
        h1 {
          font-size: 26px;
        }
        h2 {
          font-size: 12px;
        }
        height: 34vh;
      }
      @media screen and (max-width: 1255px) {
        height: 34vh;
      }
    }
  }
`;

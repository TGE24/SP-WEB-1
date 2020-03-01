import styled from "styled-components";

export const AboutUsContainer = styled.section`
  padding: 0px;
  // margin: -7px;
  .sectionOne {
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0;
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

  .sectionTwo {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #515c6f;
      font-size: 30px;
      font-weight: 600;
    }
    h2 {
      color: #515c6f;
      font-size: 17px;
    }
  }
  .sectionThree {
    margin: 4rem 9rem 0 9rem;
    .side-image {
      width: 100%;
      height: 445.36px;
      background: url("../assets/who-we-are.png");
    }
    .side-image2 {
      width: 100%;
      height: 445.36px;
      background: url("../assets/mission.png");
    }
    .side-image3 {
      width: 100%;
      height: 445.36px;
      background: url("../assets/vision.png");
    }
    .side-text {
      width: 80%;
      height: 445.36px;
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: #515c6f;
        font-size: 30px;
        text-align: center;
        font-weight: 600;
      }
      h2 {
        color: #515c6f;
        font-size: 17px;
      }
      h3 {
        font-size: 18px;
        line-height: 27px;

        /* text colour */

        color: #797979;
      }
    }
  }
  .sectionFour {
    margin: 0 9rem;
    width: 78.7%;
    height: 558px;
    background: linear-gradient(
      180deg,
      #f5f4f4 33.8%,
      rgba(245, 244, 244, 0) 100%
    );

    .container {
      // margin: 2rem 2rem;
    }
  }
`;

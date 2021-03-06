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
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 767px) {
      background: none;
      height: 34vh;
    }
    img {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
        height: 29vh;
        width: 100%;
      }
    }
    @media screen and (max-width: 1255px) {
      height: 29vh;
    }
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
        height: 29vh;
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
    @media screen and (max-width: 767px) {
      margin-top: 1rem;
      h1 {
        font-size: 26px;
      }
      h2 {
        font-size: 12px;
      }
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
    @media screen and (max-width: 767px) {
      margin: 2em;
      .side-text {
        width: 100%;
        height: auto;
        box-shadow: 3.52588px 3.52588px 8.81471px rgba(81, 92, 111, 0.12);
        margin-left: 0;
        padding: 13px 10px;
        text-align: justify;
        h1 {
          font-size: 26px;
        }
        h2 {
          font-size: 15px;
        }
        h3 {
          font-size: 15px;
          margin: 1rem;
        }
      }
    }
    @media screen and (max-width: 1255px) {
      margin: 4rem 1rem 0 1rem;
    }
  }
  .sectionFour {
    margin: 0 9rem;
    width: 78.7%;
    // height: 461px;
    background: linear-gradient(
      180deg,
      #f5f4f4 33.8%,
      rgba(245, 244, 244, 0) 100%
    );
    .left-content {
      margin: 6rem 0 0 2rem;
      h1 {
        color: #515c6f;
        font-size: 30px;
        text-align: left;
        font-weight: 600;
      }
      h2 {
        font-size: 16px;
        color: #797979;
        line-height: 1.5;
      }
    }
    .right-content {
      // align-items: center;
      .circle {
        width: 100%;
        height: 492px;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #c4c4c4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }
      .image {
        width: 100%;
        height: 522px;
        position: absolute;
        top: 0;
        img {
          width: 100%;
          margin: 2rem 0 0 0;
        }
      }
    }

    @media screen and (max-width: 767px) {
      margin: 0;
      width: 100%;
      .left-content {
        margin: 1rem 0 0 2rem;
      }
    }
    @media screen and (max-width: 1255px) {
      width: 100%;
      margin: 0;
    }
    @media screen and (max-width: 800px) {
      .right-content {
        .image {
          img {
            // height: 418px;
          }
        }
      }
    }
  }
`;

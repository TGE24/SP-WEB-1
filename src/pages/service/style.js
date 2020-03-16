import styled from "styled-components";

export const ServiceSectionOne = styled.section`
  width: 100%;
  height: 50vh;

  background-image: url("../assets/aboutus.png");
  background-size: cover;
  .over-lay {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 50vh;
    background: rgba(0, 0, 0, 0.43);
    justify-content: center;
    align-items: center;
    h1 {
      color: #ffffff;
      font-weight: bold;
      font-size: 60px;
      text-align: center;
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

  @media screen and (max-width: 767px) {
    height: 34vh;
  }
  @media screen and (max-width: 1255px) {
    height: 34vh;
  }
`;

export const ServiceSectionThree = styled.section`
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
`;

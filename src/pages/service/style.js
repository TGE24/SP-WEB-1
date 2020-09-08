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
        width: 70%;
        margin-bottom: 15px;
        margin-top: 40px;
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
      padding: 16px 10px;
      text-align: justify;
      height: auto;
      box-shadow: 3.52588px 3.52588px 8.81471px
        rgba(81, 92, 111, 0.12);
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

export const SectionTwo = styled.div`
  margin: 0;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 40px 0 26px 0 !important;
    }
  }
`;
export const Services = styled.div`
  text-align: center;
  padding: 24px;
  h3 {
    font-size: 40px;
    text-transform: capitalize;
    margin: 0;
    color: #515c6f;
    font-weight: 600;
  }
  h5 {
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 43px 0;
    text-transform: capitalize;
    color: #515c6f;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      width: 238px;
      font-size: 15px;
      line-height: 1.5;
    }
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
    .ellipse {
      width: 142px;
      height: 142px;
      border-radius: 100%;
      border: 13px solid #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
    padding: 8px;
    h3 {
      font-size: 26px;
      font-weight: 300;
      line-height: normal;
    }
    h5 {
      font-size: 13px;
      font-weight: 300;
      line-height: normal;
    }
    .card {
      p {
        width: 100%;
        font-size: 12px;
        line-height: 1.5;
      }
      h4 {
        font-size: 18px;
        font-weight: 300;
      }
      .ellipse {
        width: 80px;
        height: 80px;
        border: 5px solid #ffffff;
        img {
          height: 40px;
        }
      }
    }
  }
`;

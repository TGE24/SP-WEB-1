import styled from "styled-components";

export const CareerSectionOne = styled.section`
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
      font-size: 53px;
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

export const CareerSectionTwo = styled.section`
  width: 100%;
  .header {
    margin: 4rem 9rem 0 9rem;
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
      margin: 1rem;
      h1 {
        font-size: 26px;
      }
      h2 {
        font-size: 12px;
      }
    }
  }

  .card-container {
    margin: 4rem 9rem 4rem 9rem;
    .career-card {
      width: 97%;
      height: auto;
      margin-bottom: 12px;
      background: #ffffff;
      box-shadow: 4px 4px 9px rgba(81, 92, 111, 0.12);
      img {
        width: 100%;
        height: 167px;
      }
      .card-details {
        margin: 1rem;
        h1 {
          font-weight: 600;
          font-size: 13px;
          line-height: 11px;
          color: #f9a602;
        }
        hr {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        h2 {
          font-size: 12px;
          line-height: 18px;
          height: 66px;
          color: #313131;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        button {
          border: none;
          background: #f9a602;
          border-radius: 5.07115px;
          width: 89px;
          font-weight: 600;
          font-size: 10.4598px;
          line-height: 16px;
          text-transform: uppercase;
          color: #ffffff;
          height: 26px;
          margin-bottom: 1rem;
        }
      }
    }
    @media screen and (max-width: 767px) {
      margin: auto 3rem;
      .career-card {
        height: auto;
      }
    }
  }
`;

export const CareerSectionThree = styled.section`
  min-height: 730px;
  background: #f5f4f4;
  width: 100%;
  .container-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: 1000px;
    h1 {
      margin-top: 3rem;
      color: #515c6f;
      font-size: 30px;

      font-weight: 600;
      text-align: center;
    }
    h2 {
      color: #515c6f;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .left-content {
    margin: 4rem 0 0 2rem;
    h1 {
      color: #515c6f;
      font-size: 25px;
      font-weight: 600;
    }
    h2 {
      // margin: 0rem 0rem 1rem 1rem;
      font-size: 16px;
      color: #797979;
      text-align: left;
    }
    img {
      // margin: 0rem 0rem 1rem 1rem;
    }
  }
  .vertical-line {
    margin: 6rem 0 0 2rem;
    height: 450px;
    width: 2px;
    background: #797979;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    height: auto;
    .vertical-line {
      display: none;
    }
    .container-section {
      width: auto;
      margin: auto 1em;
    }
    .container,
    .left-content {
      margin: 1rem 0 0 1rem;
      h2 {
        margin: 0rem 0rem 1rem 0rem;
        font-size: 13px;
      }
    }
  }
`;

export const CareerSectionFour = styled.section`
  button {
    border: none;
    background: #f9a602;
    border-radius: 5.07115px;
    width: 129px;
    font-weight: 600;
    font-size: 10.4598px;
    line-height: 16px;
    text-transform: uppercase;
    color: #ffffff;
    height: 26px;
    margin-bottom: 1rem;
  }
  .sectionFour {
    margin: 0 9rem;
    width: 78.7%;
    // height: 461px;

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
        line-height: 1.8;
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
export const CareerSectionFive = styled.section`
  height: 730px;
  background: #f5f4f4;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;

    margin: 1rem 9rem;
    h1 {
      margin-top: 3rem;
      color: #515c6f;
      font-size: 30px;

      font-weight: 600;
      text-align: center;
    }
    h2 {
      color: #515c6f;
      font-size: 20px;

      font-weight: 500;
      text-align: center;
    }
  }
  .cards {
    margin: 6rem 9rem;
    .expert-card {
      width: 314px;
      height: 428px;
      background: #ffffff;
      box-shadow: 4px 4px 9px rgba(81, 92, 111, 0.12);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #515c6f;
      .image-cicle {
        width: 123.01px;
        height: 123.01px;
        border-radius: 100%;
        img {
          height: inherit;
          width: inherit;
          border-radius: 100%;
        }
      }
      h1 {
        color: #515c6f;
        font-weight: 600;
        font-size: 26px;
      }
      h2 {
        color: #515c6f;
        font-weight: 600;
        font-size: 20px;
      }
      h3 {
        color: #515c6f;
        font-weight: 500;
        font-size: 22.3454px;
      }
    }
    h2 {
      text-align: end;
      font-size: 18px;
      line-height: 27px;
      color: #fcad0a;
      margin: 1rem;
    }
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    height: auto;
    .container,
    .cards {
      margin: 1rem 0 0 1rem;
      .expert-card {
        width: 94%;
      }
      h2 {
        margin: 0rem 0rem 1rem 0rem;
        font-size: 13px;
      }
    }
  }
`;

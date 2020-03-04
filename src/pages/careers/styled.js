import styled from "styled-components";
import careers from ".";

export const CareerSectionOne = styled.section`
  width: 100%;
  height: 80vh;

  background-image: url("../assets/aboutus.png");
  background-size: cover;
  .over-lay {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 80vh;
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
      height: 371.72px;
      background: #ffffff;
      box-shadow: 4px 4px 9px rgba(81, 92, 111, 0.12);
      img {
        width: 100%;
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

          color: #313131;
          margin-bottom: 1rem;
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
      margin: 1rem;
      .career-card {
        height: auto;
      }
    }
  }
`;

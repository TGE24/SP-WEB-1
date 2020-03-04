import styled from "styled-components";

export const PropertyContainer = styled.div`
  width: 100%;
`;
export const PropSectionOne = styled.section`
  width: 100%;
  height: 80vh;

  background-image: url("../assets/property.png");
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

export const PropSectionTwo = styled.section`
  width: 80%;
  margin: 8rem;
  display: flex;
  flex-direction: column;
  .row-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      font-weight: 600;
      font-size: 30px;
      color: #515c6f;
      text-transform: capitalize;
      @media screen and (max-width: 767px) {
        font-size: 20px;
      }
    }
    .sort-by {
      .ant-select-selection {
        border: none !important;
      }
      .ant-select-selection-selected-value {
        color: #515c6f;
        font-weight: 500;
        font-size: 14.5341px;
      }
    }
  }

  .prop-cards {
    width: 98%;
    display: flex;
    flex-direction: column;
    .image {
      height: 162px;
      img {
        width: 100%;
        height: inherit;
      }
      .apartment {
        position: absolute;
        top: 0;
        left: 72%;
        width: 68px;
        display: flex;
        border-radius: 0 0px 0px 17px;
        height: 24px;
        background: #f9a602;
        opacity: 0.9;
        align-items: center;
        justify-content: center;
        h4 {
          font-size: 11px;
          color: #ffffff;
        }
      }
      .feature {
        position: absolute;
        left: 0;
        top: 137px;
        width: 68px;
        display: flex;
        height: 24px;
        background: #313131;
        align-items: center;
        justify-content: center;
        h4 {
          font-size: 11px;
          color: #ffffff;
          font-weight: 500;
          font-size: 12.8563px;
        }
      }
    }
    .prop-details {
      background: #ffffff;
      box-shadow: 0px 4.28542px 2.14271px rgba(0, 0, 0, 0.05);
      h2 {
        font-weight: 500;
        font-size: 13.9276px;
        line-height: 12px;
        color: #797979;
      }
      h4 {
        font-weight: 500;
        font-size: 11.9276px;
        line-height: 12px;
        color: #797979;
      }
      .inner-container {
        margin: 1rem;
      }
    }

    .prop-icons {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      h4 {
        font-weight: 600;
        font-size: 13.2587px;

        text-transform: uppercase;

        color: #bdbdbd;
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin: 4rem 2rem;
  }
`;

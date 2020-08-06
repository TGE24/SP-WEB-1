import styled from "styled-components";

export const PropertyContainer = styled.div`
  width: 100%;
`;
export const LoaderCont = styled.div`
  display: flex;
  .load {
    margin-left: 10px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .load {
      padding-bottom: 10px;
    }
  }
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
        font-size: 36px;
        margin: 0;
        text-align: center;
      }
      h2 {
        font-size: 17px;
        margin: 0;
      }
      height: 60vh;
    }
    @media screen and (max-width: 1255px) {
      height: 60vh;
    }
  }

  @media screen and (max-width: 767px) {
    height: 60vh;
  }
  @media screen and (max-width: 1255px) {
    height: 60vh;
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
    margin-bottom: 30px;
    h1 {
      font-weight: 600;
      font-size: 30px;
      color: #515c6f;
      text-transform: capitalize;
      @media screen and (max-width: 767px) {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: ;
    }
    .sort-by {
      .ant-select-single:not(.ant-select-customize-input)
        .ant-select-selector {
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
    margin-bottom: 30px;
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
        top: 2%;
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
        top: 150px;
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
      height: 63px;
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
      flex-wrap: wrap;
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
    width: 93%;
    margin: 10rem 1rem 4rem 1rem;
    .sort-icon {
      display: none;
    }
    .select-sort {
      width: 120px !important;
    }
    .apartment {
      left: 61% !important;
    }
    .prop-cards {
      .prop-details {
        h2 {
          font-size: 12.9276px;
        }
        h4 {
          font-size: 9.9276px;
        }
        .inner-container {
          margin: 1rem;
        }
      }
    }
  }
`;

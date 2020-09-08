import styled from "styled-components";

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

export const Testimony = styled.div`
  width: 349px !important;
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  h4 {
    font-weight: 600;
    font-size: 20px;
    color: #797979;
  }
  h6 {
    font-size: 15px;
    color: #797979;
  }
  .elipse {
    width: 120px;
    height: 120px;
    background-blend-mode: normal;
    display: unset !important;
    position: relative;
    bottom: 62px;
  }
  @media (max-width: 767px) {
    width: 100% !important;
  }
`;

export const Testimonials = styled.div`
 display: flex
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
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
@media (max-width: 767px) {
  padding: 0;
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
}
 `;

export const Rep = styled.div`
  width: 348px;
  height: 250px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  .description {
    display: flex;
    flex-direction: column;
    padding: 32px 10px 0 0;
    h5 {
      font-size: 25px;
      margin: 0;
    }
    h6 {
      font-size: 16px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    .description {
      padding: 65px 0 0 0;
      h5 {
        font-size: 18px;
        margin: 0;
      }
      h6 {
        font-size: 13px;
      }
      hr {
        margin: 0;
      }
    }
  }
`;

export const SectionTwo = styled.div`
  margin: 0;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 15px !important;
    }
  }
`;

export const SectionThree = styled.div`
  margin: 0;
  .button {
    background: #f9a602;
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 15px !important;
    }
    .ant-card-body {
      padding: 0 0 12px 0 !important;
    }
  }
`;

export const SectionSeven = styled.div`
  margin: 0;
  .button {
    background: #f9a602;
  }
  .previous {
    display: none;
  }
  .next {
    display: none;
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 150px 0 26px 0 !important;
    }
    .ant-card-bordered {
      width: 100% !important;
    }
    .ant-card-body {
      padding: 1em 1em 0 1em !important;
    }
    .ant-row {
      flex-direction: row;
      flex-flow: unset !important;
      overflow: auto;
    }
    .previous {
      display: initial;
      position: relative;
      top: 118px;
      height: 36px;
      z-index: 9999;
      right: 142px;
    }
    .next {
      display: initial;
      position: relative;
      bottom: 200px;
      height: 36px;
      z-index: 9999;
      left: 140px;
    }
  }
`;

export const SectionEight = styled.div`
  margin: 0;
  .button {
    background: #f9a602;
  }
  .previous {
    display: none;
  }
  .next {
    display: none;
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 15px !important;
    }
    .ant-card-bordered {
      width: 338px !important;
    }
    .ant-card-body {
      padding: 40px 0 0 0 !important;
      h5 {
        font-size: 18px;
      }
    }
    .ant-row {
      flex-direction: row;
      flex-flow: unset !important;
      overflow: auto;
    }
    .previous {
      display: initial;
      position: relative;
      top: 140px;
      height: 36px;
      z-index: 9999;
      right: 142px;
    }
    .next {
      display: initial;
      position: relative;
      bottom: 186px;
      height: 36px;
      z-index: 9999;
      left: 140px;
    }
  }
`;

export const SectionFive = styled.div`
  margin: 0;
  .button {
    background: #f9a602;
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 15px !important;
    }
    .ant-card-bordered {
      width: unset !important;
    }
    .ant-card-body {
      padding: 0 0 12px 0 !important;
    }
  }
`;

export const SectionFour = styled.div`
  margin: 0;
  .previous {
    display: none;
  }
  .next {
    display: none;
  }
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 30px !important;
    }
    .ant-card-bordered {
      width: unset !important;
    }
    .ant-row {
      flex-direction: row;
      flex-flow: unset !important;
      overflow: auto;
    }
    .previous {
      display: initial;
      position: relative;
      top: 140px;
      height: 36px;
      z-index: 9999;
      right: 142px;
    }
    .next {
      display: initial;
      position: relative;
      bottom: 166px;
      height: 36px;
      z-index: 9999;
      left: 140px;
    }
  }
`;

export const SectionSix = styled.div`
  margin: 0;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 30px !important;
    }
  }
`;

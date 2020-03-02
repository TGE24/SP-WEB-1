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
    padding: 0;
    h3 {
      font-size: 36px;
      line-height: normal;
    }
    h5 {
      font-size: 17px;
    }
    .card {
      p {
        width: 186px;
      }
      h4 {
        font-size: 18px;
        font-weight: bold;
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
    font-size: 36px;
    line-height: normal;
  }
  h5 {
    font-size: 17px;
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
`;

export const SectionTwo = styled.div`
  margin: 0;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 65px 0 !important;
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
      padding: 30px !important;
    }
    .ant-card-bordered {
      width: unset !important;
    }
  }
`;

export const SectionFour = styled.div`
  margin: 0;
  @media (max-width: 767px) {
    .ant-layout-content {
      padding: 30px !important;
    }
    .ant-card-bordered {
      width: unset !important;
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

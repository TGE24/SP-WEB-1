import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #515c6f;
  height: auto;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  @media screen and (max-width: 767px) {
    height: 396px;
    #footer-logo {
      display: none;
    }
  }
  @media screen and (max-width: 1255px) {
    height: 422px;
  }
  img {
  }
  .ant-row {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;

    @media screen and (max-width: 767px) {
      margin-right: 1rem !important;
      margin-left: 2rem !important;
    }
  }
  h1 {
    color: #c4c4c4;
    font-size: 25px;
    font-weight: bold;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
  .container-item {
    margin-top: 2rem !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    @media screen and (max-width: 767px) {
      #news {
        font-size: 19px;
        align-self: center;
      }
    }
    ul {
      color: #c4c4c4;
      font-size: 15px;
      font-weight: 700;
      list-style-type: none;
      margin: 0;
      padding: 0;
      a {
        color: #c4c4c4;
      }
      @media screen and (max-width: 767px) {
        font-size: 13px;
      }
    }
  }

  .newsletter {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      background: transparent;
      color: #c4c4c4;
      border: 1.54227px solid #ffffff;
      box-sizing: border-box;
      border-radius: 5px 0 0 5px;
      width: 99%;
      height: 44px;
      text-align: center;
      font-size: 18px;
      @media screen and (max-width: 767px) {
        font-size: 13px;
      }
      ::placeholder {
        color: #c4c4c4;
      }
    }
    button {
      background: #f9a602;
      border-radius: 0 5px 5px 0;
      height: 44px;
      width: 125px;
      border: #f9a602 solid;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .line {
    margin-left: 1.5rem;
    height: 1px;
    width: 97%;
    background: #c4c4c4;
    @media screen and (max-width: 767px) {
      width: 88%;
      margin-top: 3rem;
    }
  }
  .copy {
    background-color: #515c6f;
    color: #c4c4c4;
    margin-top: 1rem;
    padding: 1rem;

    text-align: center;
    font-size: 10px;
  }
`;

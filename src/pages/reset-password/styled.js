import styled from "styled-components";

export const ResetPasswordContainer = styled.section`
  // width: 100%;
  // height: 60vh;
`;

ResetPasswordContainer.Form = styled.form`
  margin: 3rem;
  padding-bottom: 1rem;
  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .input-control {
      width: 48%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .input-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  // .input-control input {
  //   color: #515c6f;
  //   border: 1px solid #c1c1c1;
  //   box-sizing: border-box;
  //   border-radius: 10px;
  //   background: #fbfbfb;
  //   font-size: 16px;
  //   height: 50px;
  //   padding: 0rem 1rem;
  //   :focus {
  //     outline-style: none;
  //   }
  // }

  .input-control label {
    font-size: 18px;
    line-height: 27px;
    color: #515c6f;
    margin-bottom: 5px;
  }
  button {
    border: none;
    background: #f9a602;
    border-radius: 10px;
    width: 229px;
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    text-transform: capitalize;
    color: #ffffff;
    height: 48px;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;

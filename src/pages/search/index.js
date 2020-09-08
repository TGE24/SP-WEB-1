import Search from "components/search";
import Navbar from "components/navbar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url("../assets/property.png");
  background-size: cover;
  .over-lay {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40vh;
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
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            position: "relative",
            top: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search />
        </div>
      </Container>
    </>
  );
};

export default App;

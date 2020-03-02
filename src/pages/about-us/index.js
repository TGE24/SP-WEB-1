import React from "react";
import { Row, Col } from "antd";
import { AboutUsContainer } from "./styled";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

export default () => {
  return (
    <>
      <AboutUsContainer>
        <NavBar />
        <div className="sectionOne">
          <div className="over-lay">
            <h1>Who we are</h1>
            <h2>comfortable, affordable,exotic,un uniquevvv</h2>
          </div>
        </div>
        <div className="sectionTwo">
          <h1>Latest Real Estate</h1>
          <h2>
            {" "}
            Blah blah blah blah blah blah Blah blah blah blah blah
          </h2>
        </div>
        <div className="sectionThree">
          <Row>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-text">
                <h1>Who we are</h1>
                <h2>Blah blah blah Blah blah blah blah blah</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Id nibh laoreet aliquam penatibus enim dolor
                  scelerisque. Sed libero malesuada arcu leo, auctor.
                  Nulla ut sit auctor lacus. Cursus tincidunt ornare
                  mattis eget egestas tincidunt nullam diam. malesuada
                  arcu leo, auctor. Nulla ut sit auctor lacus. Cursus
                  tincidunt ornare mattis eget egestas tincidunt
                  nullam diam.
                </h3>
              </div>
            </Col>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-image"></div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-image2"></div>
            </Col>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-text">
                <h1>Our Mision</h1>
                <h2>Blah blah blah Blah blah blah blah blah</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Id nibh laoreet aliquam penatibus enim dolor
                  scelerisque. Sed libero malesuada arcu leo, auctor.
                  Nulla ut sit auctor lacus. Cursus tincidunt ornare
                  mattis eget egestas tincidunt nullam diam. malesuada
                  arcu leo, auctor. Nulla ut sit auctor lacus. Cursus
                  tincidunt ornare mattis eget egestas tincidunt
                  nullam diam.
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-text">
                <h1>Our Vision</h1>
                <h2>Blah blah blah Blah blah blah blah blah</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Id nibh laoreet aliquam penatibus enim dolor
                  scelerisque. Sed libero malesuada arcu leo, auctor.
                  Nulla ut sit auctor lacus. Cursus tincidunt ornare
                  mattis eget egestas tincidunt nullam diam. malesuada
                  arcu leo, auctor. Nulla ut sit auctor lacus. Cursus
                  tincidunt ornare mattis eget egestas tincidunt
                  nullam diam.
                </h3>
              </div>
            </Col>
            <Col xs={24} sm={2} md={10} lg={6} xl={12}>
              <div className="side-image3"></div>
            </Col>
          </Row>
        </div>
        <div className="sectionFour">
          <div className="container">djdj</div>
        </div>
      </AboutUsContainer>
      <Footer />
    </>
  );
};

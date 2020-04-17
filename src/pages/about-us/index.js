import React from "react";
import { Row, Col } from "antd";
import { AboutUsContainer } from "./styled";
import Layout from "../../components/Layout";

export default () => {
  return (
    <Layout title="About us">
      <AboutUsContainer>
        <div className="sectionOne">
          <img src="../assets/aboutus.png" alt="" />
          <div className="over-lay">
            <h1>Who we are</h1>
            <h2>comfortable, affordable,exotic,un uniquevvv</h2>
          </div>
        </div>
        <div className="sectionTwo">
          <h1>Latest Real Estate</h1>
          <h2> Blah blah blah blah blah blah Blah blah blah blah blah</h2>
        </div>
        <div className="sectionThree">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="side-text">
                <h1>Who we are</h1>
                {/* <h2>Blah blah blah Blah blah</h2> */}
                <h3>
                  The SpreadPro limited is a fast growing real estate
                  development, management and investment company. We are a
                  dynamic organization providing unprecedented real estate
                  solution for people of all class, style and age. We also
                  provide opportunities for all class of people to own valuable
                  commercial and Residential properties in high profitable
                  locations. We achieve this by continually innovate affordable
                  payment system that best suites you. Our goal is to deliver
                  indomitable value to our customers. This drive us to offer
                  speedy Services that go beyond sales
                </h3>
              </div>
            </Col>
            <Col xs={0} sm={2} md={12} lg={12} xl={12} className="no-display">
              <div className="side-image"></div>
            </Col>

            <Col xs={0} sm={2} md={12} lg={12} xl={12} className="no-display">
              <div className="side-image2"></div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="side-text">
                <h1>Our Mision</h1>
                {/* <h2>Blah blah blah Blah blah</h2> */}
                <h3>
                  To provide cutting-edge affordable and luxury property to
                  people across the globe.
                </h3>
              </div>
            </Col>

            <Col xs={24} sm={2} md={12} lg={12} xl={12}>
              <div className="side-text">
                <h1>Our Vision</h1>
                {/* <h2>Blah blah blah Blah blah</h2> */}
                <h3>
                  To create the world largest, affordable and luxury real estate
                  portfolio
                </h3>
              </div>
            </Col>
            <Col xs={0} sm={2} md={12} lg={12} xl={12} className="no-display">
              <div className="side-image3"></div>
            </Col>
          </Row>
        </div>
        <div className="sectionFour">
          <Row>
            <Col xs={24} sm={2} md={12} lg={12} xl={12}>
              <div className="left-content">
                <h1>Why Choose Us</h1>
                <Row>
                  <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    <img src="../assets/icons/bullet.png" alt="" />
                  </Col>
                  <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id nibh nullam diam.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    <img src="../assets/icons/bullet.png" alt="" />
                  </Col>
                  <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id nibh nullam diam.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    <img src="../assets/icons/bullet.png" alt="" />
                  </Col>
                  <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id nibh nullam diam.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    <img src="../assets/icons/bullet.png" alt="" />
                  </Col>
                  <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id nibh nullam diam.
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    <img src="../assets/icons/bullet.png" alt="" />
                  </Col>
                  <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                    <h2>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id nibh nullam diam.
                    </h2>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <div className="right-content">
                <div className="circle"></div>
                <div className="image">
                  <img src="../assets/last-aout-us.png" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </AboutUsContainer>
    </Layout>
  );
};

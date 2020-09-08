import React from "react";
import { Row, Col, List, Typography } from "antd";
import { AboutUsContainer } from "./styled";

export default () => {
  return (
    <AboutUsContainer>
      <div className="sectionOne">
        <div className="over-lay">
          <h1>Who we are</h1>
          <h2>comfortable, affordable, exotic and unique</h2>
        </div>
      </div>
      <div className="sectionTwo">
        <h1>About Our Company</h1>
      </div>
      <div className="sectionThree">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="side-text">
              <h1>Who we are</h1>
              <h3 style={{ textAlign: "justify" }}>
                The SpreadPro limited is a fast growing real estate development,
                management and investment company. We are a dynamic organization
                providing unprecedented real estate solution for people of all
                class, style and age. We also provide opportunities for all
                class of people to own valuable commercial and Residential
                properties in high profitable locations. We achieve this by
                continually innovate affordable payment system that best suites
                you. Our goal is to deliver indomitable value to our customers.
                This drive us to offer speedy Services that go beyond sales
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
              <h3 style={{ textAlign: "justify" }}>
                To provide cutting-edge affordable and luxury property to people
                across the globe.
              </h3>
            </div>
          </Col>

          <Col xs={24} sm={2} md={12} lg={12} xl={12}>
            <div className="side-text">
              <h1>Our Vision</h1>
              <h3 style={{ textAlign: "justify" }}>
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
              <List
                size="small"
                header={
                  <Typography.Title level={1}>Why Choose Us</Typography.Title>
                }
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text>
                      <img
                        src="../assets/icons/bullet.png"
                        alt=""
                        height={10}
                      />
                    </Typography.Text>{" "}
                    {item}
                  </List.Item>
                )}
              />
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
  );
};

const data = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh nullam diam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh nullam diam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh nullam diam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh nullam diam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh nullam diam.",
];

import React from "react";
import { Row, Col, Select } from "antd";
import { CareerSectionFour } from "./styled";

export default () => {
  return (
    <CareerSectionFour>
      <div className="sectionFour">
        <Row>
          <Col xs={24} sm={2} md={12} lg={12} xl={12}>
            <div className="left-content">
              <h1>Hire an Expert</h1>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nibh nullam diam.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nibh nullam diam.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nibh nullam diam.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nibh nullam diam.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    nibh nullam diam.
                  </h2>
                </Col>
                <button>Apply</button>
              </Row>
            </div>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className="right-content">
              <div className="circle"></div>
              <div className="image">
                <img src="../assets/career.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </CareerSectionFour>
  );
};

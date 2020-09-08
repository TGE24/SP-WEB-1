import React from "react";
import { Row, Col } from "antd";
import { CareerSectionFour } from "./styled";

export default () => {
  return (
    <CareerSectionFour>
      <div className="sectionFour">
        <Row>
          <Col xs={24} sm={2} md={12} lg={12} xl={12}>
            <div className="left-content">
              <h1>Hire an Expert</h1>
              <h2>Get professionals for your property projects.</h2>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Building experts to help you build or renovate your dream
                    building.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                  <img src="../assets/icons/bullet.png" alt="" />
                </Col>
                <Col xs={22} sm={23} md={23} lg={23} xl={23}>
                  <h2>
                    Professionals to work for you; Surveyor, Architect,
                    Quantifiers, Property Consultant,
                    Photographer/Cinematographer, Property registrar's.
                  </h2>
                </Col>
                <button>Request an expert</button>
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

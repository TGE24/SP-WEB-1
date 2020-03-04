import React from "react";
import { Row, Col, Select } from "antd";
import { CareerSectionTwo } from "./styled";

export default () => {
  return (
    <CareerSectionTwo>
      <div className="header">
        <h1>Spread Vacancies</h1>
        <h2>Blah blah blah blah blah blah Blah blah blah blah blah</h2>
      </div>
      <div className="card-container">
        <Row>
          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <div className="career-card">
              <img src="../assets/career-card1.png" alt="" />
              <div className="card-details">
                <h1>Tech Expert needed</h1>
                <hr />
                <h2>
                  as a self-directed, collaborative, flexible and voluntary work
                  style that as a self-directed, collaborative, flexible and
                </h2>
                <button>Apply</button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <div className="career-card">
              <img src="../assets/career-card2.png" alt="" />
              <div className="card-details">
                <h1>Tech Expert needed</h1>
                <hr />
                <h2>
                  as a self-directed, collaborative, flexible and voluntary work
                  style that as a self-directed, collaborative, flexible and
                </h2>
                <button>Apply</button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <div className="career-card">
              <img src="../assets/career-card3.png" alt="" />
              <div className="card-details">
                <h1>Tech Expert needed</h1>
                <hr />
                <h2>
                  as a self-directed, collaborative, flexible and voluntary work
                  style that as a self-directed, collaborative, flexible and
                </h2>
                <button>Apply</button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <div className="career-card">
              <img src="../assets/career-card1.png" alt="" />
              <div className="card-details">
                <h1>Tech Expert needed</h1>
                <hr />
                <h2>
                  as a self-directed, collaborative, flexible and voluntary work
                  style that as a self-directed, collaborative, flexible and
                </h2>
                <button>Apply</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </CareerSectionTwo>
  );
};

import React from "react";
import { Row, Col } from "antd";
import { CareerSectionFive } from "./styled";

export default () => {
  return (
    <CareerSectionFive>
      <div className="container">
        <h1>Meet our experts </h1>
        <h2>
          Invest in Spread properties; We invest in secure and profitable real
          Estate
        </h2>
      </div>
      <div className="cards">
        <Row>
          <Col xs={24} sm={2} md={10} lg={8} xl={8}>
            <div className="expert-card">
              <div className="image-cicle">
                <img src="../assets/property.png" alt="" />
              </div>
              <h1>Rick Ross </h1>
              <h2>Chief Executive officer</h2>
              <h3>lassicui4@gmail.com </h3>
              <h3>+234 08182739942 </h3>
            </div>
          </Col>
          <Col xs={24} sm={2} md={10} lg={8} xl={8}>
            <div className="expert-card">
              <div className="image-cicle">
                <img src="../assets/property.png" alt="" />
              </div>
              <h1>Rick Ross </h1>
              <h2>Chief Executive officer</h2>
              <h3>lassicui4@gmail.com </h3>
              <h3>+234 08182739942 </h3>
            </div>
          </Col>
          <Col xs={24} sm={2} md={10} lg={8} xl={8}>
            <div className="expert-card">
              <div className="image-cicle">
                <img src="../assets/property.png" alt="" />
              </div>
              <h1>Rick Ross </h1>
              <h2>Chief Executive officer</h2>
              <h3>lassicui4@gmail.com </h3>
              <h3>+234 08182739942 </h3>
            </div>
          </Col>
        </Row>
      </div>
    </CareerSectionFive>
  );
};

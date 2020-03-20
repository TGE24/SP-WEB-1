import React from "react";
import { Row, Col } from "antd";
import { CareerSectionTwo } from "./styled";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

export default () => {
  return (
    <CareerSectionTwo>
      <div className="header">
        <Zoom left cascade>
          <h1>Spread Vacancies</h1>
        </Zoom>
        <Rotate top right cascade>
          <h2>Blah blah blah blah blah blah Blah blah blah blah blah</h2>
        </Rotate>
      </div>
      <div className="card-container">
        <Row>
          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <Flip top cascade>
              <div className="career-card">
                <img src="../assets/career-card1.png" alt="" />
                <div className="card-details">
                  <h1>Tech Expert needed</h1>
                  <hr />
                  <h2>
                    as a self-directed, collaborative, flexible and voluntary
                    work style that as a self-directed, collaborative, flexible
                    and
                  </h2>
                  <button>Apply</button>
                </div>
              </div>
            </Flip>
          </Col>

          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <Flip top cascade>
              <div className="career-card">
                <img src="../assets/career-card2.png" alt="" />
                <div className="card-details">
                  <h1>Tech Expert needed</h1>
                  <hr />
                  <h2>
                    as a self-directed, collaborative, flexible and voluntary
                    work style that as a self-directed, collaborative, flexible
                    and
                  </h2>
                  <button>Apply</button>
                </div>
              </div>
            </Flip>
          </Col>

          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <Flip top cascade>
              <div className="career-card">
                <img src="../assets/career-card3.png" alt="" />
                <div className="card-details">
                  <h1>Tech Expert needed</h1>
                  <hr />
                  <h2>
                    as a self-directed, collaborative, flexible and voluntary
                    work style that as a self-directed, collaborative, flexible
                    and
                  </h2>
                  <button>Apply</button>
                </div>
              </div>
            </Flip>
          </Col>

          <Col xs={24} sm={2} md={10} lg={6} xl={6}>
            <Flip top cascade>
              <div className="career-card">
                <img src="../assets/career-card1.png" alt="" />
                <div className="card-details">
                  <h1>Tech Expert needed</h1>
                  <hr />
                  <h2>
                    as a self-directed, collaborative, flexible and voluntary
                    work style that as a self-directed, collaborative, flexible
                    and
                  </h2>
                  <button>Apply</button>
                </div>
              </div>
            </Flip>
          </Col>
        </Row>
      </div>
    </CareerSectionTwo>
  );
};

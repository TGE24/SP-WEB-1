import React from "react";
import { CareerSectionThree } from "./styled";
import { Row, Col, List, Typography } from "antd";
export default () => {
  return (
    <CareerSectionThree>
      <div className="container-section">
        <h1>Investment</h1>
        <h2 style={{ textAlign: "center" }}>
          Invest in SpreadPro Projects and earn continual annual
          return up to 10 years. We invest in cash flow producing
          property in good locations that guarantees security and
          profitability.
        </h2>
        <Row
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col xs={24} sm={2} md={11} lg={11} xl={11}>
            <div className="left-content">
              <h1 style={{ textAlign: "center" }}>
                Short Term Investment
              </h1>
              <List
                size="small"
                header={
                  <Typography.Title
                    level={2}
                    style={{ textAlign: "justify" }}
                  >
                    Our short term Investment, gives you the
                    opportunity to invest in a Short term based
                    property project by SpreadPro.
                  </Typography.Title>
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
          <div className="vertical-line"></div>
          <Col xs={24} sm={2} md={11} lg={11} xl={11}>
            <div className="left-content">
              <h1 style={{ textAlign: "center" }}>
                Long Term Investment
              </h1>
              <List
                size="small"
                header={
                  <Typography.Title
                    level={2}
                    style={{ textAlign: "justify" }}
                  >
                    Our long term Investment is mostly invested in
                    construction of multi family apartment that
                    produces continous annual return.
                  </Typography.Title>
                }
                dataSource={data2}
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
        </Row>
      </div>
    </CareerSectionThree>
  );
};

const data = [
  "Investors earn 10% interest per annum",
  "Investors can liquidate after getting interest or continue investment.",
  "Investment is on automation, but not fixed, hence it's subject to upward review.",
  "Investment can be upgraded.",
  "Investment is secured and insured through hard property assets.",
  "SpreadPro manages investment on a net of fees base.",
];

const data2 = [
  "Investors earn 15% to 2% interest per annum based on capital invested",
  "Investors earn consistently for 8 - 10 years, before liquidation",
  "Investment is on automation, but not fixed, hence it's subject to upward review.",
  "Investment can be upgraded",
  "Investment is secured and insured through hard property assets.",
  "SpreadPro manages investment on a net of fees base.",
];

import { Layout, Row, Col, Card, Empty } from "antd";
import { Services, SectionSeven } from "./styled";
import Jump from "react-reveal/Jump";

const { Content } = Layout;

export default () => (
  <SectionSeven>
    <Content
      style={{
        padding: "82px 50px 50px 50px",
        background: "whitesmoke",
      }}
    >
      <Services>
        <h3>Spread Promotions</h3>
        <h5>We offer the very best deals</h5>
        {/* <img
          src="/assets/prev.png"
          alt="Previous"
          className="previous"
        /> */}
        <Row
          gutter={[0, 12]}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {location.length === 0 ? (
            <Empty description={<span>No Promos Yet</span>} />
          ) : (
            location.map((item, index) => (
              <Col
                xs={24}
                sm={18}
                md={12}
                lg={6}
                xl={6}
                key={index}
                className="column-6"
              >
                <Jump>
                  <Card
                    title={
                      <div
                        style={{
                          backgroundImage: `url(${item.image})`,
                          height: "182.19px",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    }
                    style={{ width: 253.86 }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        textAlign: "start",
                        margin: 0,
                      }}
                    >
                      <span
                        style={{
                          color: "#F9A602",
                          fontSize: "15px",
                          marginRight: "18px",
                        }}
                      >
                        Ancient Bungalo Ancient
                      </span>{" "}
                      <span style={{ float: "right" }}>₦436</span>
                    </p>
                    <p style={{ fontSize: "15px", textAlign: "start" }}>
                      Calabar / Nigeria
                    </p>
                  </Card>
                </Jump>
              </Col>
            ))
          )}
        </Row>
        {/* <img src="/assets/next.png" alt="Next" className="next" /> */}
      </Services>
    </Content>
  </SectionSeven>
);

const location = [];

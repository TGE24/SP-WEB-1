import { Layout, Empty, Row, Col, Card, Tag } from "antd";
import { Services, SectionFive } from "./styled";
import Zoom from "react-reveal/Zoom";

const { Content } = Layout;
const { Meta } = Card;

export default () => (
  <SectionFive>
    <Content
      style={{
        padding: "82px 50px 50px 50px",
      }}
    >
      <Services>
        <h3>Featured Real Estates</h3>
        <h5>Checkout our featured properties</h5>
        <Row
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {realEstate.length === 0 ? (
            <Empty
              description={<span>NO FEATURED PROPERTIES YET</span>}
            />
          ) : (
            realEstate.map((item, index) => (
              <Col
                xs={24}
                sm={18}
                md={12}
                lg={8}
                xl={8}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Zoom bottom>
                  <Card
                    hoverable
                    style={{ width: 338 }}
                    cover={
                      <>
                        <img alt="example" src={item.image} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            position: "relative",
                            bottom: "24px",
                          }}
                        >
                          <Tag
                            color="#313131"
                            style={{
                              position: "relative",
                              width: "66px",
                            }}
                          >
                            Featured
                          </Tag>
                          <Tag
                            color="#F9A602"
                            style={{
                              position: "relative",
                              width: "60.07px",
                            }}
                          >
                            {item.type}
                          </Tag>
                        </div>
                      </>
                    }
                  >
                    <Meta
                      title={item.title}
                      description={item.location}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "14px",
                        padding: "0 20px",
                      }}
                    >
                      {item.features.map((item2, index) => (
                        <div key={index}>
                          <img
                            src={item2}
                            alt="features"
                            height="25"
                          />
                          <h6>Bedrooms</h6>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Zoom>
              </Col>
            ))
          )}
        </Row>
      </Services>
    </Content>
  </SectionFive>
);

const realEstate = [];

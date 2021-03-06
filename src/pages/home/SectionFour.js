import { Layout, Row, Col, Empty } from "antd";
import { Services, SectionFour } from "./styled";

const { Content } = Layout;

export default () => (
  <SectionFour>
    <Content
      style={{
        padding: "82px 50px 50px 50px",
        background: "whitesmoke",
      }}
    >
      <Services>
        <h3>Best Real Estate Locations</h3>
        <h5>check out our locations</h5>
        {/* <img src="/assets/prev.png" alt="Previous" className="previous" /> */}
        <Row
          gutter={[16, 16]}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {locations.length === 0 ? (
            <Empty description={<span>NO LOCATIONS YET</span>} />
          ) : (
            locations.map((item, index) => (
              <Col xs={24} sm={18} md={12} lg={8} xl={8} key={index}>
                <div
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
                    backgroundSize: "cover",
                    height: "239px",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "Cookie",
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "60px",
                      lineHeight: "67px",
                    }}
                  >
                    {item.city}
                  </h1>
                </div>
              </Col>
            ))
          )}
        </Row>
        {/* <img src="/assets/next.png" alt="Next" className="next" /> */}
      </Services>
    </Content>
  </SectionFour>
);

const locations = [];

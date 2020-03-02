import { Layout, Row, Col, Card } from "antd";
import { Services, SectionThree } from "./styled";
import "./index.css";

const { Content } = Layout;

export default () => (
  <SectionThree>
    <Content
      style={{
        padding: "50px"
      }}
    >
      <Services>
        <h3>Best Real Estate Deals</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row gutter={[0, 12]}>
          {location.map((item, index) => (
            <Col xs={24} sm={18} md={12} lg={6} xl={6} key={index}>
              <Card
                title={
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: "182.19px",
                      backgroundRepeat: "no-repeat"
                    }}
                  ></div>
                }
                style={{ width: 253.86 }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    textAlign: "start",
                    margin: 0
                  }}
                >
                  <span
                    style={{
                      color: "#F9A602",
                      fontSize: "15px",
                      marginRight: "18px"
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
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionThree>
);

const location = [
  {
    image: "/assets/l1.png",
    city: "Rome"
  },
  {
    image: "/assets/l2.png",
    city: "Rome"
  },
  {
    image: "/assets/l3.png",
    city: "Rome"
  },
  {
    image: "/assets/l4.png",
    city: "Rome"
  },
  {
    image: "/assets/l5.png",
    city: "Rome"
  },
  {
    image: "/assets/l6.png",
    city: "Rome"
  },
  {
    image: "/assets/l6.png",
    city: "Rome"
  },
  {
    image: "/assets/l6.png",
    city: "Rome"
  }
];

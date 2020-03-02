import { Layout, Row, Col } from "antd";
import { Services, SectionFour } from "./styled";
import "./index.css";

const { Content } = Layout;

export default () => (
  <SectionFour>
    <Content
      style={{
        padding: "82px 50px 0 50px",
        background: "whitesmoke"
      }}
    >
      <Services>
        <h3>Best Real Estate Locations</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row gutter={[16, 16]}>
          {locations.map((item, index) => (
            <Col xs={24} sm={18} md={12} lg={8} xl={8} key={index}>
              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
                  backgroundSize: "cover",
                  height: "239px",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Cookie",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "60px",
                    lineHeight: "67px"
                  }}
                >
                  {item.city}
                </h1>
              </div>
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionFour>
);

const locations = [
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
  }
];

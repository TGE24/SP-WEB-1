import { Layout, Row, Col, Card } from "antd";
import { Services, SectionSeven } from "./styled";
import Jump from "react-reveal/Jump";

const { Content } = Layout;

export default () => (
  <SectionSeven>
    <Content
      style={{
        padding: "50px",
      }}
    >
      <Services>
        <h3>Best Real Estate Deals</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        {/* <img
          src="/assets/prev.png"
          alt="Previous"
          className="previous"
        /> */}
        <Row gutter={[0, 12]}>
          {location.map((item, index) => (
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
          ))}
        </Row>
        {/* <img src="/assets/next.png" alt="Next" className="next" /> */}
      </Services>
    </Content>
  </SectionSeven>
);

const location = [
  {
    image: "/assets/l1.png",
    city: "Rome",
  },
  {
    image: "/assets/l2.png",
    city: "Rome",
  },
  {
    image: "/assets/l3.png",
    city: "Rome",
  },
  {
    image: "/assets/l4.png",
    city: "Rome",
  },
  {
    image: "/assets/l5.png",
    city: "Rome",
  },
  {
    image: "/assets/l6.png",
    city: "Rome",
  },
  {
    image: "/assets/l6.png",
    city: "Rome",
  },
  {
    image: "/assets/l6.png",
    city: "Rome",
  },
];

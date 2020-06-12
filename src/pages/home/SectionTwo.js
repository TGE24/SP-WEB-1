import { Layout, Row, Col, Card } from "antd";
import { Services, SectionTwo } from "./styled";
import Flip from "react-reveal/Flip";

const { Content } = Layout;

export default () => (
  <SectionTwo>
    <Content
      style={{
        padding: "82px 50px 50px 50px",
        background: "whitesmoke",
      }}
    >
      <Services>
        <h3>Services We Offer</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row>
          {services.map((item, index) => (
            <Col
              xs={12}
              sm={18}
              md={12}
              lg={6}
              xl={6}
              key={index}
              className="column-6"
            >
              <Flip top>
                <div className="card">
                  <div className="ellipse">
                    <img src={item.image} alt="home-icon" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Flip>
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionTwo>
);

const services = [
  {
    title: "Estate Management",
    image: "/assets/home.png",
    description:
      "We develop bare properties into exquisite building, estate and cities.We employ the best equipment with the latest modern technology...",
  },

  {
    title: "Property Management",
    image: "/assets/sketch.png",
    description:
      "We have a large portfolio of verified property meticulously managed by our professional facility managers to give you the best of...",
  },
  {
    title: "Real Estate Investment",
    image: "/assets/home.png",
    description:
      "We give our clients the access to unbeatable and unprecedented profitable real estate properties, investment for a great ROI...",
  },
  {
    title: "Property Savings",
    image: "/assets/lock.png",
    description:
      "To provide property for people of all class, we've ensure to create a savings platform where everyone can save at their...",
  },
];

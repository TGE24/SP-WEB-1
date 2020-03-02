import { Layout, Row, Col, Card } from "antd";
import { Services, SectionTwo } from "./styled";
import "./index.css";

const { Content } = Layout;

export default () => (
  <SectionTwo>
    <Content
      style={{
        padding: "82px 50px 0 50px",
        background: "whitesmoke"
      }}
    >
      <Services>
        <h3>Services We Offer</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row>
          {services.map((item, index) => (
            <Col xs={12} sm={18} md={12} lg={6} xl={6} key={index}>
              <div className="card">
                <div className="ellipse">
                  <img src={item.image} alt="home-icon" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionTwo>
);

const services = [
  {
    title: "Find a Home",
    image: "/assets/home.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    title: "Secure a Property",
    image: "/assets/lock.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    title: "Land Development",
    image: "/assets/sketch.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    title: "Find a Home",
    image: "/assets/home.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  }
];

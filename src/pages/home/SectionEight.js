import { Layout, Row, Col } from "antd";
import { Services, Rep, SectionThree } from "./styled";
import "./index.css";

const { Content } = Layout;

export default () => (
  <SectionThree>
    <Content
      style={{
        padding: "60px 50px",
        background: "whitesmoke"
      }}
    >
      <Services>
        <h3>Our Representatives</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row gutter={[24, 24]}>
          {reps.map((item, index) => (
            <Col xs={24} sm={18} md={12} lg={8} xl={8} key={index}>
              <Rep>
                <img src={item.image} alt="human" />
                <div className="description">
                  <h5 style={{ color: "#FEC486" }}>{item.name}</h5>
                  <hr />
                  <h5>{item.role}</h5>
                  <h6>{item.company}</h6>
                  <h6>{item.phone}</h6>
                  <h6 style={{ color: "#FEC486" }}>{item.email}</h6>
                </div>
              </Rep>
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionThree>
);

const reps = [
  {
    image: "/assets/rep1.png",
    name: "Mark Jason",
    role: "Manager",
    company: "SpreadPro Calabar ",
    phone: "+234 789096373",
    email: "admin@Sp.com"
  },
  {
    image: "/assets/rep1.png",
    name: "Mark Jason",
    role: "Manager",
    company: "SpreadPro Calabar ",
    phone: "+234 789096373",
    email: "admin@Sp.com"
  },
  {
    image: "/assets/rep1.png",
    name: "Mark Jason",
    role: "Manager",
    company: "SpreadPro Calabar ",
    phone: "+234 789096373",
    email: "admin@Sp.com"
  }
];

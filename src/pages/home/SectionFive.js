import { Layout, Button, Row, Col, Card, Tag } from "antd";
import { Services, SectionFive } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import Zoom from "react-reveal/Zoom";

const { Content } = Layout;
const { Meta } = Card;

export default () => (
  <SectionFive>
    <Content
      style={{
        padding: "82px 50px 50px 50px"
      }}
    >
      <Services>
        <h3>Featured Real Estates</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>
        <Row>
          {realEstate.map((item, index) => (
            <Col xs={24} sm={18} md={12} lg={8} xl={8} key={index}>
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
                          bottom: "24px"
                        }}
                      >
                        <Tag
                          color="#313131"
                          style={{
                            position: "relative",
                            width: "66px"
                          }}
                        >
                          Featured
                        </Tag>
                        <Tag
                          color="#F9A602"
                          style={{
                            position: "relative",
                            width: "60.07px"
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
                      padding: "0 20px"
                    }}
                  >
                    {item.features.map((item2, index) => (
                      <div key={index}>
                        <img src={item2} alt="features" height="25" />
                        <h6>Bedrooms</h6>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="button"
                    icon={<SearchOutlined />}
                  >
                    Search
                  </Button>
                </Card>
              </Zoom>
            </Col>
          ))}
        </Row>
      </Services>
    </Content>
  </SectionFive>
);

const realEstate = [
  {
    image: "/assets/rl1.png",
    title: "Bungalow",
    type: "Buy",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"]
  },
  {
    image: "/assets/rl2.png",
    title: "duplex",
    type: "Rent",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"]
  },
  {
    image: "/assets/rl3.png",
    title: "One Room",
    type: "Buy",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"]
  }
];

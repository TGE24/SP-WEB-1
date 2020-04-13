import { Layout, Button, Row, Col, Card, Tag } from "antd";
import { Services, SectionThree } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import Zoom from "react-reveal/Zoom";

const { Content } = Layout;
const { Meta } = Card;

export default () => (
  <SectionThree>
    <Content
      style={{
        padding: "82px 50px 50px 50px"
      }}
    >
      <Services>
        <h3>Latest Properties</h3>
        <h5>First reserved, first served</h5>
        <Row gutter={[6, 12]}>
          {realEstates.map((item, index) => (
            <Col
              xs={24}
              sm={18}
              md={12}
              lg={6}
              xl={6}
              key={index}
              className="column-6"
            >
              <Zoom bottom>
                <Card
                  hoverable
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
                      padding: "0 13px"
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
  </SectionThree>
);

const realEstates = [
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
  },
  {
    image: "/assets/rl1.png",
    title: "Mansion",
    type: "Rent",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"]
  }
];

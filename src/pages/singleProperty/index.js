import "./index.css";
import Layout from "../../components/Layout";
import { Row, Col, Button, Divider, List } from "antd";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/assets/single-prop.png",
    thumbnail: "/assets/single-prop.png"
  },
  {
    original: "/assets/single-prop.png",
    thumbnail: "/assets/single-prop.png"
  },
  {
    original: "/assets/single-prop.png",
    thumbnail: "/assets/single-prop.png"
  }
];

export default () => (
  <Layout title="Properties">
    <div className="prop-header">
      <h1>A Place to call home</h1>
      <p>Lorem Ipsum dolor kjhh iauisd odyowqh baiugd kouybi hoh</p>
    </div>

    <div className="container">
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <div>
            <div className="prop-heading">
              <span style={{ fontSize: "30px" }}>Corola Estate</span>
              <span>
                <Button
                  style={{ background: "#F9A602", margin: "10px" }}
                >
                  For Rent
                </Button>
                <Button
                  style={{ background: "#515C6F", margin: "10px" }}
                >
                  Mortgage
                </Button>
                <Button
                  style={{ background: "#515C6F", margin: "10px" }}
                >
                  For Sale
                </Button>
              </span>
            </div>
            <div className="features">
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <img
                  src="/assets/f1.png"
                  alt="feature"
                  width="min-content"
                />
                <p>Bedroom</p>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <img
                  src="/assets/f2.png"
                  alt="feature"
                  width="min-content"
                />
                <p>Rooms</p>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <img
                  src="/assets/f3.png"
                  alt="feature"
                  width="min-content"
                />
                <p>Square Ft</p>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <img
                  src="/assets/f1.png"
                  alt="feature"
                  width="min-content"
                />
                <p>Bathrooms</p>
              </span>
            </div>
            <ImageGallery
              showPlayButton={false}
              autoPlay={true}
              items={images}
            />
            <Button className="purchase-btn">Purchase</Button>
          </div>
          <h2>PROPERTY OVERVIEW</h2>
          <hr />
          <div
            style={{
              width: "840px",
              height: "437px",
              background: "#F5F4F4",
              padding: "29.68px"
            }}
          >
            <List
              grid={{ gutter: 8, column: 2 }}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item
                  style={{
                    fontSize: "19px",
                    display: "flex",
                    borderBottom: "0.957303px dashed #C1C1C1",
                    margin: "11px",
                    padding: "0"
                  }}
                >
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                </List.Item>
              )}
            />
          </div>
          <div style={{ marginTop: "91.15px" }}>
            <h2>PROPERTY OVERVIEW</h2>
            <hr />
            <h4>
              Lorem ipsum dolor sit amet, elit. Dictum consectetur
              adipiscing elit. Dictum turpis tincidunt bibendum Lorem
              ipsum dolor sit amet, elit. Dictum consectetur
              adipiscing elit. Dictum turpis tincidunt bibendum Lorem
              ipsum dolor sit amet, elit. Dictum consectetur
              adipiscing elit. Dictum turpis tincidunt bibendum Lorem
              ipsum dolor sit amet, elit. Dictum consectetur
              adipiscing elit. Dictum turpis tincidunt bibendum Lorem
              ipsum dolor sit
            </h4>
          </div>
          <div style={{margintop: "80px"}}>
                    <h2>VIDEO</h2>
                    <hr />
                    <video width="840" height="482">

                    </video>
                  </div>
        </Col>
        <Col span={6}>
          <div
            style={{
              width: "314px",
              height: "548px",
              background: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div style={{ textAlign: "center", margin: "18px" }}>
              <div
                style={{
                  background: `url("/assets/contact.png") no-repeat`,
                  width: "150.58px",
                  height: "150.58px",
                  borderRadius: "100%",
                  backgroundSize: "cover"
                }}
              ></div>
              <div>
                <h3>Rick Ross</h3>
                <h4>classicui4@gmail.com</h4>
                <h4>+234 08182739942</h4>
              </div>
              <Divider orientation="horizontal" />
              <div
                style={{
                  background: `url("/assets/contact1.png") no-repeat`,
                  width: "150.58px",
                  height: "150.58px",
                  borderRadius: "100%",
                  backgroundSize: "cover"
                }}
              ></div>
              <div>
                <h3>Rick Ross</h3>
                <h4>classicui4@gmail.com</h4>
                <h4>+234 08182739942</h4>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
);

const data = [
  {
    title: "Price",
    description: "₦460"
  },
  {
    title: "Reference",
    description: "1789"
  },
  {
    title: "Year built",
    description: "1999"
  },
  {
    title: "Contact Agent",
    description: "₦460"
  },
  {
    title: "Status",
    description: "Available"
  },
  {
    title: "Type",
    description: "House"
  },
  {
    title: "Home Area",
    description: "130 SqrFt"
  },
  {
    title: "Dimension",
    description: "20 x 30 FT"
  },
  {
    title: "Material",
    description: "Brick"
  },
  {
    title: "Location",
    description: "Calabar"
  },
  {
    title: "Bed",
    description: "2"
  },
  {
    title: "Room",
    description: "2"
  },
  {
    title: "Garadges",
    description: "2"
  },
  {
    title: "Bathroom",
    description: "2"
  }
];

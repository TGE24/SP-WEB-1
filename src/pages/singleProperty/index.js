import React, { useState } from "react";
import "./index.css";
import Layout from "../../components/Layout";
import {
  Form,
  Button,
  Row,
  Col,
  Divider,
  List,
  Checkbox,
  Card,
  Tag,
  Input,
  Modal
} from "antd";
import ImageGallery from "react-image-gallery";
import Map from "../../components/Map";

const { Meta } = Card;

const mapStyles = {
  width: "833px",
  height: "529px"
};

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title="INSPECT PROPERTY NOW"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            style={{
              background: "rgb(249, 166, 2)",
              border: "none",
              color: "white"
            }}
          >
            Online Inspection
          </Button>,
          <Button
            key="submit"
            style={{
              background: "rgb(249, 166, 2)",
              border: "none",
              color: "white"
            }}
          >
            Online Inspection
          </Button>
        ]}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
          nibh laoreet aliquam penatibus enim dolor scelerisque. Sed
          libero malesuada arcu leo, auctor. Nulla ut sit auctor
          lacus. Cursus tincidunt ornare mattis eget egestas tincidunt
          nullam diam. malesuada arcu leo, auctor. Nulla ut sit auctor
          lacus. Cursus tincidunt ornare mattis eget egestas tincidunt
          nullam diam.
        </p>
      </Modal>
      <Layout title="Properties">
        <div className="prop-header">
          <h1>A Place to call home</h1>
          <p>
            Lorem Ipsum dolor kjhh iauisd odyowqh baiugd kouybi hoh
          </p>
        </div>

        <div className="container">
          <Row gutter={[16, 16]} className="cont-row">
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <div>
                <div className="prop-heading">
                  <span style={{ fontSize: "30px" }}>
                    Corola Estate
                  </span>
                  <span>
                    <Button
                      style={{
                        background: "#F9A602",
                        margin: "10px"
                      }}
                    >
                      For Rent
                    </Button>
                    <Button
                      style={{
                        background: "#515C6F",
                        margin: "10px"
                      }}
                    >
                      Mortgage
                    </Button>
                    <Button
                      style={{
                        background: "#515C6F",
                        margin: "10px"
                      }}
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
                <Button
                  className="purchase-btn"
                  onClick={() => setVisible(!visible)}
                >
                  Purchase
                </Button>
              </div>
              <h2>PROPERTY OVERVIEW</h2>
              <hr />
              <div
                style={{
                  width: "840px",
                  background: "#F5F4F4",
                  padding: "29.68px"
                }}
                className="prop-details"
              >
                <List
                  grid={{ gutter: 8, column: 2 }}
                  bordered
                  dataSource={data}
                  renderItem={item => (
                    <List.Item
                      style={{
                        fontSize: "17px",
                        display: "flex",
                        borderBottom: "0.957303px dashed #C1C1C1",
                        margin: "11px",
                        padding: "0"
                      }}
                      className="prop-item"
                    >
                      <span>{item.title}</span>
                      <span>{item.description}</span>
                    </List.Item>
                  )}
                />
              </div>
              <div
                style={{ marginTop: "91.15px" }}
                className="overview-text"
              >
                <h2>PROPERTY OVERVIEW</h2>
                <hr />
                <h4>
                  Lorem ipsum dolor sit amet, elit. Dictum consectetur
                  adipiscing elit. Dictum turpis tincidunt bibendum
                  Lorem ipsum dolor sit amet, elit. Dictum consectetur
                  adipiscing elit. Dictum turpis tincidunt bibendum
                  Lorem ipsum dolor sit amet, elit. Dictum consectetur
                  adipiscing elit. Dictum turpis tincidunt bibendum
                  Lorem ipsum dolor sit amet, elit. Dictum consectetur
                  adipiscing elit. Dictum turpis tincidunt bibendum
                  Lorem ipsum dolor sit
                </h4>
              </div>
              <div
                style={{ marginTop: "80px" }}
                className="prop-video-cont"
              >
                <h2>VIDEO</h2>
                <hr />
                <video
                  width="840"
                  height="482"
                  className="prop-video"
                ></video>
              </div>
              <div
                style={{ marginTop: "80px" }}
                className="prop-amenities"
              >
                <h2>PROPERTY AMENITIES</h2>
                <hr />
                <div
                  style={{
                    width: "840px"
                  }}
                  className="amenities-details"
                >
                  <List
                    grid={{ gutter: 8, column: 2 }}
                    dataSource={data2}
                    renderItem={item => (
                      <List.Item
                        style={{
                          fontSize: "15px",
                          display: "flex",
                          borderBottom: "0.957303px dashed #C1C1C1",
                          margin: "11px",
                          padding: "0"
                        }}
                        className="amenities-list"
                      >
                        <span>
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                              margin: "0 14px"
                            }}
                            src={item.icon}
                            alt="icon"
                            className="amenities-img"
                          />
                          {item.title}
                        </span>
                        <span>
                          <Checkbox
                            defaultChecked={item.checked}
                            disabled
                          ></Checkbox>
                        </span>
                      </List.Item>
                    )}
                  />
                </div>
              </div>
              <div style={{ marginTop: "80px" }} className="location">
                <h2>LOCATION</h2>
                <hr />
                <div style={mapStyles} className="map-cont">
                  <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={
                      <div style={{ height: `100%` }} />
                    }
                    containerElement={
                      <div style={{ height: `100%` }} />
                    }
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
              </div>
              <div
                style={{ marginTop: "80px" }}
                className="similar-prop"
              >
                <h2>SIMILAR PROPERTIES</h2>
                <hr />
                <Row>
                  {realEstate.map((item, index) => (
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={8}
                      xl={8}
                      key={index}
                    >
                      <Card
                        hoverable
                        style={{ width: 253.86 }}
                        className="similar-card"
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
                              <img
                                src={item2}
                                alt="features"
                                height="25"
                              />
                              <h6>Bedrooms</h6>
                            </div>
                          ))}
                        </div>
                        <Button
                          className="button"
                          style={{
                            background: "rgb(249, 166, 2)",
                            color: "white",
                            fontSize: "9px"
                          }}
                        >
                          BROWSE
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div
                style={{
                  width: "314px",
                  height: "548px",
                  background: "whitesmoke",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                className="avatar-cont"
              >
                <div style={{ textAlign: "center", margin: "18px" }}>
                  {contactDetails.map((item, index) => (
                    <React.Fragment key={index}>
                      <div
                        style={{
                          background: `url(${item.image}) no-repeat`,
                          width: "150.58px",
                          height: "150.58px",
                          borderRadius: "100%",
                          backgroundSize: "cover"
                        }}
                      ></div>
                      <div>
                        <h3>{item.name}</h3>
                        <h4>{item.email}</h4>
                        <h4>{item.phone}</h4>
                      </div>
                      <Divider orientation="horizontal" />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: "53px", textAlign: "center" }}>
                <h3>PROPERTIES</h3>
                <div>
                  <div
                    style={{ display: "flex" }}
                    className="smallProperty"
                  >
                    <span>
                      <img src="/assets/small.png" alt="small" />
                    </span>
                    <span
                      style={{ textAlign: "justify", margin: "20px" }}
                    >
                      <p>Caveman Home</p>
                      <p
                        style={{ color: "#797979", fontSize: "10px" }}
                      >
                        Calabar/CRS
                      </p>
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "10px",
                      marginTop: "10px",
                      lineHeight: "2"
                    }}
                  >
                    <span className="propFeat">
                      <img src="/assets/f1.png" alt="feature1" />
                      30 sqft
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f2.png" alt="feature1" />5
                      Bedrooms
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f3.png" alt="feature1" />6
                      Bathrooms
                    </span>
                    <span
                      className="propFeat"
                      style={{ marginTop: "20px" }}
                    >
                      <img src="/assets/f4.png" alt="feature1" />7
                      Garage
                    </span>
                  </div>
                  <hr />
                </div>
                <div>
                  <div
                    style={{ display: "flex" }}
                    className="smallProperty"
                  >
                    <span>
                      <img src="/assets/small.png" alt="small" />
                    </span>
                    <span
                      style={{ textAlign: "justify", margin: "20px" }}
                    >
                      <p>Caveman Home</p>
                      <p
                        style={{ color: "#797979", fontSize: "10px" }}
                      >
                        Calabar/CRS
                      </p>
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "10px",
                      marginTop: "10px",
                      lineHeight: "2"
                    }}
                  >
                    <span className="propFeat">
                      <img src="/assets/f1.png" alt="feature1" />
                      30 sqft
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f2.png" alt="feature1" />5
                      Bedrooms
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f3.png" alt="feature1" />6
                      Bathrooms
                    </span>
                    <span
                      className="propFeat"
                      style={{ marginTop: "20px" }}
                    >
                      <img src="/assets/f4.png" alt="feature1" />7
                      Garage
                    </span>
                  </div>
                  <hr />
                </div>
                <div>
                  <div
                    style={{ display: "flex" }}
                    className="smallProperty"
                  >
                    <span>
                      <img src="/assets/small.png" alt="small" />
                    </span>
                    <span
                      style={{ textAlign: "justify", margin: "20px" }}
                    >
                      <p>Caveman Home</p>
                      <p
                        style={{ color: "#797979", fontSize: "10px" }}
                      >
                        Calabar/CRS
                      </p>
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "10px",
                      marginTop: "10px",
                      lineHeight: "15px"
                    }}
                  >
                    <span className="propFeat">
                      <img src="/assets/f1.png" alt="feature1" />
                      30 sqft
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f2.png" alt="feature1" />5
                      Bedrooms
                    </span>
                    <span className="propFeat">
                      <img src="/assets/f3.png" alt="feature1" />6
                      Bathrooms
                    </span>
                    <span
                      className="propFeat"
                      style={{ marginTop: "20px" }}
                    >
                      <img src="/assets/f4.png" alt="feature1" />7
                      Garage
                    </span>
                  </div>
                  <hr />
                </div>
              </div>
              <div style={{ marginTop: "53px", textAlign: "center" }}>
                <h3>PAYMENT</h3>
                <div>
                  <div
                    style={{
                      width: "312px",
                      background: "#F5F4F4",
                      display: "flex",
                      textAlign: "left",
                      marginTop: "10px"
                    }}
                  >
                    <span style={{ width: "254px" }}>
                      <p style={{ margin: "0", padding: "15px" }}>
                        {" "}
                        Save for property
                      </p>
                    </span>
                    <span
                      style={{
                        borderLeft: "1px solid #C4C4C4",
                        padding: "10px"
                      }}
                    >
                      <img
                        src="/assets/icons/save.png"
                        alt="iconic"
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      width: "312px",
                      background: "#F5F4F4",
                      display: "flex",
                      textAlign: "left",
                      marginTop: "10px"
                    }}
                  >
                    <span style={{ width: "254px" }}>
                      <p style={{ margin: "0", padding: "15px" }}>
                        {" "}
                        Down Payment
                      </p>
                    </span>
                    <span
                      style={{
                        borderLeft: "1px solid #C4C4C4",
                        padding: "10px"
                      }}
                    >
                      <img
                        src="/assets/icons/save1.png"
                        alt="iconic"
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      width: "312px",
                      background: "#F5F4F4",
                      display: "flex",
                      textAlign: "left",
                      marginTop: "10px"
                    }}
                  >
                    <span style={{ width: "254px" }}>
                      <p style={{ margin: "0", padding: "15px" }}>
                        {" "}
                        Outright Payment
                      </p>
                    </span>
                    <span
                      style={{
                        borderLeft: "1px solid #C4C4C4",
                        padding: "10px"
                      }}
                    >
                      <img
                        src="/assets/icons/save1.png"
                        alt="iconic"
                      />
                    </span>
                  </div>
                  <div
                    style={{
                      width: "312px",
                      background: "#F5F4F4",
                      display: "flex",
                      textAlign: "left",
                      marginTop: "10px"
                    }}
                  >
                    <span style={{ width: "254px" }}>
                      <p style={{ margin: "0", padding: "15px" }}>
                        {" "}
                        E - wallet
                      </p>
                    </span>
                    <span
                      style={{
                        borderLeft: "1px solid #C4C4C4",
                        padding: "10px"
                      }}
                    >
                      <img
                        src="/assets/icons/save1.png"
                        alt="iconic"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "53px", textAlign: "center" }}>
                <h3>CONTACT</h3>
                <Form>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Enter your name"
                          }
                        ]}
                      >
                        <Input type="text" placeholder="Name" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Enter your email"
                          }
                        ]}
                      >
                        <Input type="text" placeholder="Email" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        name="message"
                        rules={[
                          {
                            required: true,
                            message: "Enter Your Message"
                          }
                        ]}
                      >
                        <Input.TextArea
                          rows={4}
                          placeholder="Message"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button className="message-btn">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default App;

const images = [
  {
    original: "/assets/single-prop.png",
    thumbnail: "/assets/single-prop.png"
  },
  {
    original: "/assets/single-prop1.png",
    thumbnail: "/assets/single-prop1.png"
  },
  {
    original: "/assets/single-prop2.png",
    thumbnail: "/assets/single-prop2.png"
  }
];

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

const data2 = [
  {
    icon: "/assets/icons/conditioner.png",
    title: "Air Conditioner",
    checked: true
  },
  {
    icon: "/assets/icons/household.png",
    title: "Washing Machine",
    checked: false
  },
  {
    icon: "/assets/icons/pool.png",
    title: "Swimming Pool",
    checked: true
  },
  {
    icon: "/assets/icons/pool.png",
    title: "Balcony",
    checked: true
  },
  {
    icon: "/assets/icons/household.png",
    title: "Cable TV",
    checked: true
  },
  {
    icon: "/assets/icons/conditioner.png",
    title: "Solar",
    checked: true
  },
  {
    icon: "/assets/icons/conditioner.png",
    title: "Air Conditioner",
    checked: true
  },
  {
    icon: "/assets/icons/household.png",
    title: "Washing Machine",
    checked: false
  },
  {
    icon: "/assets/icons/pool.png",
    title: "Swimming Pool",
    checked: true
  },
  {
    icon: "/assets/icons/conditioner.png",
    title: "Balcony",
    checked: true
  },
  {
    icon: "/assets/icons/household.png",
    title: "Cable TV",
    checked: true
  },
  {
    icon: "/assets/icons/pool.png",
    title: "Solar",
    checked: true
  }
];

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

const contactDetails = [
  {
    name: "Rick Ross",
    image: "/assets/contact1.png",
    email: "classicui4@gmail.com",
    phone: "+234 08182739942"
  },
  {
    name: "Rick Ross",
    image: "/assets/contact.png",
    email: "classicui4@gmail.com",
    phone: "+234 08182739942"
  }
];
import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Divider,
  List,
  Checkbox,
  Card,
  Tag,
  Modal,
} from "antd";
import ImageGallery from "react-image-gallery";
import Map from "components/Map";
import { usePaystackPayment } from "react-paystack";
import Ammenities from "constants/ammenities";
import OnlineInspection from "components/modals/onlineInspection";
import SaveForProperty from "components/modals/saveforproperty";
import OutrightPayment from "components/modals/outrightPayment";
import { useSelector, useDispatch } from "react-redux";
import RealEstateMockData from "data/realEstate.json";
import AgentsMockData from "data/agents.json";
import ContactForm from "components/forms/contact";
import Loader from "./Loader";
import {
  getHouse,
  getLand,
  verifyPayment,
  payment,
} from "store/properties/actions";
import { showModal } from "store/modal/action";
import { useRouter } from "next/router";
import { store } from "store";
import { toastSuccess, toastWarning } from "helpers/Toast";

const { Meta } = Card;

const mapStyles = {
  width: "833px",
  height: "529px",
};

const PropertyDetail = () => {
  const [visible, setVisible] = useState(false);
  const [saveForProperty, setSaveForProperty] = useState(false);
  const [outrightPaymentModal, setOutrightPayment] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState(false);
  const [onlineInspectionModal, setOnlineInspection] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState();
  const [images, setImages] = useState([]);
  const property = useSelector((state) => state.properties.data);
  const loading = useSelector((state) => state.properties.loading);
  const user = useSelector((state) => state?.user?.data?.user);
  const {
    auth: { data },
  } = store.getState();
  const [paymentMethod, setPaymentMethod] = useState(false);

  const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email: user?.email,
    amount: 100000,
    publicKey: process.env.PAYSTACK_KEY,
    metadata: {
      property_slug: propertyDetails?.slug,
    },
  };

  const outrightConfig = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email: user?.email,
    amount: propertyDetails?.price * 100,
    publicKey: process.env.PAYSTACK_KEY,
    metadata: {
      property_slug: propertyDetails?.slug,
    },
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const { pid } = router.query;

  useEffect(() => {
    if (pid?.startsWith("house")) {
      dispatch(getHouse(pid));
    } else if (pid?.startsWith("land")) {
      dispatch(getLand(pid));
    }
  }, [dispatch, pid]);

  const onlineInspectionWallet = () => {
    dispatch(
      payment({
        wallet: true,
        payment_plan: "online-inspection",
        property_slug: config.metadata.property_slug,
        amount: 1000,
        property_type: pid?.startsWith("house") ? "house" : "land",
        email: config.email,
        reference: config.reference,
      })
    ).then((res) => {
      if (res?.value?.status === 200) {
        setPaymentMethod(!paymentMethod);
        setOnlineInspection(!onlineInspectionModal);
        pid?.startsWith("house")
          ? dispatch(getHouse(pid))
          : dispatch(getLand(pid));
        toastSuccess("Online inspection payment from wallet successful");
      }
    });
  };

  const onOutrightWalletPayment = () => {
    dispatch(
      payment({
        wallet: true,
        payment_plan: "outright",
        property_slug: outrightConfig.metadata.property_slug,
        amount: parseInt(propertyDetails?.price),
        property_type: pid?.startsWith("house") ? "house" : "land",
        email: outrightConfig.email,
        reference: outrightConfig.reference,
      })
    ).then((res) => {
      if (res?.value?.status === 200) {
        setPaymentMethod(!paymentMethod);
        setOnlineInspection(!outrightPaymentModal);
        setPaymentPlan(!paymentPlan);
        router.push("/properties");
        toastSuccess("Property payment from wallet successful");
      }
    });
  };

  const onlineInspectionPaystack = (res) => {
    dispatch(verifyPayment(res.reference)).then((response) => {
      if (response?.value?.data?.data?.status === "success") {
        res.property_slug = config.metadata.property_slug;
        res.amount = 1000;
        res.email = config.email;
        res.payment_plan = "online-inspection";
        res.property_type = pid?.startsWith("house") ? "house" : "land";
        dispatch(payment({ ...res })).then((res) => {
          if (res?.value?.status === 200) {
            setPaymentMethod(!paymentMethod);
            setOnlineInspection(!onlineInspectionModal);
            pid?.startsWith("house")
              ? dispatch(getHouse(pid))
              : dispatch(getLand(pid));
            toastSuccess("Online inspection payment successful");
          }
        });
      }
    });
  };

  const onOutrightPaymentPaystack = (res) => {
    dispatch(verifyPayment(res.reference)).then((response) => {
      if (response?.value?.data?.data?.status === "success") {
        res.property_slug = outrightConfig.metadata.property_slug;
        res.amount = parseInt(propertyDetails?.price);
        res.email = outrightConfig.email;
        res.payment_plan = "outright";
        res.property_type = pid?.startsWith("house") ? "house" : "land";
        res.wallet = false;
        dispatch(payment({ ...res })).then((res) => {
          if (res?.value?.status == 200) {
            router.push("/properties");
          }
        });
        toastSuccess("Property payment successful");
      }
    });
  };

  const initializePayment = usePaystackPayment(config);
  const initializeOutrightPayment = usePaystackPayment(outrightConfig);

  useEffect(() => {
    pid?.startsWith("house")
      ? setPropertyDetails(property?.house)
      : setPropertyDetails(property?.data);
  }, [property]);

  useEffect(() => {
    let newArray = [];
    if (propertyDetails?.take_two_images) {
      propertyDetails?.take_two_images?.map((item) => {
        const newObj = {
          original: item.img_url,
          thumbnail: item.img_url,
        };
        newArray.push(newObj);
        return newObj;
      });
    } else if (pid?.startsWith("house")) {
      propertyDetails?.house_image?.map((item) => {
        const newObj = {
          original: item.img_url,
          thumbnail: item.img_url,
        };
        newArray.push(newObj);
        return newObj;
      });
    } else {
      propertyDetails?.land_image?.map((item) => {
        const newObj = {
          original: item.img_url,
          thumbnail: item.img_url,
        };
        newArray.push(newObj);
        return newObj;
      });
    }
    setImages(newArray);
  }, [propertyDetails]);

  const ammenitiesData = [
    {
      title: "Price",
      description: propertyDetails?.price,
    },
    {
      title: "Reference",
      description: propertyDetails?.reference,
    },
    {
      title: "Year built",
      description: propertyDetails?.year_built,
    },
    {
      title: "Contact Agent",
      description: propertyDetails?.agent_contact,
    },
    {
      title: "Status",
      description: propertyDetails?.status,
    },
    {
      title: "Type",
      description: propertyDetails?.house_subcategory?.subcategory_name,
    },
    {
      title: "Home Area",
      description: propertyDetails?.home_area + "SqrFt",
    },
    {
      title: "Dimension",
      description: propertyDetails?.dimension + "FT",
    },
    {
      title: "Material",
      description: propertyDetails?.material,
    },
    {
      title: "Location",
      description: propertyDetails?.location,
    },
    {
      title: "Bed",
      description: "2",
    },
    {
      title: "Room",
      description: propertyDetails?.rooms,
    },
    {
      title: "Garadges",
      description: "2",
    },
    {
      title: "Bathroom",
      description: propertyDetails?.bathrooms,
    },
  ];

  const landAmmenities = [
    {
      title: "Price",
      description: propertyDetails?.price,
    },
    {
      title: "Reference",
      description: propertyDetails?.reference,
    },
    {
      title: "Contact Agent",
      description: propertyDetails?.agent_contact,
    },
    {
      title: "Dimension",
      description: propertyDetails?.dimension + "FT",
    },
    {
      title: "Location",
      description: propertyDetails?.location,
    },
  ];

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Modal
            title="ONLINE INSPECTION"
            visible={onlineInspectionModal}
            onCancel={() => setOnlineInspection(!onlineInspectionModal)}
            onOk={() => {
              user?.verified
                ? setPaymentMethod(!paymentMethod)
                : toastWarning(
                    "Please You need to verify your account before purchasing property"
                  );
            }}
            okText="Submit"
          >
            <OnlineInspection email={user?.email} />
          </Modal>
          <Modal
            title="PAYMENT METHOD"
            visible={paymentMethod}
            onCancel={() => setPaymentMethod(!paymentMethod)}
            footer={null}
          >
            <>
              <div
                style={{
                  width: "312px",
                  background: "#F5F4F4",
                  display: "flex",
                  textAlign: "left",
                  margin: "15px auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  !outrightPaymentModal
                    ? initializePayment(onlineInspectionPaystack)
                    : initializeOutrightPayment(onOutrightPaymentPaystack);
                }}
              >
                <span style={{ width: "254px" }}>
                  <p style={{ margin: "0", padding: "15px" }}>
                    {" "}
                    Pay Via Paystack
                  </p>
                </span>
                <span
                  style={{
                    borderLeft: "1px solid #C4C4C4",
                    padding: "10px",
                  }}
                >
                  <img src="/assets/icons/save.png" alt="iconic" />
                </span>
              </div>
              <div
                style={{
                  width: "312px",
                  background: "#F5F4F4",
                  display: "flex",
                  textAlign: "left",
                  marginTop: "10px",
                  margin: "auto",
                  cursor: "pointer",
                }}
                onClick={() => {
                  outrightPaymentModal
                    ? onOutrightWalletPayment()
                    : onlineInspectionWallet();
                }}
              >
                <span style={{ width: "254px" }}>
                  <p style={{ margin: "0", padding: "15px" }}> E-Wallet</p>
                </span>
                <span
                  style={{
                    borderLeft: "1px solid #C4C4C4",
                    padding: "10px",
                  }}
                >
                  <img src="/assets/icons/save1.png" alt="iconic" />
                </span>
              </div>
            </>
          </Modal>
          <Modal
            title="OUTRIGHT PAYMENT"
            visible={outrightPaymentModal}
            onCancel={() => setOutrightPayment(!outrightPaymentModal)}
            onOk={() => {
              user?.verified
                ? setPaymentMethod(!paymentMethod)
                : toastWarning(
                    "Please You need to verify your account before purchasing property"
                  );
            }}
            okText="Submit"
          >
            <OutrightPayment
              email={user?.email}
              price={propertyDetails?.price}
            />
          </Modal>
          <Modal
            title="SAVE FOR PROPERTY"
            visible={saveForProperty}
            onCancel={() => setSaveForProperty(!saveForProperty)}
            // onOk={() => initializePayment(onSuccess)}
            okText="Submit"
          >
            <SaveForProperty email={user?.email} />
          </Modal>
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
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
                onClick={() => {
                  data?.token
                    ? setOnlineInspection(!onlineInspectionModal)
                    : dispatch(showModal());
                  setVisible(!visible);
                }}
              >
                Online Inspection
              </Button>,
              <Button
                key="submit"
                style={{
                  background: "rgb(249, 166, 2)",
                  border: "none",
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                Physical Inspection
              </Button>,
            ]}
          >
            <p>
              Take a tour to our sites today...From our virtual tour to the
              physical tour. We ensure we show you everything you need to know
              about our property.
            </p>
          </Modal>
          <Modal
            title="SELECT PAYMENT PLANS"
            visible={paymentPlan}
            onCancel={() => setPaymentPlan(!paymentPlan)}
            footer={[
              <Button
                key="back"
                style={{
                  background: "rgb(249, 166, 2)",
                  border: "none",
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
                onClick={() => {
                  data?.token
                    ? setSaveForProperty(!saveForProperty)
                    : dispatch(showModal());
                }}
                disabled={
                  !propertyDetails?.payment_type === "save for property"
                }
              >
                Instalmental Payment
              </Button>,
              <Button
                key="submit"
                style={{
                  background: "rgb(249, 166, 2)",
                  border: "none",
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
                onClick={() => {
                  data?.token
                    ? setOutrightPayment(!outrightPaymentModal)
                    : dispatch(showModal());
                }}
              >
                Outright Payment
              </Button>,
            ]}
          >
            <p>Please select one of the two options</p>
          </Modal>
          <div className="prop-header">
            <h1>A Place to call home</h1>
            <p>
              {propertyDetails?.name + " " + (propertyDetails?.location || "")}
            </p>
          </div>

          <div className="container">
            <Row gutter={[24, 24]} className="cont-row">
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <div>
                  <div className="prop-heading">
                    <span style={{ fontSize: "30px" }}>
                      {propertyDetails?.name}
                    </span>
                    <span>
                      {propertyDetails?.purchased ? (
                        <Button
                          style={{
                            background: "#d65550",

                            margin: "10px",
                          }}
                          disabled={true}
                        >
                          Purchased
                        </Button>
                      ) : (
                        pid?.startsWith("house") && (
                          <>
                            <Button
                              style={{
                                background:
                                  propertyDetails?.transaction === "rent"
                                    ? "#F9A602"
                                    : "#515C6F",
                                margin: "10px",
                              }}
                              disabled={propertyDetails?.transaction !== "rent"}
                            >
                              For Rent
                            </Button>
                            <Button
                              style={{
                                background:
                                  propertyDetails?.transaction === "mortgage"
                                    ? "#F9A602"
                                    : "#515C6F",
                                margin: "10px",
                              }}
                              disabled={
                                propertyDetails?.transaction !== "mortgage"
                              }
                            >
                              Mortgage
                            </Button>
                          </>
                        )
                      )}
                      {propertyDetails?.purchased ? (
                        ""
                      ) : (
                        <Button
                          style={{
                            background:
                              propertyDetails?.transaction === "sale" ||
                              pid?.startsWith("land")
                                ? "#F9A602"
                                : "#515C6F",
                            margin: "10px",
                          }}
                          disabled={
                            propertyDetails?.transaction !== "sale" &&
                            !pid?.startsWith("land")
                          }
                        >
                          For Sale
                        </Button>
                      )}
                    </span>
                  </div>
                  <ImageGallery
                    showPlayButton={false}
                    autoPlay={true}
                    items={images}
                  />
                  <Button
                    className="purchase-btn"
                    disabled={propertyDetails?.purchased}
                    onClick={() => setPaymentPlan(!paymentPlan)}
                  >
                    {propertyDetails?.purchased ? "Purchased" : "Purchase"}
                  </Button>
                </div>
                {pid?.startsWith("house") && (
                  <>
                    <h2>PROPERTY DETAILS</h2>
                    <hr />
                    <div
                      style={{
                        width: "840px",
                        background: "#F5F4F4",
                        padding: "29.68px",
                      }}
                      className="prop-details"
                    >
                      <List
                        grid={{ gutter: 8, column: 2 }}
                        bordered
                        dataSource={ammenitiesData}
                        renderItem={(item) => (
                          <List.Item
                            style={{
                              fontSize: "17px",
                              display: "flex",
                              borderBottom: "0.957303px dashed #C1C1C1",
                              margin: "11px",
                              padding: "0",
                            }}
                            className="prop-item"
                          >
                            <span>{item.title}</span>
                            <span>{item.description}</span>
                          </List.Item>
                        )}
                      />
                    </div>
                  </>
                )}
                {pid?.startsWith("land") && (
                  <>
                    <h2>PROPERTY DETAILS</h2>
                    <hr />
                    <div
                      style={{
                        width: "840px",
                        background: "#F5F4F4",
                        padding: "29.68px",
                      }}
                      className="prop-details"
                    >
                      <List
                        grid={{ gutter: 8, column: 2 }}
                        bordered
                        dataSource={landAmmenities}
                        renderItem={(item) => (
                          <List.Item
                            style={{
                              fontSize: "17px",
                              display: "flex",
                              borderBottom: "0.957303px dashed #C1C1C1",
                              margin: "11px",
                              padding: "0",
                            }}
                            className="prop-item"
                          >
                            <span>{item.title}</span>
                            <span>{item.description}</span>
                          </List.Item>
                        )}
                      />
                    </div>
                  </>
                )}
                {pid?.startsWith("house") && (
                  <>
                    <div
                      style={{ marginTop: "91.15px" }}
                      className="overview-text"
                    >
                      <h2>PROPERTY OVERVIEW</h2>
                      <hr />
                      <h4>{propertyDetails?.overview}</h4>
                    </div>
                    <div
                      style={{ marginTop: "80px" }}
                      className="prop-amenities"
                    >
                      <h2>PROPERTY AMENITIES</h2>
                      <hr />
                      <div
                        style={{
                          width: "840px",
                        }}
                        className="amenities-details"
                      >
                        <List
                          grid={{ gutter: 8, column: 2 }}
                          dataSource={propertyDetails?.amenities}
                          renderItem={(item) => (
                            <List.Item
                              style={{
                                fontSize: "15px",
                                display: "flex",
                                borderBottom: "0.957303px dashed #C1C1C1",
                                margin: "11px",
                                padding: "0",
                              }}
                              className="amenities-list"
                            >
                              <span>
                                <img
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    margin: "0 14px",
                                  }}
                                  src={Ammenities[item]}
                                  alt="icon"
                                  className="amenities-img"
                                />
                                {item}
                              </span>
                              <span>
                                <Checkbox defaultChecked disabled></Checkbox>
                              </span>
                            </List.Item>
                          )}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div style={{ marginTop: "80px" }} className="prop-video-cont">
                  <div className="prop-video-cont">
                    <h2>VIDEO</h2>
                    <hr />
                    <video
                      width="840"
                      height="482"
                      controls
                      className="prop-video"
                      style={{ cursor: "pointer" }}
                      poster={
                        !propertyDetails?.video_url
                          ? "/assets/video-placeholder.jpg"
                          : ""
                      }
                      onClick={() =>
                        propertyDetails?.purchased
                          ? ""
                          : !propertyDetails?.video_url
                          ? setVisible(!visible)
                          : ""
                      }
                    >
                      {propertyDetails?.video_url && (
                        <source
                          src={propertyDetails?.video_url}
                          type="video/mp4"
                        />
                      )}
                    </video>
                  </div>

                  <div style={{ marginTop: "80px" }} className="location">
                    <h2>LOCATION</h2>
                    <hr />
                    <div style={mapStyles} className="map-cont">
                      <Map
                        isMarkerShown
                        googleMapURL={process.env.GOOGLE_API_URL}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        latitude={propertyDetails?.lat}
                        longitude={propertyDetails?.lng}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "80px" }} className="similar-prop">
                  <h2>SIMILAR PROPERTIES</h2>
                  <hr />
                  <Row>
                    {RealEstateMockData.map((item, index) => (
                      <Col xs={24} sm={24} md={12} lg={8} xl={8} key={index}>
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
                                  bottom: "24px",
                                }}
                              >
                                <Tag
                                  color="#313131"
                                  style={{
                                    position: "relative",
                                    width: "66px",
                                  }}
                                >
                                  Featured
                                </Tag>
                                <Tag
                                  color="#F9A602"
                                  style={{
                                    position: "relative",
                                    width: "60.07px",
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
                              padding: "0 20px",
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
                            style={{
                              background: "rgb(249, 166, 2)",
                              color: "white",
                              fontSize: "9px",
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
                    alignItems: "center",
                  }}
                  className="avatar-cont"
                >
                  <div style={{ textAlign: "center", margin: "18px" }}>
                    {AgentsMockData.map((item, index) => (
                      <React.Fragment key={index}>
                        <div
                          style={{
                            background: `url(${item.image}) no-repeat`,
                            width: "150.58px",
                            height: "150.58px",
                            borderRadius: "100%",
                            backgroundSize: "cover",
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
                    <div style={{ display: "flex" }} className="smallProperty">
                      <span>
                        <img src="/assets/small.png" alt="small" />
                      </span>
                      <span
                        style={{
                          textAlign: "justify",
                          margin: "20px",
                        }}
                      >
                        <p>Caveman Home</p>
                        <p
                          style={{
                            color: "#797979",
                            fontSize: "10px",
                          }}
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
                        lineHeight: "2",
                      }}
                    >
                      <span className="propFeat">
                        <img src="/assets/f1.png" alt="feature1" />
                        30 sqft
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f2.png" alt="feature1" />5 Bedrooms
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f3.png" alt="feature1" />6 Bathrooms
                      </span>
                      <span className="propFeat" style={{ marginTop: "20px" }}>
                        <img src="/assets/f4.png" alt="feature1" />7 Garage
                      </span>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div style={{ display: "flex" }} className="smallProperty">
                      <span>
                        <img src="/assets/small.png" alt="small" />
                      </span>
                      <span
                        style={{
                          textAlign: "justify",
                          margin: "20px",
                        }}
                      >
                        <p>Caveman Home</p>
                        <p
                          style={{
                            color: "#797979",
                            fontSize: "10px",
                          }}
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
                        lineHeight: "2",
                      }}
                    >
                      <span className="propFeat">
                        <img src="/assets/f1.png" alt="feature1" />
                        30 sqft
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f2.png" alt="feature1" />5 Bedrooms
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f3.png" alt="feature1" />6 Bathrooms
                      </span>
                      <span className="propFeat" style={{ marginTop: "20px" }}>
                        <img src="/assets/f4.png" alt="feature1" />7 Garage
                      </span>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div style={{ display: "flex" }} className="smallProperty">
                      <span>
                        <img src="/assets/small.png" alt="small" />
                      </span>
                      <span
                        style={{
                          textAlign: "justify",
                          margin: "20px",
                        }}
                      >
                        <p>Caveman Home</p>
                        <p
                          style={{
                            color: "#797979",
                            fontSize: "10px",
                          }}
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
                        lineHeight: "15px",
                      }}
                    >
                      <span className="propFeat">
                        <img src="/assets/f1.png" alt="feature1" />
                        30 sqft
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f2.png" alt="feature1" />5 Bedrooms
                      </span>
                      <span className="propFeat">
                        <img src="/assets/f3.png" alt="feature1" />6 Bathrooms
                      </span>
                      <span className="propFeat" style={{ marginTop: "20px" }}>
                        <img src="/assets/f4.png" alt="feature1" />7 Garage
                      </span>
                    </div>
                    <hr />
                  </div>
                </div>
                <div style={{ marginTop: "53px", textAlign: "center" }}>
                  <h3>CONTACT</h3>
                  <ContactForm />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default PropertyDetail;

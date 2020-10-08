import React, { useState, useEffect } from "react";
import { Button, Row, Col, List, Card, Tag, Modal, Form, Radio, DatePicker } from "antd";
import ImageGallery from "react-image-gallery";
import Map from "components/Map";
import { usePaystackPayment } from "react-paystack";
import Ammenities from "constants/ammenities";
import OnlineInspection from "components/modals/onlineInspection";
import OutrightPayment from "components/modals/outrightPayment";
import { useSelector, useDispatch } from "react-redux";
import RealEstateMockData from "data/realEstate.json";
import Loader from "./Loader";
import AmmenitiesComponent from "./components/ammenities"
import {
  getHouse,
  getLand,
  verifyPayment,
  payment,
  subscription
} from "store/properties/actions";
import { showModal } from "store/modal/action";
import { useRouter } from "next/router";
import { store } from "store";
import { toastSuccess, toastWarning } from "helpers/Toast";
import { config, outrightConfig, installmentConfig } from "helpers/paystackConfig";

const { Meta } = Card;

const mapStyles = {
  width: "833px",
  height: "529px",
};

const PropertyDetail = () => {
  const [visible, setVisible] = useState(false);
  const [plansArray, setPlansArray] = React.useState([]);
  const [planCode, setPlanCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [saveForProperty, setSaveForProperty] = useState(false);
  const [outrightPaymentModal, setOutrightPayment] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState(false);
  const [onlineInspectionModal, setOnlineInspection] = useState(
    false
  );
  const [propertyDetails, setPropertyDetails] = useState();
  const [images, setImages] = useState([]);
  const property = useSelector((state) => state.properties.data);
  const loading = useSelector((state) => state.properties.loading);
  const user = useSelector((state) => state?.user?.data?.user);
  const {
    auth: { data },
  } = store.getState();
  const [paymentMethod, setPaymentMethod] = useState(false);

  //Online Inspection Config
  config.email = user?.email
  config.metadata = { property_slug: propertyDetails?.slug }

  //Outright Payment Config
  outrightConfig.email = user?.email
  outrightConfig.amount = propertyDetails?.price * 100
  outrightConfig.metadata = { property_slug: propertyDetails?.slug }

  //Installment Payment Config
  installmentConfig.email = user?.email
  installmentConfig.amount = propertyDetails?.commitment_charge * 100
  installmentConfig.metadata = {
    property_id: propertyDetails?.id,
    property_slug: propertyDetails?.slug,
    plan_code: planCode,
    start_date: startDate
  }


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
        toastSuccess(
          "Online inspection payment from wallet successful"
        );
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
        res.property_type = pid?.startsWith("house")
          ? "house"
          : "land";
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

  const installmentPaymentPaystack = (res) => [
    dispatch(verifyPayment(res.reference)).then((response) => {
      if (response?.value?.data?.data?.status === "success") {
        const data = {
          authorization_code: response?.value?.data?.data?.authorization?.authorization_code,
          card_type: response?.value?.data?.data?.authorization?.card_type,
          last4: response?.value?.data?.data?.authorization?.last4,
          exp_year: response?.value?.data?.data?.authorization?.exp_year,
          bin: response?.value?.data?.data?.authorization?.bin,
          bank: response?.value?.data?.data?.authorization?.bank,
          channel: response?.value?.data?.data?.authorization?.channel,
          signature: response?.value?.data?.data?.authorization?.signature,
          reusable: response?.value?.data?.data?.authorization?.reusable,
          country_code: response?.value?.data?.data?.authorization?.country_code,
          plan_code: response?.value?.data?.data?.metadata?.plan_code,
          property_type: pid?.startsWith("house") ? "house" : "land",
          property_id: response?.value?.data?.data?.metadata?.property_id,
          start_date: response?.value?.data?.data?.metadata?.start_date,
          users_id: user?.id
        }
        dispatch(subscription(data)).then((res) => {
          if (res?.value?.data?.success) {
            router.push("/properties");
            toastSuccess("Property purchase successful");
          }
        })
      }
    })
  ]

  const onOutrightPaymentPaystack = (res) => {
    dispatch(verifyPayment(res.reference)).then((response) => {
      if (response?.value?.data?.data?.status === "success") {
        res.property_slug = outrightConfig.metadata.property_slug;
        res.amount = parseInt(propertyDetails?.price);
        res.email = outrightConfig.email;
        res.payment_plan = "outright";
        res.property_type = pid?.startsWith("house")
          ? "house"
          : "land";
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
  const initializeOutrightPayment = usePaystackPayment(
    outrightConfig
  );
  const initializeInstallmentPayment = usePaystackPayment(installmentConfig)

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

  useEffect(() => {
    let newPlansArray = []
    propertyDetails?.plans?.map((item) => {
      const Obj = {
        label: item.interval + " Month(s)",
        value: item.plan_code,
        amount: item.amount
      }
      newPlansArray.push(Obj)
      return Obj
    })
    setPlansArray(newPlansArray)
  }, [propertyDetails?.plans])


  const landAmmenities = [
    {
      title: "Price",
      description: propertyDetails?.price,
    },
    {
      title: "Contact",
      description: propertyDetails?.contact,
    },
    {
      title: "Dimension",
      description: propertyDetails?.dimension,
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
              onCancel={() =>
                setOnlineInspection(!onlineInspectionModal)
              }
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
                    outrightPaymentModal
                      ? initializeOutrightPayment(
                        onOutrightPaymentPaystack
                      ) : initializePayment(onlineInspectionPaystack);
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
                    <p style={{ margin: "0", padding: "15px" }}>
                      {" "}
                    E-Wallet
                  </p>
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
              title="INSTALLMENT PAYMENT"
              visible={saveForProperty}
              onCancel={() => setSaveForProperty(!saveForProperty)}
              onOk={() => {
                user?.verified
                  ? initializeInstallmentPayment(installmentPaymentPaystack)
                  : toastWarning(
                    "Please You need to verify your account before purchasing property"
                  );
              }}
              okText="Submit"
            >
              <Form layout="vertical">
                <Form.Item name="plan_code" label="Plans">
                  <Radio.Group
                    options={plansArray}
                    onChange={(e) => {
                      setPlanCode(e.target.value)
                    }}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Form.Item>
                <Form.Item name="start_date" label="Start Date">
                  <DatePicker onChange={(_, string) => {
                    setStartDate(string)
                  }} />
                </Form.Item>
                <Form.Item >
                </Form.Item>
              </Form>
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
                Take a tour to our sites today...From our virtual tour
                to the physical tour. We ensure we show you everything
                you need to know about our property.
            </p>
            </Modal>
            <Modal
              title="SELECT PAYMENT PLANS"
              visible={paymentPlan}
              onCancel={() => setPaymentPlan(!paymentPlan)}
              footer={[
                <>
                  <Button
                    key="installment"
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
                      !propertyDetails?.installment
                    }
                  >
                    Instalmental Payment
              </Button>
                  <Button
                    key="outright"
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
              </Button>
                </>
              ]}
            >
              <p>Please select one of the two options</p>
            </Modal>
            <div className="prop-header">
              <h1>A Place to call home</h1>
              <p>
                {propertyDetails?.name +
                  " " +
                  (propertyDetails?.location || "")}
              </p>
              <Button
                className="purchase-btn"
                disabled={propertyDetails?.purchased}
                onClick={() => setPaymentPlan(!paymentPlan)}
              >
                {propertyDetails?.purchased ? "Purchased" : "Buy Now"}
              </Button>
            </div>

            <div className="container">
              <Row gutter={[24, 24]} className="cont-row">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div>
                    <div className="prop-heading">
                      <span>
                        {!propertyDetails?.location ? (
                          <Button
                            className="purchase-btn"
                            disabled={propertyDetails?.purchased}
                            onClick={() => setVisible(!visible)}
                          >
                            Inspect Property
                          </Button>
                        ) : (
                            ""
                          )}
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
                                      propertyDetails?.transaction ===
                                        "rent"
                                        ? "#F9A602"
                                        : "#515C6F",
                                    margin: "10px",
                                  }}
                                  disabled={
                                    propertyDetails?.transaction !==
                                    "rent"
                                  }
                                >
                                  For Rent
                            </Button>
                                <Button
                                  style={{
                                    background:
                                      propertyDetails?.transaction ===
                                        "mortgage"
                                        ? "#F9A602"
                                        : "#515C6F",
                                    margin: "10px",
                                  }}
                                  disabled={
                                    propertyDetails?.transaction !==
                                    "mortgage"
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
                                  propertyDetails?.transaction ===
                                    "sale" || pid?.startsWith("land")
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
                  </div>
                  {pid?.startsWith("house") && (
                    <>
                      <div style={{ width: "840px", margin: "auto" }}>
                        <h1>PROPERTY DETAILS</h1>
                      </div>
                      <div
                        style={{
                          width: "840px",
                          background: "#F5F4F4",
                          padding: "29.68px",
                          margin: "auto",
                        }}
                        className="prop-details"
                      >
                        <AmmenitiesComponent price={propertyDetails?.price} reference={propertyDetails?.reference} yearBuilt={propertyDetails?.year_built} contact={propertyDetails?.contact} status={propertyDetails?.status} subcategory={propertyDetails?.house_subcategory?.subcategory_name} homeArea={propertyDetails?.home_area} dimension={propertyDetails?.dimension} material={propertyDetails?.material} location={propertyDetails?.location} rooms={propertyDetails?.rooms} bathroom s={propertyDetails?.bathrooms} />
                      </div>
                    </>
                  )}
                  {pid?.startsWith("land") && (
                    <>
                      <div style={{ width: "840px", margin: "auto" }}>
                        <h1>PROPERTY DETAILS</h1>
                      </div>
                      <div
                        style={{
                          width: "840px",
                          background: "#F5F4F4",
                          padding: "29.68px",
                          margin: "auto",
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
                                borderBottom:
                                  "0.957303px dashed #C1C1C1",
                                margin: "11px",
                                padding: "0",
                              }}
                              className="prop-item"
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontWeight: "bolder",
                                }}
                              >
                                {item.title}
                              </span>
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
                        style={{
                          margin: "91.15px auto ",
                          width: "840px",
                        }}
                        className="overview-text"
                      >
                        <h2>PROPERTY OVERVIEW</h2>
                        <hr />
                        <h4 style={{ textAlign: "justify" }}>
                          {propertyDetails?.overview}
                        </h4>
                      </div>
                      <div
                        style={{
                          margin: "91.15px auto ",
                          width: "840px",
                        }}
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
                                  borderBottom:
                                    "0.957303px dashed #C1C1C1",
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
                                </span>
                                <span>{item}</span>
                              </List.Item>
                            )}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div
                    style={{ margin: "91.15px auto ", width: "840px" }}
                    className="prop-video-cont"
                  >
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

                    <div
                      style={{
                        margin: "91.15px auto ",
                        width: "840px",
                      }}
                      className="location"
                    >
                      <h2>LOCATION</h2>
                      <hr />
                      <div style={mapStyles} className="map-cont">
                        <Map
                          isMarkerShown
                          googleMapURL={process.env.GOOGLE_API_URL}
                          loadingElement={
                            <div style={{ height: `100%` }} />
                          }
                          containerElement={
                            <div style={{ height: `100%` }} />
                          }
                          mapElement={
                            <div style={{ height: `100%` }} />
                          }
                          latitude={propertyDetails?.lat}
                          longitude={propertyDetails?.lng}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ margin: "91.15px auto ", width: "840px" }}
                    className="similar-prop"
                  >
                    <h2>SIMILAR PROPERTIES</h2>
                    <hr />
                    <Row>
                      {RealEstateMockData.map((item, index) => (
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
                                  <img
                                    src={item2}
                                    alt="features"
                                    height="25"
                                  />
                                  <h6>Bedrooms</h6>
                                </div>
                              ))}
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
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

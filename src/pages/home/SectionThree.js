import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Tag, Empty } from "antd";
import { Services, SectionThree } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { recentProperties } from "store/properties/actions";
import Zoom from "react-reveal/Zoom";
import Loader from "../property/Loader";
import Link from "next/link";

const { Content } = Layout;
const { Meta } = Card;

export default () => {
  const [data, setData] = useState([]);
  const { loading } = useSelector((state) => state.properties);
  const properties = useSelector(
    (state) => state?.properties?.recentProperties?.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recentProperties());
  }, [dispatch]);

  useEffect(() => {
    if (properties) {
      setData(properties.houses.concat(properties.lands));
    }
  }, [properties]);

  return (
    <SectionThree>
      <Content
        style={{
          padding: "82px 50px 50px 50px",
        }}
      >
        <Services>
          <h3>Latest Properties</h3>
          <h5>First reserved, first served</h5>
          <Row
            gutter={[6, 12]}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {loading ? (
              <Loader />
            ) : data.length === 0 ? (
              <Empty description={<span>NO PROPERTIES YET</span>} />
            ) : (
              data?.map((item, index) => (
                <Link
                  href="/properties/[pid]"
                  as={`/properties/${item?.slug}`}
                  key={index}
                  passHref
                >
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
                            <img
                              alt="example"
                              src={item?.take_two_images[0]?.img_url}
                            />
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
                                  width: "112.07px",
                                }}
                              >
                                {item?.house_subcategory
                                  ? item?.house_subcategory
                                      ?.subcategory_name
                                  : item?.land_category
                                      ?.land_category}
                              </Tag>
                            </div>
                          </>
                        }
                      >
                        <Meta
                          title={item?.name}
                          description={item?.state + " " + item?.lga}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "14px",
                            padding: "0 13px",
                          }}
                        >
                          {/* {item.features.map((item2, index) => (
                        <div key={index}>
                          <img
                            src={item2}
                            alt="features"
                            height="25"
                          />
                          <h6>Bedrooms</h6>
                        </div>
                      ))} */}
                        </div>
                        {/* <Button className="button" icon={<SearchOutlined />}>
                    Search
                  </Button> */}
                      </Card>
                    </Zoom>
                  </Col>
                </Link>
              ))
            )}
          </Row>
        </Services>
      </Content>
    </SectionThree>
  );
};

const realEstates = [
  {
    image: "/assets/rl1.png",
    title: "Bungalow",
    type: "Buy",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"],
  },
  {
    image: "/assets/rl2.png",
    title: "duplex",
    type: "Rent",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"],
  },
  {
    image: "/assets/rl3.png",
    title: "One Room",
    type: "Buy",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"],
  },
  {
    image: "/assets/rl1.png",
    title: "Mansion",
    type: "Rent",
    location: "No 2 Marian Road Opposite De Choice",
    features: ["/assets/f1.png", "/assets/f2.png", "/assets/f3.png"],
  },
];

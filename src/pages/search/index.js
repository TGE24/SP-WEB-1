import React from "react";
import Search from "components/search";
import Navbar from "components/navbar";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "store/properties/actions";
import { Empty, Row, Col, Card, Tag } from "antd";
import Loader from "pages/property/Loader";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url("../assets/property.png");
  background-size: cover;
  .over-lay {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40vh;
    background: rgba(0, 0, 0, 0.43);
    justify-content: center;
    align-items: center;
    h1 {
      color: #ffffff;
      font-weight: bold;
      font-size: 60px;
    }
    h2 {
      color: #ffffff;
      font-size: 20px;
    }
    @media screen and (max-width: 767px) {
      h1 {
        font-size: 36px;
        margin: 0;
        text-align: center;
      }
      h2 {
        font-size: 17px;
        margin: 0;
      }
      height: 60vh;
    }
    @media screen and (max-width: 1255px) {
      height: 60vh;
    }
  }
`;
const { Meta } = Card;

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.properties.actionLoading)
  const filterData = useSelector((state) => state.properties.filterData)
  const router = useRouter();

  React.useEffect(() => {
    dispatch(filter(router.query))
  }, [dispatch, router])

  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            position: "relative",
            top: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search values={router.query} />
        </div>
      </Container>
      <Row
        gutter={[32, 32]}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        {loading ? (
          <Loader />
        ) : filterData?.data?.length === 0 ? (
          <Empty description={<span>NO PROPERTIES YET</span>} />
        ) : (
              filterData?.data?.map((item, index) => (
                <Link
                  href="/property/[pid]"
                  as={`/property/${item?.slug}`}
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
                    {/* <Zoom bottom> */}
                    <Card
                      hoverable
                      cover={
                        <>
                          <img
                            alt="example"
                          // src={item?.take_two_images[0]?.img_url}
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
                    {/* </Zoom> */}
                  </Col>
                </Link>
              ))
            )}
      </Row>
    </>
  );
};

export default App;

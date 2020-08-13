import React, { useState, useEffect } from "react";
import { Row, Col, Select, Pagination } from "antd";
import { PropSectionTwo } from "./styled";
import Link from "next/link";
import Ammenities from "../../constants/ammenities";
import { useSelector, useDispatch } from "react-redux";
import { getHouses, getLands } from "store/properties/actions";
import Loader from "./Loader";

const { Option } = Select;

export default () => {
  const [housesArr, setHouses] = useState([]);
  const [pagination, setPagination] = useState();
  const [option, setOption] = useState("Houses");
  const [page, setPage] = useState(1);
  const { loading } = useSelector((state) => state.properties);
  const properties = useSelector((state) => state.properties.data);
  const dispatch = useDispatch();

  function handleChange(value) {
    switch (value) {
      case "houses":
        setOption("Houses");
        break;
      case "lands":
        setOption("Lands");
        break;

      default:
        setOption("Houses");
        break;
    }
  }

  useEffect(() => {
    if (option === "Houses") {
      dispatch(getHouses(page));
    } else {
      dispatch(getLands(page));
    }
  }, [dispatch, page, option]);

  useEffect(() => {
    if (option === "Houses") {
      setHouses(properties?.houses?.data);
      setPagination(properties?.houses?.total);
    } else {
      setHouses(properties?.data?.data);
      setPagination(properties?.data?.total);
    }
  }, [properties, option]);

  return (
    <PropSectionTwo>
      <div className="row-head">
        <h1>{option}</h1>
        <div className="sort-by">
          <Select
            defaultValue="Sorted By"
            style={{ width: 160 }}
            onChange={handleChange}
            className="select-sort"
          >
            <Option value="houses">Houses</Option>
            <Option value="lands">Lands</Option>
          </Select>
          <img
            src="../assets/icons/sort-by.png"
            alt=""
            className="sort-icon"
            height={17}
          />
        </div>
      </div>
      <Row gutter={[32, 32]}>
        {loading ? (
          <Loader />
        ) : (
          housesArr?.map((item, index) => (
            <Link
              href="/properties/[pid]"
              as={`/properties/${item?.slug}`}
              key={index}
              passHref
            >
              <Col
                xs={12}
                sm={12}
                md={10}
                lg={6}
                xl={6}
                key={index}
                style={{ cursor: "pointer", padding: 0 }}
              >
                <div className="prop-cards">
                  <div className="image">
                    <img
                      src={item?.take_two_images[0]?.img_url}
                      alt=""
                    />
                    <div className="apartment">
                      <h4>
                        {option === "Houses"
                          ? item?.house_subcategory?.subcategory_name
                          : item?.land_category?.land_category}
                      </h4>
                    </div>
                  </div>

                  <div className="prop-details">
                    <div className="inner-container">
                      <h2>{item?.name}</h2>
                      {/* <h4>
                        <img
                          src="../assets/icons/location.png"
                          alt=""
                        />
                        {item?.location}
                      </h4> */}
                    </div>
                  </div>
                  {option === "Houses" && (
                    <div className="prop-icons">
                      {option === "Houses" &&
                        item?.amenities
                          ?.slice(1, 4)
                          .map((item, index) => (
                            <div className="icon" key={index}>
                              {Ammenities[item] ? (
                                <img
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    margin: "0 14px",
                                  }}
                                  src={Ammenities[item]}
                                  alt=""
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          ))}
                    </div>
                  )}
                </div>
              </Col>
            </Link>
          ))
        )}
      </Row>
      <Pagination
        total={pagination}
        current={page}
        onChange={(page) => {
          setPage(page);
        }}
        hideOnSinglePage={true}
        style={{ textAlign: "center" }}
      />
    </PropSectionTwo>
  );
};

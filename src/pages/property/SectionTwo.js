import React, { useState, useEffect } from "react";
import { Row, Col, Select } from "antd";
import { PropSectionTwo } from "./styled";
import Link from "next/link";
import Ammenities from "../../constants/ammenities";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default ({ HousesProp }) => {
  const [houses, setHouses] = useState([]);
  const { loading } = useSelector((state) => state.properties);
  useEffect(() => {
    setHouses(HousesProp);
  }, [HousesProp]);

  return (
    <PropSectionTwo>
      <div className="row-head">
        <h1>Houses for rent</h1>
        <div className="sort-by">
          <img
            src="../assets/icons/sort-by.png"
            alt=""
            className="sort-icon"
          />
          <Select
            defaultValue="Sorted By"
            style={{ width: 160 }}
            onChange={handleChange}
            className="select-sort"
          >
            <Option value="jack">General Listing</Option>
            <Option value="lucy">Spread Exclusive </Option>
            <Option value="lucy">Mortgage </Option>
            <Option value="lucy">For Sale </Option>
            <Option value="lucy">For Rent </Option>
          </Select>
        </div>
      </div>
      <Row gutter={[18, 26]}>
        {loading && <Loader />}
        {houses?.map((item, index) => (
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
                      {item?.house_subcategory?.subcategory_name}
                    </h4>
                  </div>
                  <div className="feature">
                    <h4>Featured</h4>
                  </div>
                </div>

                <div className="prop-details">
                  <div className="inner-container">
                    <h2>{item?.name}</h2>
                    <h4>
                      <img
                        src="../assets/icons/location.png"
                        alt=""
                      />
                      {item?.location}
                    </h4>
                  </div>
                </div>
                <div className="prop-icons">
                  {item?.amenities.slice(0, 5).map((item, index) => (
                    <div className="icon" key={index}>
                      <h4>
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
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Link>
        ))}
      </Row>
    </PropSectionTwo>
  );
};

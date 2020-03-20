import React from "react";
import { Row, Col, Select } from "antd";
import { PropSectionTwo } from "./styled";
import Link from "next/link";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <PropSectionTwo>
      <div className="row-head">
        <h1>Houses for rent</h1>
        <div className="sort-by">
          {/* <img src="../assets/icons/sort-by.png" alt="" /> */}
          <Select
            defaultValue="Sorted By"
            style={{ width: 160 }}
            onChange={handleChange}
          >
            <Option value="jack">General Listing</Option>
            <Option value="lucy">Spread Exclusive </Option>
            <Option value="lucy">Mortgage </Option>
            <Option value="lucy">For Sale </Option>
            <Option value="lucy">For Rent </Option>
          </Select>
        </div>
      </div>
      <Row gutter={[12, 12]}>
        {Properties.map((item, index) => (
          <Link
            href="/properties/[pid]"
            as={`/properties/${index}`}
            key={index}
          >
            <Col
              xs={24}
              sm={2}
              md={10}
              lg={6}
              xl={6}
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div className="prop-cards">
                <div className="image">
                  <img src={item.image} alt="" />
                  <div className="apartment">
                    <h4>{item.propertyType}</h4>
                  </div>
                  <div className="feature">
                    <h4>Featured</h4>
                  </div>
                </div>

                <div className="prop-details">
                  <div className="inner-container">
                    <h2>{item.propertyName}</h2>
                    <h4>
                      <img src="../assets/icons/location.png" alt="" />
                      {item.propertyAddress}
                    </h4>
                  </div>
                </div>
                <div className="prop-icons">
                  {item.features.map((item, index) => (
                    <div className="icon">
                      <h4>
                        <img src={item} alt="" /> 6
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

const Properties = [
  {
    image: "../assets/prop1.png",
    propertyType: "Apartment",
    proprtyName: "Ancient Bungalo Ancient",
    propertyAddress: "45 ntoe asi layout , Calabar",
    features: [
      "../assets/icons/house.png",
      "../assets/icons/bathroom.png",
      "../assets/icons/bed.png"
    ]
  },
  {
    image: "../assets/prop2.png",
    propertyType: "Apartment",
    proprtyName: "Ancient Bungalo Ancient",
    propertyAddress: "45 ntoe asi layout , Calabar",
    features: [
      "../assets/icons/house.png",
      "../assets/icons/bathroom.png",
      "../assets/icons/bed.png"
    ]
  },
  {
    image: "../assets/prop3.png",
    propertyType: "Apartment",
    proprtyName: "Ancient Bungalo Ancient",
    propertyAddress: "45 ntoe asi layout , Calabar",
    features: [
      "../assets/icons/house.png",
      "../assets/icons/bathroom.png",
      "../assets/icons/bed.png"
    ]
  },
  {
    image: "../assets/prop4.png",
    propertyType: "Apartment",
    proprtyName: "Ancient Bungalo Ancient",
    propertyAddress: "45 ntoe asi layout , Calabar",
    features: [
      "../assets/icons/house.png",
      "../assets/icons/bathroom.png",
      "../assets/icons/bed.png"
    ]
  }
];

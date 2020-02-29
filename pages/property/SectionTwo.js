import React from "react";
import { Row, Col, Select } from "antd";
import { PropSectionTwo } from "../../styles/propertyStyled";

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
          <img src="../assets/icons/sort-by.png" alt="" />
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
      <Row>
        <Col xs={24} sm={2} md={10} lg={6} xl={6}>
          <div className="prop-cards">
            <div className="image">
              <img src="../assets/prop1.png" alt="" />
              <div className="apartment">
                <h4>Apartment</h4>
              </div>
              <div className="feature">
                <h4>Featured</h4>
              </div>
            </div>

            <div className="prop-details">
              <div className="inner-container">
                <h2>Ancient Bungalo Ancient </h2>
                <h4>
                  <img src="../assets/icons/location.png" alt="" /> 45 ntoe asi
                  layout , Calabar
                </h4>
              </div>
            </div>
            <div className="prop-icons">
              <div className="icon">
                <h4>
                  <img src="../assets/icons/house.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bathroom.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bed.png" alt="" /> 6
                </h4>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={2} md={10} lg={6} xl={6}>
          <div className="prop-cards">
            <div className="image">
              <img src="../assets/prop2.png" alt="" />
              <div className="apartment">
                <h4>Apartment</h4>
              </div>
              <div className="feature">
                <h4>Featured</h4>
              </div>
            </div>

            <div className="prop-details">
              <div className="inner-container">
                <h2>Ancient Bungalo Ancient </h2>
                <h4>
                  <img src="../assets/icons/location.png" alt="" /> 45 ntoe asi
                  layout , Calabar
                </h4>
              </div>
            </div>
            <div className="prop-icons">
              <div className="icon">
                <h4>
                  <img src="../assets/icons/house.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bathroom.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bed.png" alt="" /> 6
                </h4>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={2} md={10} lg={6} xl={6}>
          <div className="prop-cards">
            <div className="image">
              <img src="../assets/prop3.png" alt="" />
              <div className="apartment">
                <h4>House</h4>
              </div>
              <div className="feature">
                <h4>Featured</h4>
              </div>
            </div>

            <div className="prop-details">
              <div className="inner-container">
                <h2>Ancient Bungalo Ancient </h2>
                <h4>
                  <img src="../assets/icons/location.png" alt="" /> 45 ntoe asi
                  layout , Calabar
                </h4>
              </div>
            </div>
            <div className="prop-icons">
              <div className="icon">
                <h4>
                  <img src="../assets/icons/house.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bathroom.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bed.png" alt="" /> 6
                </h4>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={2} md={10} lg={6} xl={6}>
          <div className="prop-cards">
            <div className="image">
              <img src="../assets/prop4.png" alt="" />
              <div className="apartment">
                <h4>House</h4>
              </div>
              <div className="feature">
                <h4>Featured</h4>
              </div>
            </div>

            <div className="prop-details">
              <div className="inner-container">
                <h2>Ancient Bungalo Ancient </h2>
                <h4>
                  <img src="../assets/icons/location.png" alt="" /> 45 ntoe asi
                  layout , Calabar
                </h4>
              </div>
            </div>
            <div className="prop-icons">
              <div className="icon">
                <h4>
                  <img src="../assets/icons/house.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bathroom.png" alt="" /> 6
                </h4>
              </div>
              <div className="icon">
                <h4>
                  <img src="../assets/icons/bed.png" alt="" /> 6
                </h4>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </PropSectionTwo>
  );
};

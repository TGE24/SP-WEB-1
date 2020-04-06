import React, { useState } from "react";
import { Row, Col, Select } from "antd";
import DashboardLayout from "../../components/Layout/dashboard";
import "./dash.css";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default () => {
  return (
    <DashboardLayout title="Sold Properties">
      <div className="container">
        <div className="row-header">
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

        <Row gutter={[12, 16]}>
          {Properties.map((item, index) => (
            <Col
              xs={12}
              sm={12}
              md={10}
              lg={6}
              xl={8}
              key={index}
              style={{ cursor: "pointer", padding: 0 }}
            >
              <div className="sold-card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <h1>{item.propertyName}</h1>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </DashboardLayout>
  );
};

const Properties = [
  {
    image: "../assets/sold1.png",
    propertyName: "Amaxzon Duplex"
  },
  {
    image: "../assets/sold2.png",
    propertyName: "Open yard "
  },
  {
    image: "../assets/sold3.png",
    propertyName: "Open roof house"
  },
  {
    image: "../assets/sold4.png",
    propertyName: "Amaxzon Duplex"
  }
];

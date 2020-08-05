import React from "react";
import { Select } from "antd";
import DashBoardBody from "styles/dashbord_body";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function SoldProperty() {
  return (
    <>
      <DashBoardBody.Header>
        <h1>Sold Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
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
        <DashBoardBody.Row>
          {Properties.map((item, index) => (
            <DashBoardBody.SoldCard key={index}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <h1>{item.propertyName}</h1>
            </DashBoardBody.SoldCard>
          ))}
        </DashBoardBody.Row>
      </DashBoardBody>
    </>
  );
}
const Properties = [
  {
    image: "/assets/img/sold1.png",
    propertyName: "Amaxzon Duplex",
  },
  {
    image: "/assets/img/sold2.png",
    propertyName: "Open yard ",
  },
  {
    image: "/assets/img/sold3.png",
    propertyName: "Open roof house",
  },
  {
    image: "/assets/img/sold4.png",
    propertyName: "Amaxzon Duplex",
  },
];

import React, { useState } from "react";
import DashboardLayout from "../../components/Layout/dashboard";
import { Select, Descriptions } from "antd";
import "./dash.css";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default () => {
  return (
    <DashboardLayout title="Wallet">
      <div className="container">
        <div className="wallet-banner">
          <div className="background">
            <div className="wallet-header">
              <div className="circle">
                <img src="../assets/icons/wallet-colored.png" alt="" />
              </div>
              <h3>ANN ERIM’S WALLET</h3>
              <h2>Current account balance:</h2>
              <h1>15,000.00</h1>
            </div>
            <div className="wallet-card">
              <img src="../assets/wold.png" alt="" />
              <div className="cards">
                <img src="../assets/MasterCard.png" alt="" />
                <img src="../assets/Visa.png" alt="" />
                <img src="../assets/Verve.png" alt="" />
              </div>
            </div>
          </div>
          <div className="fund-wallet">
            <span>Fund Wallet</span>
          </div>
        </div>
        <div className="wallet-recent-activity">
          <div className="row-header">
            <h1>YOUR RECENT ACTIVITIES</h1>
            <div className="sort-by">
              <img
                src="../assets/icons/sort-by.png"
                alt=""
                className="sort-icon"
              />
              <Select
                defaultValue="Filter"
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
          <div className="card-container">
            {TranactionHistory.map((items, index) => {
              switch (items.type) {
                case "Add":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid green" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "green" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );

                case "purchases":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid #EB5757" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "#EB5757" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );
                  break;
                default:
                  return (
                    <div className="transaction-card" key={index}>
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
          {/* dkdkdk */}
        </div>
      </div>
    </DashboardLayout>
  );
};

const TranactionHistory = [
  {
    type: "Add",
    title: "Added Money",
    amount: 2000,
    date: new Date().toDateString(),
    descriptions: "",
  },
  {
    type: "Transfer",
    amount: 2000,
    title: "Transfer Funds",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
  {
    type: "purchases",
    amount: 2000,
    title: "Land Purchase",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
];

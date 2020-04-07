import React, { useState } from "react";
import { CameraFilled } from "@ant-design/icons";
import { Row, Col, Input, Select } from "antd";
import DashboardLayout from "../../components/Layout/dashboard";
import "./dash.css";
const { Option } = Select;
export default () => {
  return (
    <DashboardLayout title="Account Settings">
      <div className="container">
        <div className="setting-banner">
          <div className="background">
            <div className="">
              <h1>Erim, Anna Ndoma</h1>
              <h2>annmikaerim@gmail.com</h2>
            </div>
          </div>
          <div className="circle">
            <img src="../assets/icons/user.png" alt="" />
            <div className="camera">
              <CameraFilled size={60} />
            </div>
          </div>
        </div>
        <div className="setting-form">
          <form action="#">
            <div className="form-container">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>First Name:</label>
                    <Input placeholder="Enter your name" />
                  </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>Last Name:</label>
                    <Input placeholder="Enter your name" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="form-container">
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="input-control">
                    <label>Email:</label>
                    <Input placeholder="Enter your name" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="form-container">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>Phone Number:</label>
                    <Input.Group compact>
                      <Input style={{ width: "20%" }} defaultValue="+234" />
                      <Input
                        style={{ width: "80%" }}
                        defaultValue="817 4969 237  "
                      />
                    </Input.Group>
                  </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>Phone Number (Alternative):</label>
                    <Input placeholder="Enter your name" />
                  </div>
                </Col>
              </Row>
            </div>
            <button>Save</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

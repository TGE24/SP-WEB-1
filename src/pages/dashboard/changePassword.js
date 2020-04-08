import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import DashboardLayout from "../../components/Layout/dashboard";
import "./dash.css";
export default () => {
  return (
    <DashboardLayout title="Change Password">
      <div className="container">
        <div className="changep-form">
          <form action="#">
            <div className="form-container">
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="input-control">
                    <label>Old Password:</label>
                    <Input.Password placeholder="input password" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="form-container">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>New Password:</label>
                    <Input.Password placeholder="input password" />
                  </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={11}>
                  <div className="input-control">
                    <label>Confirm Password:</label>
                    <Input.Password placeholder="input password" />
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

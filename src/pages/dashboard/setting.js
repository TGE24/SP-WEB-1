import React, { useState } from "react";
import DashboardLayout from "../../components/Layout/dashboard";
import "./dash.css";
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
          <div className="circle"></div>
        </div>
      </div>
    </DashboardLayout>
  );
};

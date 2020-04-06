import React, { useState } from "react";
import CustomLayout from "./index";
import { Layout, Button, Menu, Breadcrumb } from "antd";
import Link from "next/link";
import { LogoutOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;
import "./dashboard.css";

export default ({ children, title = "Dashboard", active = "" }) => {
  const [collapse, setcollapse] = useState(false);
  const [visible, setVisible] = useState(true);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setcollapse(!collapse);
  };
  const showDrawer = () => {
    setVisible(!visible);
  };
  return (
    <CustomLayout title="Dashboard">
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider
              className={
                visible
                  ? "site-layout-background display"
                  : "site-layout-background display-none"
              }
              breakpoint={{
                xs: "480px",
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                xxl: "1600px",
              }}
              width={300}
            >
              <div className="profile">
                <div className="circle"></div>
                <div className="profile-content">
                  <h2>Erim Anna Ndoma</h2>
                  <div className="logout">
                    <LogoutOutlined />
                    <h3>Logout</h3>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <Menu defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item
                  className={
                    title == "Dashboard" ? "ant-menu-item-selected " : ""
                  }
                >
                  <Link href="/dashboard">
                    <div className="">
                      {" "}
                      <img src="../assets/icons/bu-house.png" alt="" />
                      <span> Bought Properties</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  className={
                    title == "Sold Properties" ? "ant-menu-item-selected " : ""
                  }
                >
                  <Link href="/dashboard/sold-pro">
                    <div className="">
                      <img src="../assets/icons/sold-house.png" alt="" />
                      <span> Sold Properties</span>
                    </div>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  className={title == "Wallet" ? "ant-menu-item-selected " : ""}
                >
                  <Link href="/dashboard/wallet">
                    <div className="">
                      <img src="../assets/icons/wallet.png" alt="" />
                      <span>Wallet</span>
                      <span id="wallet"> N4000</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  className={
                    title == "Mortgage" ? "ant-menu-item-selected " : ""
                  }
                >
                  <Link href="/dashboard/mortgage">
                    <div className="">
                      {" "}
                      <img src="../assets/icons/morgage.png" alt="" />
                      <span>Mortgage</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  className={
                    title == "Account Settings" ? "ant-menu-item-selected " : ""
                  }
                >
                  <Link href="/dashboard/account-setting">
                    <div className="">
                      <img src="../assets/icons/setting.png" alt="" />
                      <span>Account Settings</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  className={
                    title == "Change Password" ? "ant-menu-item-selected " : ""
                  }
                >
                  <Link href="/dashboard/change-password">
                    <div className="">
                      <img src="../assets/icons/password.png" alt="" />
                      <span>Change Password</span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  className={
                    title == "Build with SpredSpro"
                      ? "ant-menu-item-selected "
                      : ""
                  }
                >
                  <Link href="build-with-spread">
                    <div className="">
                      {" "}
                      <img src="../assets/icons/morgage.png" alt="" />
                      <span>Build with SpredSpro</span>
                    </div>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
              <div className="content">
                <div className="dash-header">
                  <Button
                    className="barsMenu"
                    type="primary"
                    onClick={showDrawer}
                  >
                    SHow
                  </Button>
                  <h1>{title}</h1>
                </div>
                {children}
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </CustomLayout>
  );
};

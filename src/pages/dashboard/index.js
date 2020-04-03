import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import CustomLayout from "../../components/Layout";
import {
  LogoutOutlined,
  PieChartOutlined,
  DesktopOutlined
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import "./dash.css";
const { SubMenu } = Menu;
export default () => {
  const [collapse, setcollapse] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setcollapse(!collapse);
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
            <Sider className="site-layout-background" width={300}>
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
                <Menu.Item key="1">
                  <PieChartOutlined />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="5">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="6">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="7">
                  <DesktopOutlined />
                  <span>Option 2</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <div className="content">
                <div className="dash-header">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </CustomLayout>
  );
};

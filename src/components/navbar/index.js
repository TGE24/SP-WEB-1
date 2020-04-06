import React, { useState } from "react";
import { Menu, Button, Drawer, Affix, Modal } from "antd";
import RightMenu from "./rightmenu";
import styled from "styled-components";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import SignIn from "../../components/modals/signIn";
import SignUp from "../../components/modals/signUp";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./index.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Wrap = styled.div`
  .ant-affix {
    background: ${({ navColor }) =>
      navColor === true ? "rgba(139, 139, 139, 0.75)" : "none"};
    transition: background 500ms;
  }
`;

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const drawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="CREATE A NEW ACCOUNT"
        width={520}
        onClose={() => setShowDrawer(!showDrawer)}
        visible={showDrawer}
        bodyStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(0,0,0,0.88)",
        }}
        headerStyle={{
          background: "rgb(0,0,0,0.7)",
          borderBottom: "none",
          borderLeft: "10px solid #fcad0a",
        }}
        footerStyle={{
          background: "rgb(0,0,0,0.7)",
          color: "white",
          borderTop: "none",
        }}
        footer={null}
      >
        <SignUp />
      </Drawer>
      <Modal
        title="LOGIN"
        onCancel={() => setShowModal(!showModal)}
        visible={showModal}
        bodyStyle={{
          background: "rgba(0, 0, 0, 0.88)",
          color: "white",
        }}
        footer={null}
      >
        <SignIn setShowDrawer={setShowDrawer} />
      </Modal>
      <Wrap
        navColor={navColor}
        style={{
          position: "absolute",
          width: "-webkit-fill-available",
          zIndex: 1,
        }}
      >
        <Affix
          offsetTop={0}
          onChange={(affixed) => {
            setNavColor(affixed);
          }}
        >
          <nav className="menuBar">
            <div className="logo">
              <Link href="/">
                <img src="/assets/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="menuCon">
              <div className="rightMenu">
                <RightMenu
                  setShowModal={setShowModal}
                  setShowDrawer={setShowDrawer}
                />
              </div>
              <Button
                className="barsMenu"
                type="primary"
                onClick={drawer}
              >
                {React.createElement(
                  drawer ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
              <Drawer
                style={{
                  marginTop: `${visible ? "53px" : 0}`,
                  height: "300px !important",
                }}
                placement="top"
                closable={false}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ textAlign: "center" }}
              >
                <Menu mode="vertical">
                  <Menu.Item key="mail">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail1">
                    <Link href="/properties">
                      <a>Properties</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail2">
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail3">
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail4">
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail5">
                    <Button
                      style={{ background: "#f9a602" }}
                      className="nav-siginIn"
                      icon={<LockOutlined />}
                      onClick={() => setShowModal(!showDrawer)}
                    >
                      Sign In
                    </Button>
                  </Menu.Item>
                </Menu>
              </Drawer>
            </div>
          </nav>
        </Affix>
      </Wrap>
    </>
  );
};

export default Navbar;

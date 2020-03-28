import React, { useState } from "react";
import { Menu, Button, Drawer, Affix } from "antd";
import RightMenu from "./rightmenu";
import styled from "styled-components";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
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

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Wrap
      navColor={navColor}
      style={{
        position: "absolute",
        width: "-webkit-fill-available",
        zIndex: 1
      }}
    >
      <Affix
        offsetTop={0}
        onChange={affixed => {
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
              <RightMenu />
            </div>
            <Button
              className="barsMenu"
              type="primary"
              onClick={showDrawer}
            >
              {React.createElement(
                showDrawer ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
            <Drawer
              style={{
                marginTop: `${visible ? "53px" : 0}`,
                height: "300px !important"
              }}
              placement="top"
              closable={false}
              onClose={onClose}
              visible={visible}
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
                <SubMenu
                  key="mail2"
                  title={
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  }
                >
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
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
                  <a href="">
                    <Button
                      style={{ background: "#f9a602" }}
                      icon={<LockOutlined />}
                    >
                      Sign In
                    </Button>
                  </a>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </nav>
      </Affix>
    </Wrap>
  );
};

export default Navbar;

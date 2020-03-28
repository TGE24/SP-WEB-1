import React, { useState } from "react";
import { Menu, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";

const RightMenu = () => {
  return (
    <Menu mode="horizontal">
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
  );
};

export default RightMenu;

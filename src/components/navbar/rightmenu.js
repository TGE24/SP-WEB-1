import React, { Component } from "react";
import { Menu, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { LockOutlined } from "@ant-design/icons";

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item key="mail1">
          <a href="">Properties</a>
        </Menu.Item>
        <SubMenu key="mail2" title={<a href="">Services</a>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="mail3">
          <a href="">About Us</a>
        </Menu.Item>
        <Menu.Item key="mail4">
          <a href="">Careers</a>
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
  }
}

export default RightMenu;

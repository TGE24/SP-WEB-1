import React, { useState } from "react";
import { Menu, Button, Modal, Drawer } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Auth from "../../../helpers/auth";

const RightMenu = (props) => {
  return (
    <>
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
        {Auth.isLoggedIn() ? (
          <Menu.Item key="mail5">
            <Button
              style={{ background: "#f9a602", marginBottom: "19px" }}
              className="nav-siginIn"
              icon={<LockOutlined />}
              onClick={() => props.setShowModal(true)}
            >
              Sign In
            </Button>
          </Menu.Item>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
};

export default RightMenu;

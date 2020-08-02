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
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../store/modal/action";

const Wrap = styled.div`
  .ant-affix {
    background: #fff;
    transition: background 1000ms;
  }
`;
const Contacts = styled.div`
  padding: 0 0 4px 33px;
  background: black;
  font-size: 12px;
  color: white;
  display: flex;
  .contacts-details {
    .details {
      margin-right: 10px;
      img {
        margin: 0 10px;
      }
    }
  }
  .social-cont {
    position: absolute;
    right: 69px;
    .socials {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    padding: 6px;
    font-size: 8px;
    justify-content: space-between;
    .contacts-details {
      .details {
        margin-right: 0;
        img {
          margin: 0 5px;
          height: 14px;
        }
      }
    }
    .social-cont {
      position: unset;
      .socials {
        margin: 0 6px;
        cursor: pointer;
      }
    }
  }
`;

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDrawer, setShowDrawer] = useState(showsignup);
  const show = useSelector((state) => state.modal.show);
  const showsignup = useSelector((state) => state.modal.signup);
  const [showModal, setShowModal] = useState(show);

  const drawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();

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
          background: "rgb(0,0,0,0.7)",
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
        <SignUp
          setShowDrawer={setShowDrawer}
          showDrawer={showDrawer}
        />
      </Drawer>
      <Modal
        title="LOGIN"
        style={{
          border: "1.77918px solid #FFFFFF",
          borderRadius: "6px",
        }}
        onCancel={() => dispatch(closeModal())}
        visible={show}
        bodyStyle={{
          background: "rgb(0,0,0,0.7)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        footer={null}
        footerStyle={{
          background: "rgb(0,0,0,0.7)",
          display: "none",
        }}
      >
        <SignIn
          setShowDrawer={setShowDrawer}
          showDrawer={showDrawer}
        />
      </Modal>
      <Wrap
        navColor={navColor}
        style={{
          position: "absolute",
          width: "-webkit-fill-available",
          zIndex: 10,
        }}
      >
        <Affix
          offsetTop={0}
          onChange={(affixed) => {
            setNavColor(affixed);
          }}
        >
          <Contacts>
            <div className="contacts-details">
              <span className="details">
                <img src="/assets/icons/mail.png" alt="mail" />
                hello@spreadprolimited.com{" "}
              </span>
              <span className="details">
                <img src="/assets/icons/phone.png" alt="phone" />
                +2348182739942{" "}
              </span>
            </div>
            <div className="social-cont">
              <img
                className="socials"
                src="/assets/icons/fbSmall.png"
                alt="fb"
              />
              <img
                className="socials"
                src="/assets/icons/igSmall.png"
                alt="ig"
              />
              <img
                className="socials"
                src="/assets/icons/in.png"
                alt="in"
              />
              <img
                className="socials"
                src="/assets/icons/twitterSmall.png"
                alt="twitter"
              />
              <img
                className="socials"
                src="/assets/icons/snapchat.png"
                alt="snap"
              />
            </div>
          </Contacts>
          <nav className="menuBar">
            <div className="logo">
              <Link href="/">
                <img src="/assets/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="menuCon">
              <div className="rightMenu">
                <RightMenu setShowDrawer={setShowDrawer} />
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
                  marginTop: `${visible ? "79px" : 0}`,
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
                      onClick={() => setShowModal(!showModal)}
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

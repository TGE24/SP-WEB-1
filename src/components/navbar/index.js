import React, { useState } from "react";
import { Menu, Button, Drawer, Affix, Modal } from "antd";
import RightMenu from "./rightmenu";
import styled from "styled-components";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import SignIn from "components/modals/signIn";
import SignUp from "components/modals/signUp";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, showModal } from "store/modal/action";
import { requestVerification } from "store/auth/action";
import { store } from "store";
import Router from "next/router";
import { toastSuccess } from "helpers/Toast";

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
    display: none;
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
  const {
    user: { data },
  } = store.getState();

  const dispatch = useDispatch();

  const {
    auth: { data: authData },
  } = store.getState();

  const drawer = () => {
    setVisible(!visible);
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
          // border: "1.77918px solid #FFFFFF",
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
          width: "100%",
        }}
      >
        {data && !data?.user?.verified ? (
          <div
            style={{
              background: "orange",
              textAlign: "center",
              padding: "5px 0",
            }}
          >
            We sent you a verification link check your email and click
            the link to verify. Didn't receive email?{" "}
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(requestVerification(data?.user?.email)).then(
                  (res) => {
                    console.log(res);
                    if (res?.action?.payload?.status === 200) {
                      toastSuccess(res?.value?.data?.message);
                    }
                  }
                );
              }}
            >
              Resend Mail
            </span>
          </div>
        ) : (
          ""
        )}
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
              <div
                style={{
                  visibility: `${visible ? "visible" : "hidden"}`,
                  opacity: `${visible ? 1 : 0}`,
                  height: `${visible ? "300px" : "0"}`,
                  top: "calc(100% - 1px)",
                  position: "absolute",
                  width: "100%",
                  left: "0",
                  transition:
                    "opacity 600ms, visibility 600ms, height 300ms",
                }}
              >
                <Menu mode="vertical" style={{ textAlign: "center" }}>
                  <Menu.Item key="mail">
                    <Link href="/">
                      <a
                        className={
                          window.location.pathname === `/`
                            ? "activeNav"
                            : ""
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail1">
                    <Link href="/properties">
                      <a
                        className={
                          window.location.pathname === `/properties`
                            ? "activeNav"
                            : ""
                        }
                      >
                        Properties
                      </a>
                    </Link>
                  </Menu.Item>
                  {/* <Menu.Item key="mail2">
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </Menu.Item> */}
                  <Menu.Item key="mail3">
                    <Link href="/about">
                      <a
                        className={
                          window.location.pathname === `/about`
                            ? "activeNav"
                            : ""
                        }
                      >
                        About Us
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="mail4">
                    <Link href="/careers">
                      <a
                        className={
                          window.location.pathname === `/careers`
                            ? "activeNav"
                            : ""
                        }
                      >
                        Careers
                      </a>
                    </Link>
                  </Menu.Item>
                  {!authData?.token && (
                    <Menu.Item key="mail5">
                      <Button
                        style={{ background: "#f9a602" }}
                        className="nav-siginIn"
                        icon={<LockOutlined />}
                        onClick={() => {
                          dispatch(showModal());
                        }}
                      >
                        Sign In
                      </Button>
                    </Menu.Item>
                  )}
                  {authData?.token && (
                    <Menu.Item key="mail5">
                      <Button
                        style={{
                          background: "#f9a602",
                          marginBottom: "19px",
                        }}
                        className="nav-siginIn"
                        onClick={() =>
                          Router.push("/dashboard/wallet")
                        }
                      >
                        Dashboard
                      </Button>
                    </Menu.Item>
                  )}
                </Menu>
              </div>
            </div>
          </nav>
        </Affix>
      </Wrap>
    </>
  );
};

export default Navbar;

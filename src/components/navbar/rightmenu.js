import React, { useEffect } from "react";
import { Menu, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { store } from "store";
import { showModal } from "store/modal/action";
import { useDispatch } from "react-redux";
import { getUser } from "store/user/actions";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const RightMenu = () => {
  const {
    auth: { data },
  } = store.getState();

  useEffect(() => {
    if (data?.token) {
      dispatch(getUser());
    }
  }, [dispatch, data]);

  const dispatch = useDispatch();

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link href="/">
            <a className={window.location.pathname === `/` ? "activeNav" : ""}>
              Home
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail1">
          <Link href="/properties" passHref>
            <a
              className={
                window.location.pathname === `/properties` ? "activeNav" : ""
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
                window.location.pathname === `/about` ? "activeNav" : ""
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
                window.location.pathname === `/careers` ? "activeNav" : ""
              }
            >
              Careers
            </a>
          </Link>
        </Menu.Item>
        {!data?.token && (
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
        {data?.token && (
          // <Menu.Item key="mail5">
          <Button
            style={{ background: "#f9a602" }}
            className="nav-siginIn"
            onClick={() => Router.push("/dashboard/wallet")}
          >
            Dashboard
          </Button>
          // </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default RightMenu;

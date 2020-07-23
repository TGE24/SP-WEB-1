import { Menu, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { store } from "../../../store";
import { showModal } from "../../../store/modal/action";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail1">
          <Link href="/properties" passHref>
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
        {!data?.token && (
          <Menu.Item key="mail5">
            <Button
              style={{ background: "#f9a602", marginBottom: "19px" }}
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
          <Menu.Item key="mail5">
            <Button
              style={{ background: "#f9a602", marginBottom: "19px" }}
              className="nav-siginIn"
            >
              Dashboard
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default RightMenu;

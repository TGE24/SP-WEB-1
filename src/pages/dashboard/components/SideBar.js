import React from "react";
import Link from "next/link";
import Router from "next/router";
import SideBarWrapper from "styles/SideBar";
import NProgress from "nprogress";
import { logout } from "store/auth/action";
import { useDispatch } from "react-redux";
import useAuth from "hooks/useAuth";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const SideBar = ({ showSideBar, setShowSideBar, userData }) => {
  const isAuthenticated = useAuth();
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    Router.push("/");
  }

  return (
    <SideBarWrapper className={showSideBar ? "open" : ""}>
      <SideBarWrapper.InnerCont>
        <SideBarWrapper.TogggleButton
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <img src="/assets/img/close-icon-dark.svg" width={15} />
        </SideBarWrapper.TogggleButton>
        <SideBarWrapper.Logo
          src="/assets/logo.png"
          onClick={() => {
            Router.push("/");
          }}
        />
        <SideBarWrapper.Header>
          <SideBarWrapper.Avatar
            src={userData?.picture || "/assets/img/avatar.png"}
            alt="avatar"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 className="user-name">{userData?.name || "User"}</h4>
            <h5 className="logout" onClick={() => dispatch(logout())}>
              Logout
            </h5>
          </div>
        </SideBarWrapper.Header>
        <SideBarWrapper.Links>
          {userData?.privileges === "agent"
            ? agentLink.map((link, index) => (
                <li
                  key={index}
                  className={
                    window.location.pathname === `${link.path}` ? "active" : ""
                  }
                >
                  <img src={link.icon} alt={link.name} />
                  <Link
                    href={link.path ? `${link.path}` : ""}
                    onClick={() => {
                      if (link.action) link.action();
                      setShowSideBar(!showSideBar);
                    }}
                  >
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))
            : userLink.map((link, index) => (
                <li
                  key={index}
                  className={
                    window.location.pathname === `${link.path}` ? "active" : ""
                  }
                >
                  <img src={link.icon} alt={link.name} />
                  <Link
                    href={link.path ? `${link.path}` : ""}
                    onClick={() => {
                      if (link.action) link.action();
                      setShowSideBar(!showSideBar);
                    }}
                  >
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
        </SideBarWrapper.Links>
      </SideBarWrapper.InnerCont>
    </SideBarWrapper>
  );
};

export default SideBar;

const userLink = [
  {
    name: "Wallet",
    path: "/dashboard/wallet",
    icon: "/assets/img/wallet.png",
    matchPaths: ["/dashboard/wallet"],
  },
  {
    name: "Bought Properties",
    path: "/dashboard/bought-properties",
    icon: "/assets/img/properties.png",
    matchPaths: ["/dashboard/bought-properties"],
  },
  {
    name: "Reserved Properties",
    path: "/dashboard/reserved-properties",
    icon: "/assets/img/properties.png",
    matchPaths: ["/dashboard/reserved-properties"],
  },

  // {
  //   name: "Mortgage",
  //   path: "/dashboard/mortgage",
  //   icon: "/assets/img/mortgage.png",
  //   matchPaths: ["/dashboard/mortgage"],
  // },
  {
    name: "My Expertise",
    path: "/dashboard/my-expertise",
    icon: "/assets/img/properties.png",
    matchPaths: ["/dashboard/become-expert", "/dashboard/my-expertise"],
  },

  {
    name: "Account Setting",
    path: "/dashboard/account-settings",
    icon: "/assets/img/account.png",
    matchPaths: ["/dashboard/account-settings", "/dashboard/change-password"],
  },
  {
    name: "Become an agent",
    path: "/dashboard/become-agent",
    icon: "/assets/img/account.png",
    matchPaths: ["/dashboard/become-agent"],
  },
];

const agentLink = [
  {
    name: "Wallet",
    path: "/dashboard/wallet",
    icon: "/assets/img/wallet.png",
    matchPaths: ["/dashboard/wallet"],
  },
  {
    name: "Bought Properties",
    path: "/dashboard/bought-properties",
    icon: "/assets/img/properties.png",
    matchPaths: ["/dashboard/bought-properties"],
  },
  {
    name: "Reserved Properties",
    path: "/dashboard/reserved-properties",
    icon: "/assets/img/properties.png",
    matchPaths: ["dashboard/reserved-properties"],
  },
  {
    name: "Sold Properties",
    path: "/dashboard/sold-properties",
    icon: "/assets/img/properties.png",
    matchPaths: ["dashboard/sold-properties"],
  },
  // {
  //   name: "Mortgage",
  //   path: "/dashboard/mortgage",
  //   icon: "/assets/img/mortgage.png",
  //   matchPaths: ["dashboard/mortgage"],
  // },
  {
    name: "My Expertise",
    path: "/dashboard/my-expertise",
    icon: "/assets/img/properties.png",
    matchPaths: ["/dashboard/become-expert", "/dashboard/my-expertise"],
  },

  {
    name: "Account Setting",
    path: "/dashboard/account-settings",
    icon: "/assets/img/account.png",
    matchPaths: ["/dashboard/account-setting", "/dashboard/change-password"],
  },
];

import React from "react";
import MobileHeaderWrapper from "styles/MobileHeader";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Router from "next/router";

export default function MobileHeader({
  userData,
  showSideBar,
  setShowSideBar,
}) {
  return (
    <MobileHeaderWrapper>
      <div>
        <MobileHeaderWrapper.TogggleButton
          onClick={() => setShowSideBar(!showSideBar)}
        >
          {showSideBar ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )}
        </MobileHeaderWrapper.TogggleButton>
        <img
          src="/assets/img/logo.png"
          alt="logo"
          width={60}
          onClick={() => {
            Router.push("/");
          }}
        />
      </div>
      <MobileHeaderWrapper.Avatar
        src={userData?.picture || "/assets/img/avatar.png"}
        className={userData?.picture ? "fill" : ""}
        alt="User's Avatar"
      />
    </MobileHeaderWrapper>
  );
}

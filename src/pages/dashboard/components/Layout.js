import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardContainer from "styles/Container";
import Body from "./Body";
import MobileHeader from "./MobileHeader";
import { store } from "store";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const {
    user: { data },
  } = store.getState();
  const userData = useSelector((state) => state.user.data?.user);
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      {data && !data?.user?.verified ? (
        <div
          style={{
            background: "orange",
            textAlign: "center",
            padding: "5px 0",
          }}
        >
          We sent you an activation code check your email and click the link to
          verify. Didn't receive email?{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Resend Mail
          </span>
        </div>
      ) : (
        ""
      )}
      <DashboardContainer>
        <MobileHeader
          userData={userData}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <SideBar
          userData={data?.user}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Body>{children}</Body>
      </DashboardContainer>
    </div>
  );
}

export default Layout;

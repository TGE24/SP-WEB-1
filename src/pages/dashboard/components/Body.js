import React from "react";
import Content from "styles/Content";

export default function Body({ children }) {
  return (
    <Content>
      <Content.InnerCont>{children}</Content.InnerCont>
    </Content>
  );
}

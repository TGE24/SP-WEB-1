import React, { useState } from "react";
import Search from "components/search";
import { Layout } from "antd";
import Rotate from "react-reveal/Rotate";

const { Content } = Layout;

export default () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Content>
        <div className="background">
          <h1>Affordable, Luxury, Comfort</h1>
          <Rotate top right cascade>
            <p>
              enjoy the beauty and luxury of peace and beauty away from home
            </p>
          </Rotate>
          <Search />
        </div>
      </Content>
    </div>
  );
};

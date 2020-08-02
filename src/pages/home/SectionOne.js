import React, { useState } from "react";
import Search from "../../components/search";
import { Layout, Button, Modal } from "antd";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import ModalContent from "../../components/modals/buyNow.js";

const { Content } = Layout;

export default () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal
        title="Buy Property"
        visible={showModal}
        onOk={() => setShowModal(!showModal)}
        onCancel={() => setShowModal(!showModal)}
        width={700}
        style={{ top: 20 }}
      >
        <ModalContent />
      </Modal>
      <Content>
        <div className="background">
          <Zoom right cascade>
            <h1>Beauty, Luxury, Comfort</h1>
          </Zoom>
          <Rotate top right cascade>
            <p>
              enjoy the beauty and luxury of peace and beauty away
              from home
            </p>
          </Rotate>
          <Search />
        </div>
      </Content>
    </div>
  );
};

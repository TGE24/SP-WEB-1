import React from "react";
import { Input, Tooltip, Button } from "antd";
import {
  MailOutlined,
  InfoCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { verify } from "../../store/auth/action";
import { getUser } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const { token } = router.query;
  const dispatch = useDispatch();
  const data = { email: email };
  const loading = useSelector((state) => state?.auth?.loading);

  const handleVerification = () => {
    dispatch(verify(data, token))
      .then((res) => {
        if (res?.value.status === 200) {
          dispatch(getUser());
          router.push("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section className="verification-container">
      <div style={{ display: "flex" }}>
        <Input
          placeholder="Enter your email"
          prefix={<MailOutlined />}
          suffix={
            <Tooltip title="Email used during registration">
              <InfoCircleOutlined
                style={{ color: "rgba(0,0,0,.45)" }}
              />
            </Tooltip>
          }
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleVerification}
          loading={loading}
        >
          Submit
        </Button>
      </div>
    </section>
  );
};

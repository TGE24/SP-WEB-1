import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import { WalletOutlined, SolutionOutlined } from "@ant-design/icons";
import "./index.css";

const { Step } = Steps;

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <div style={{ textAlign: "center" }}>
        <h3>PAYMENT</h3>
        <div className="payment-options">
          {PaymentOption.map((item, index) => (
            <div
              style={{
                width: "312px",
                background: "#F5F4F4",
                display: "flex",
                textAlign: "left",
                marginTop: "10px",
                cursor: "pointer",
              }}
              key={index}
            >
              <span style={{ width: "254px" }}>
                <p style={{ margin: "0", padding: "15px" }}>
                  {" "}
                  {item.title}
                </p>
              </span>
              <span
                style={{
                  borderLeft: "1px solid #C4C4C4",
                  padding: "10px",
                }}
              >
                <img src={item.icon} alt="icon" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Payment Method",
    content: <PaymentMethod />,
    icon: <WalletOutlined />,
  },
  {
    title: "Payment Plan",
    content: "Second-content",
    icon: <SolutionOutlined />,
  },
];

export default () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div style={{ margin: "40px" }}>
        <Steps current={current}>
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

const PaymentOption = [
  {
    title: "Save For Property",
    icon: "/assets/icons/save.png",
  },
  {
    title: "Down Payment",
    icon: "/assets/icons/save1.png",
  },
  {
    title: "Outright Payment",
    icon: "/assets/icons/save.png",
  },
  {
    title: "E-wallet",
    icon: "/assets/icons/save1.png",
  },
];

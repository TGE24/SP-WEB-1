import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  DatePicker,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const NormalLoginForm = (props) => {
  const [formData, setFormData] = useState({});
  const onFinish = (values) => {
    delete values.dob;
    const submitData = { ...formData, ...values };
    // Auth.signup({ ...submitData });
    console.log(Auth.user);
  };
  return (
    <Form name="signup" className="signup-form" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Please input your Full name!" },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full Name"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your Email!" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Phone Number"
        />
      </Form.Item>
      <Form.Item
        name="dob"
        rules={[
          {
            required: true,
            message: "Please input your date of birth",
          },
        ]}
      >
        <DatePicker
          format="YYYY-MM-DD"
          onChange={(_, dateString) => {
            formData.dob = dateString;
            setFormData({ ...formData });
          }}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="password_confirmation"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item>
        <Divider>OR</Divider>
      </Form.Item>
      <Form.Item>
        <div>
          <img
            className="social-icons"
            src="/assets/icons/facebook.png"
            alt="Facebook"
          />
          <img
            className="social-icons"
            src="/assets/icons/twitter.png"
            alt="Twitter"
          />
          <img
            className="social-icons"
            src="/assets/icons/google.png"
            alt="Google"
          />
        </div>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;

import { Form, Input, Button, Checkbox, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";

const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="signup"
      className="signup-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
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
        name="password"
        rules={[
          { required: true, message: "Please input your Password!" },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item name="remember">
        <Checkbox>
          <span style={{ color: "white" }}>I agree to the </span>
          <a href="#" style={{ color: "#fcad0a" }}>
            terms
          </a>
        </Checkbox>
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

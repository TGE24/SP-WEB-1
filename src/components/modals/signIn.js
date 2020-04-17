import { Form, Input, Button, Checkbox, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";

const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password ?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <p style={{ color: "white" }}>
          Not a member yet?{" "}
          <span
            onClick={() => props.setShowDrawer(true)}
            style={{ color: "#FCAD0A", cursor: "pointer" }}
          >
            Signup
          </span>
        </p>
      </Form.Item>
      {/* <Form.Item>
        <Divider>OR</Divider>
      </Form.Item> */}
      {/* <Form.Item>
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
      </Form.Item> */}
    </Form>
  );
};

export default NormalLoginForm;

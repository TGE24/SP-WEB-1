import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import Auth from "../../../helpers/auth";

const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    Auth.login({ ...values });
  };
  if (Auth.isLoggedIn()) {
    return Auth.loginRedirect();
  }

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
    </Form>
  );
};

export default NormalLoginForm;

import { Form, Input, Button, Divider } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/auth/action";
import { closeModal } from "../../../store/modal/action";

const NormalLoginForm = ({ setShowDrawer, setShowModal }) => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(login(values)).then(() => {
      dispatch(closeModal());
    });
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
        rules={[
          { required: true, message: "Please input your Email!" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          size="large"
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
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password ?
        </a>
      </Form.Item>

      <Form.Item className="center-align">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={loading}
        >
          Log in
        </Button>
      </Form.Item>
      <Form.Item className="center-align">
        <p style={{ color: "white" }}>
          Not a member yet?{" "}
          <span
            onClick={() => setShowDrawer(true)}
            style={{ color: "#FCAD0A", cursor: "pointer" }}
          >
            Signup
          </span>
        </p>
      </Form.Item>
      <Form.Item className="center-align">
        <Divider>OR</Divider>
      </Form.Item>
      <Form.Item className="center-align">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="social-icons"
            src="/assets/icons/facebook.png"
            alt="Facebook"
            // onClick={handleFaceBookAuth}
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
            // onClick={handleGoogleAuth}
          />
        </div>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;

import { Form, Input } from "antd";

const App = ({ email }) => {
  return (
    <Form layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please emter your email" },
        ]}
      >
        <Input defaultValue={email} readOnly />
      </Form.Item>
      <Form.Item name="amount" label="Amount">
        <Input defaultValue={1000} prefix="₦" readOnly />
      </Form.Item>
    </Form>
  );
};

export default App;

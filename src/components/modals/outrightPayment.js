import { Form, Input } from "antd";

const App = ({ email, price }) => {
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
        <Input defaultValue={price} prefix="₦" readOnly />
      </Form.Item>
    </Form>
  );
};

export default App;

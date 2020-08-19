import { Form, Input, Radio } from "antd";

const App = ({ email }) => {
  const plans = [
    { label: "3 Months", value: "basic" },
    { label: "6 Months", value: "Pear" },
    { label: "One Year", value: "Orange" },
  ];
  return (
    <Form layout="vertical">
      <Form.Item name="plans" label="Plans">
        <Radio.Group
          options={plans}
          //   onChange={this.onChange4}
          //   value={value4}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
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

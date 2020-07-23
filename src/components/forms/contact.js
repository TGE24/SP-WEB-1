import { Form, Button, Row, Col, Input } from "antd";

const App = () => {
  return (
    <Form>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Enter your name",
              },
            ]}
          >
            <Input type="text" placeholder="Name" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Enter your email",
              },
            ]}
          >
            <Input type="text" placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Enter Your Message",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Message" />
          </Form.Item>
        </Col>
      </Row>
      <Button className="message-btn">Send Message</Button>
    </Form>
  );
};

export default App;

import React from "react";
import { Form, Button, Select, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TabPane } = Tabs;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  return (
    <Tabs className="tabs" type="card">
      <TabPane tab="RENT" key="1">
        <Form
          {...layout}
          name="basic"
          layout="inline"
          className="search-form"
        >
          <Form.Item
            name="location"
            rules={[
              {
                required: true,
                message: "Select a location",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: 250 }}
              placeholder="Select a location"
              optionFilterProp="children"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="property-type"
            rules={[
              {
                required: true,
                message: "Select a property type",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: 250 }}
              placeholder="Select a property type"
              optionFilterProp="children"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="price-range"
            rules={[
              {
                required: true,
                message: "Select a price range",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: 250 }}
              placeholder="Select a price range"
              optionFilterProp="children"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="form-button" icon={<SearchOutlined />}>
              SEARCH
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
      <TabPane tab="SALE" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
};

export default Demo;

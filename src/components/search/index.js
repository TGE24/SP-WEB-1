import React from "react";
import { Form, Button, Select, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import States from "data/states.json";

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

const Search = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Tabs className="tabs" type="card">
      <TabPane tab="RENT" key="1">
        <Form
          {...layout}
          name="basic"
          layout="inline"
          className="search-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
              {States.map((state) => (
                <Option value={state.name} key={state.id}>
                  {state.name}
                </Option>
              ))}
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
              <Option value="house">House</Option>
              <Option value="land" disabled>
                Land
              </Option>
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
              <Option value="₦500,000 - ₦1,000,000">
                ₦500,000 - ₦1,000,000
              </Option>
              <Option value="₦1,000,000 - ₦2,000,000">
                ₦1,000,000 - ₦2,000,000
              </Option>
              <Option value="Above ₦2,000,000">
                Above ₦2,000,000
              </Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              className="form-button"
              icon={<SearchOutlined />}
              htmlType="submit"
            >
              SEARCH
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
      <TabPane tab="SALE" key="2">
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
              {States.map((state) => (
                <Option value={state.name} key={state.id}>
                  {state.name}
                </Option>
              ))}
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
              <Option value="house">House</Option>
              <Option value="land">Land</Option>
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
              <Option value="jack">₦500,000 - ₦1,000,000</Option>
              <Option value="lucy">₦1,000,000 - ₦2,000,000</Option>
              <Option value="tom">Above ₦2,000,000</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              className="form-button"
              icon={<SearchOutlined />}
              htmlType="submit"
            >
              SEARCH
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  );
};

export default Search;

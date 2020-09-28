import React from "react";
import { Form, Input, Radio, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { subscription } from "store/properties/actions";

const App = ({ plans, pid, id }) => {
  const [plansArray, setPlansArray] = React.useState([]);
  const [date, setDate] = React.useState()
  const [amount, setAmount] = React.useState(0)
  const [propertyType, setPropertyType] = React.useState();
  const actionLoading = useSelector((state) => state.properties.actionLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (pid?.startsWith("house")) {
      setPropertyType("house")
    } else if (pid?.startsWith("land")) {
      setPropertyType("land")
    }
  }, [pid])

  React.useEffect(() => {
    let newPlansArray = []
    plans.map((item) => {
      const Obj = {
        label: item.interval + " Month(s)",
        value: item.plan_code,
        amount: item.amount
      }
      newPlansArray.push(Obj)
      return Obj
    })
    setPlansArray(newPlansArray)
  }, [plans])

  const onFinish = (values) => {
    values.amount = amount
    values.property_type = propertyType
    values.start_date = date
    values.property_id = id
    dispatch(subscription(values)).then((res) => {
      console.log(res)
    })
  }

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="plan_code" label="Plans">
        <Radio.Group
          options={plansArray}
          onChange={(e) => {
            let plan = plansArray.filter((plan) =>
              plan.value === e.target.value
            )
            setAmount(plan[0].amount)
          }}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item
        name="amount"
        label="Amount"
      >
        <Input defaultValue={amount} prefix="₦" readOnly />
      </Form.Item>
      <Form.Item name="start_date" label="Start Date">
        <DatePicker onChange={(_, string) => {
          setDate(string)
        }} />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" loading={actionLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;

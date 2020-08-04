import React, { useState } from "react";
import { Select, Modal, Form } from "antd";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { fundWallet } from "store/wallet/actions";
import { toastSuccess } from "helpers/Toast";
import NumberFormat from "react-number-format";
import { store } from "store";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function Wallet() {
  const {
    user: { data },
  } = store.getState();
  const [visible, setVisible] = useState(false);
  const [charges, setCharges] = useState(0);
  const [actualAmount, setactualAmount] = useState(0);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email: data?.user?.email,
    amount: actualAmount * 100,
    publicKey: process.env.PAYSTACK_KEY,
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (res) => {
    formData.payment_plan = "save";
    formData.reference = res.reference;
    setFormData({ ...formData });
    dispatch(fundWallet(formData)).then(() => {
      setVisible(false);
      toastSuccess(
        `You have Added ${actualAmount - charges} to your wallet`
      );
    });
  };
  return (
    <>
      <Modal
        title="Fund Your Wallet"
        visible={visible}
        onCancel={() => setVisible(!visible)}
        onOk={() => initializePayment(onSuccess)}
        okText="Fund Wallet"
      >
        <Form layout="vertical" className="form-modal">
          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "Please enter An amount" },
            ]}
          >
            <NumberFormat
              thousandSeparator={true}
              prefix={"₦"}
              placeholder="Enter amount"
              onValueChange={(value) => {
                let fees = (1.5 / 100) * value.value;

                if (fees > 2000) {
                  fees = 2000;
                }

                setCharges(fees);
                setactualAmount(value.value);
                formData.amount = value.value - charges;
                setFormData({ ...formData });
              }}
            />
            <br />
            <span>Your fees is {charges}</span>
          </Form.Item>
        </Form>
      </Modal>
      <DashBoardBody.Header>
        <h1>Wallet</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Banner>
          <div className="background">
            <div className="wallet-header">
              <div className="circle">
                <img src="/assets/img/wallet-colored.png" alt="" />
              </div>
              <h3>{data?.user?.name}</h3>
              <h2>Current account balance:</h2>
              <h1>15,000.00</h1>
            </div>
            <div className="wallet-card">
              <img src="/assets/img/wold.png" alt="" />
              <div className="cards">
                <img src="/assets/img/MasterCard.png" alt="" />
                <img src="/assets/img/Visa.png" alt="" />
                <img src="/assets/img/Verve.png" alt="" />
              </div>
            </div>
          </div>
          <div
            className="fund-wallet"
            onClick={() => setVisible(true)}
            style={{ cursor: "pointer" }}
          >
            <span>Fund Wallet</span>
          </div>
        </DashBoardBody.Banner>
        <DashBoardBody.WalletRecentActivity>
          <div className="row-header">
            <h1>YOUR RECENT ACTIVITIES</h1>
            <div className="sort-by">
              <img
                src="/assets/icons/sort-by.png"
                alt=""
                className="sort-icon"
              />
              <Select
                defaultValue="Filter"
                style={{ width: 160 }}
                onChange={handleChange}
                className="select-sort"
              >
                <Option value="jack">General Listing</Option>
                <Option value="lucy">Spread Exclusive </Option>
                <Option value="lucy">Mortgage </Option>
                <Option value="lucy">For Sale </Option>
                <Option value="lucy">For Rent </Option>
              </Select>
            </div>
          </div>
          <div className="card-container">
            {TranactionHistory.map((items, index) => {
              switch (items.type) {
                case "Add":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid green" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "green" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );

                case "purchases":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid #EB5757" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "#EB5757" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );

                default:
                  return (
                    <div className="transaction-card" key={index}>
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
        </DashBoardBody.WalletRecentActivity>
      </DashBoardBody>
    </>
  );
}

const TranactionHistory = [
  {
    type: "Add",
    title: "Added Money",
    amount: 2000,
    date: new Date().toDateString(),
    descriptions: "",
  },
  {
    type: "Transfer",
    amount: 2000,
    title: "Transfer Funds",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
  {
    type: "purchases",
    amount: 2000,
    title: "Land Purchase",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
];
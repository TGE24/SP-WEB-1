import React, { useState, useEffect } from "react";
import { Select, Modal, Form, Pagination } from "antd";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { fundWallet, getTransaction } from "store/wallet/actions";
import { toastSuccess } from "helpers/Toast";
import NumberFormat from "react-number-format";
import { store } from "store";
import { formatMoney } from "helpers/formatter";
import { getUser } from "store/user/actions";
import Loader from "./Loader";

export default function Wallet() {
  const {
    user: { data },
  } = store.getState();
  const [visible, setVisible] = useState(false);
  const [charges, setCharges] = useState(0);
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);
  const [actualAmount, setactualAmount] = useState(0);
  const [formData, setFormData] = useState({});
  const wallet = useSelector((state) => state.wallet.data);
  const userData = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.wallet.loading);
  const dispatch = useDispatch();
  let walletBalance = formatMoney(userData?.user?.property_balance?.balance);
  let agentBalance = formatMoney(userData?.user?.inspection_balance?.balance);
  useEffect(() => {
    dispatch(getTransaction(page));
  }, [dispatch, page]);

  useEffect(() => {
    setPagination(wallet?.data?.total);
  }, [wallet]);

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
      toastSuccess(`You have Added ${actualAmount - charges} to your wallet`);
      setPage(0);
      dispatch(getTransaction(page));
      dispatch(getUser());
    });
  };

  console.log(userData?.user);

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
            rules={[{ required: true, message: "Please enter An amount" }]}
          >
            <NumberFormat
              thousandSeparator={true}
              prefix={"???"}
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
              <div className="amount-row">
                <div className="">
                  <h2>Current account balance:</h2>
                  <h1>???{walletBalance}</h1>
                </div>

                {userData?.user?.privileges === "agent" ? (
                  <div className="agent-wallet">
                    <h2>Agent balance:</h2>
                    <h1>???{agentBalance}</h1>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
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

          {userData?.user?.privileges === "agent" ? (
            <div
              className="request-money"
              style={{ cursor: "pointer", position: "relative" }}
            >
              <span>Withdraw</span>
            </div>
          ) : (
            <div></div>
          )}
          <div
            className="fund-wallet"
            onClick={() => setVisible(true)}
            style={{
              cursor: "pointer",
              position: "relative",
              margin:
                userData?.user?.privileges === "agent"
                  ? "-5% 0 0 82%"
                  : "-3% 0 0 82%",
            }}
          >
            <span>Fund Wallet</span>
          </div>
        </DashBoardBody.Banner>
        <DashBoardBody.WalletRecentActivity>
          <div className="row-header">
            <h1 style={{ marginTop: "10px" }}>YOUR RECENT ACTIVITIES</h1>
            <div className="sort-by">
              {/* <img
                src="/assets/icons/sort-by.png"
                alt=""
                className="sort-icon"
              /> */}
              {/* <Select
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
              </Select> */}
            </div>
          </div>
          <div className="card-container">
            {loading ? (
              <Loader />
            ) : (
              wallet?.data?.data?.map((items, index) => {
                const time = new Date(items.created_at).toDateString();
                const money = formatMoney(items.amount);
                return (
                  <div
                    className="transaction-card"
                    style={{
                      borderLeft:
                        items.type === "credit"
                          ? "10px solid green"
                          : "10px solid #EB5757",
                    }}
                    key={index}
                  >
                    <div className="leading-item">
                      <h1>{items.description}</h1>
                      <h2>
                        {items.type === "credit"
                          ? "Funded from your credit card"
                          : ""}
                      </h2>
                    </div>
                    <div className="trailing-item">
                      <h1
                        style={{
                          color: items.type === "credit" ? "green" : " #EB5757",
                        }}
                      >
                        {items?.type === "debit" ? "-???" + money : "???" + money}
                      </h1>
                      <div className="date">{time}</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </DashBoardBody.WalletRecentActivity>
        <Pagination
          total={pagination}
          current={page}
          pageSize={10}
          onChange={(page) => {
            setPage(page);
          }}
          hideOnSinglePage={true}
          style={{ textAlign: "center" }}
        />
      </DashBoardBody>
    </>
  );
}

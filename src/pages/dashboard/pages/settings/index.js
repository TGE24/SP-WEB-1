import React, { useState, useEffect } from "react";
import DashBoardBody from "styles/dashbord_body";
import { store } from "store";
import { CameraFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateProfile, getUser } from "store/user/actions";
import axios from "axios";
import Loader from "components/Loader";
import Button from "components/Button";
import Input from "components/input";
import Select from "components/Select";
import parseError from "helpers/ParseError";
import { toastError, toastSuccess } from "helpers/Toast";

export default function AcountSetting() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data?.user);
  const [uploading, setUploading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [isVerified, setVerfied] = useState(false);

  const [banks, setBanks] = useState([]);

  const [bankCode, setBankCode] = useState();
  const [accountNumber, setAccountNumber] = useState(
    userData?.account_no == null ? "" : userData?.account_no
  );
  // console.log(userData);
  const onChange = (e) => {
    setUploading(true);
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "ngflnmyo");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/tech-18/image/upload", formData)
      .then((res) => {
        const values = {
          name: userData?.name,
          address: userData?.address,
          picture: res.data.secure_url,
          phone: userData?.phone,
        };
        dispatch(updateProfile(values)).then((res) => {
          dispatch(getUser());
          setUploading(false);
        });
      });
  };
  const header = {
    Authorization: "Bearer sk_live_0e774ab38d53157a2d3e49945f9721cd94173272",
  };
  // get bank all banks

  const getBank = () => {
    axios
      .get("https://api.paystack.co/bank", {
        // header,
      })
      .then((res) => {
        // console.log(res.data);
        const bankss = [];
        res?.data?.data?.map((item) => {
          var bank = {
            name: item.name,
            key: item.code,
          };
          bankss.push(bank);
        });
        setBanks(bankss);
      });
  };

  // verify account number

  const verifyAccount = (bank_code, account_number) => {
    changeBankForm.setFieldValue("account_name", "");
    setVerfied(false);
    axios
      .get(
        `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
        {
          headers: {
            Authorization:
              "Bearer sk_live_0e774ab38d53157a2d3e49945f9721cd94173272",
          },
        }
      )
      .then((res) => {
        changeBankForm.setFieldValue(
          "account_name",
          res.data.data.account_name
        );
        toastSuccess("Account number is verifed");
        setVerfied(true);
      })
      .catch((error) => {
        toastError("Account number invalid");
      });
  };
  // console.log(isVerified);
  useEffect(() => {
    getBank();
  }, []);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    return errors;
  };
  const validateChangeBank = (values) => {
    const errors = {};

    if (!values.bank_name) {
      errors.bank_name = "Select Bank Name is required";
    }
    if (!values.account_name) {
      errors.account_name = "Account Name  is required";
    }
    if (!values.account_no) {
      errors.account_no = "Account number is required";
    }
    return errors;
  };
  const form = useFormik({
    initialValues: {
      name: userData?.name,
      address: userData?.address,
      picture: userData?.picture,
      phone: userData?.phone,
    },
    onSubmit: (values) => {
      setFormLoading(true);
      dispatch(updateProfile(values)).then((res) => {
        dispatch(getUser());
        setFormLoading(false);
      });
    },
    validate,
    validateOnChange: true,
  });

  const changeBankForm = useFormik({
    initialValues: {
      name: userData?.name,
      address: userData?.address,
      picture: userData?.picture,
      phone: userData?.phone,
      bank_name: userData?.bank_name,
      account_name: userData.account_name,
      account_no: accountNumber,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateProfile(values)).then((res) => {
        dispatch(getUser());
      });
    },
    validate: validateChangeBank,
    validateOnChange: true,
  });

  const onInputFocus = (name) => () => form.setFieldError(name, undefined);
  const onInputFocusChange = (name) => () =>
    changeBankForm.setFieldError(name, undefined);
  return (
    <>
      <DashBoardBody.Header>
        <h1>Account Settings</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.SettingBanner>
          <div className="background">
            {/* <div className="">
              <h1>{userData?.name}</h1>
              <h2>{userData?.email}</h2>
            </div> */}
          </div>
          <div className="circle">
            {uploading ? (
              <Loader color="#fcad0a" size={40} />
            ) : (
              <>
                <input
                  type="file"
                  name="file"
                  id="profile"
                  onChange={onChange}
                />
                <img
                  src={
                    userData?.picture != null
                      ? userData?.picture
                      : "/assets/img/userData.png"
                  }
                  alt=""
                />
                <div className="camera">
                  <CameraFilled size={100} />
                </div>
              </>
            )}
          </div>
        </DashBoardBody.SettingBanner>

        <DashBoardBody.Form onSubmit={form.handleSubmit}>
          <div className="input-control">
            <label>Name:</label>
            <Input
              name="name"
              id="name"
              round
              big
              fullWidth
              placeholder="Name "
              onChange={(e) => {
                form.setFieldValue("name", e.target.value);
              }}
              value={form.values.name}
              error={!!form.errors.name && form.touched.name}
              errorText={form.touched.name ? form.errors.name : undefined}
              onFocus={onInputFocus("name")}
            />
          </div>

          <div className="input-control">
            <label>Email:</label>
            <input type="text" value={userData?.email} readOnly disabled />
          </div>
          <div className="input-group">
            <div className="input-control">
              <label>Phone Number:</label>
              <Input
                name="phone"
                id="phone"
                round
                big
                fullWidth
                placeholder="Phone number "
                onChange={(e) => {
                  form.setFieldValue("phone", e.target.value);
                }}
                value={form.values.phone}
                error={!!form.errors.phone && form.touched.phone}
                errorText={form.touched.phone ? form.errors.phone : undefined}
                onFocus={onInputFocus("phone")}
              />
            </div>
            <div className="input-control">
              <label>Address:</label>
              <Input
                name="address"
                id="address"
                round
                big
                fullWidth
                placeholder="Address "
                onChange={(e) => {
                  form.setFieldValue("address", e.target.value);
                }}
                value={form.values.address}
                error={!!form.errors.address && form.touched.address}
                errorText={
                  form.touched.address ? form.errors.address : undefined
                }
                onFocus={onInputFocus("address")}
              />
            </div>
          </div>
          <Button type="submit" loading={formLoading}>
            Save
          </Button>
        </DashBoardBody.Form>
        {userData?.privileges === "agent" ? (
          <DashBoardBody.Form onSubmit={changeBankForm.handleSubmit}>
            <div className="input-group">
              <div className="input-control">
                <label>Bank Name:</label>
                <Select
                  name="bank_name"
                  id="bank_name"
                  options={banks}
                  onChange={(e) => {
                    setBankCode(e.target.value);

                    var bankName =
                      e.target.options[e.target.selectedIndex].text;
                    changeBankForm.setFieldValue("bank_name", bankName);
                    if (accountNumber.length === 10) {
                      verifyAccount(e.target.value, accountNumber);
                    }
                  }}
                />
              </div>
              <div className="input-control">
                <label>Account Number</label>
                <Input
                  name="account_no"
                  id="account_no"
                  round
                  big
                  fullWidth
                  maxlength="10"
                  placeholder="Account Number "
                  onChange={(e) => {
                    changeBankForm.setFieldValue("account_no", e.target.value);
                    setAccountNumber(e.target.value);
                    if (e.target.value.length === 10) {
                      verifyAccount(bankCode, e.target.value);
                    }
                  }}
                  value={changeBankForm.values.account_no}
                  error={
                    !!changeBankForm.errors.account_no &&
                    changeBankForm.touched.account_no
                  }
                  errorText={
                    changeBankForm.touched.account_no
                      ? changeBankForm.errors.account_no
                      : undefined
                  }
                  onFocus={onInputFocusChange("account_no")}
                />
              </div>
            </div>
            <div className="input-control">
              <label>Account Name</label>
              <Input
                name="account_name"
                id="account_name"
                round
                big
                fullWidth
                disabled
                placeholder="Account Name "
                // onChange={(e) => {
                //   changeBankForm.setFieldValue("account_name", e.target.value);
                // }}
                value={changeBankForm.values.account_name}
                error={
                  !!changeBankForm.errors.account_name &&
                  changeBankForm.touched.account_name
                }
                errorText={
                  changeBankForm.touched.account_name
                    ? changeBankForm.errors.account_name
                    : undefined
                }
                onFocus={onInputFocusChange("account_name")}
              />
            </div>

            <Button type="submit" disabled={!isVerified} loading={formLoading}>
              Save
            </Button>
          </DashBoardBody.Form>
        ) : (
          ""
        )}
      </DashBoardBody>
    </>
  );
}

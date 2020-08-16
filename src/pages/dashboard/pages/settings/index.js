import React, { useState } from "react";
import DashBoardBody from "styles/dashbord_body";
import { store } from "store";
import { CameraFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updateProfile, getUser } from "store/user/actions";

export default function AcountSetting() {
  const dispatch = useDispatch();

  const {
    user: { data },
  } = store.getState();
  const { user } = data;

  const [profile, setProfile] = useState(user?.picture);
  console.log(user);

  const form = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      address: user?.address,
      picture: user?.picture,
      phone: user?.phone,
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(updateProfile(values)).then((res) => {
      //   dispatch(getUser());
      // });
    },
    validateOnChange: true,
  });

  return (
    <>
      <DashBoardBody.Header>
        <h1>Account Settings</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <form onSubmit={form.onSubmit}>
          <DashBoardBody.SettingBanner>
            <div className="background">
              <div className="">
                <h1>{user?.name}</h1>
                <h2>{user?.email}</h2>
              </div>
            </div>
            <div className="circle">
              <img src="/assets/img/user.png" alt="" />
              <div className="camera">
                <CameraFilled size={100} />
              </div>
            </div>
          </DashBoardBody.SettingBanner>

          <DashBoardBody.Div>
            <div className="input-control">
              <label>First Name:</label>
              <input
                type="text"
                value={user?.name}
                onChange={(e) => {
                  setState(e.target.value);
                  form.setFieldValue("name", e.target.value);
                }}
              />
            </div>

            <div className="input-control">
              <label>Email:</label>
              <input type="text" value={user?.email} readOnly disabled />
            </div>
            <div className="input-group">
              <div className="input-control">
                <label>Phone Number:</label>
                <div className="prefix">
                  <span className="input-group-addon">+234</span>
                  <input
                    type="text"
                    value={user?.phone}
                    onChange={(e) => {
                      setState(e.target.value);
                      form.setFieldValue("phone", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="input-control">
                <label>Address:</label>
                <input
                  type="text"
                  value={user?.address}
                  onChange={(e) => {
                    setState(e.target.value);
                    form.setFieldValue("address", e.target.value);
                  }}
                />
              </div>
            </div>
            <button type="submit">Save</button>
          </DashBoardBody.Div>
        </form>
      </DashBoardBody>
    </>
  );
}

import React, { useState } from "react";
import DashBoardBody from "styles/dashbord_body";
import { store } from "store";
import { CameraFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateProfile, getUser } from "store/user/actions";
import axios from "axios";
import Loader from "components/Loader";

export default function AcountSetting() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data?.user);
  const {
    user: { data },
  } = store.getState();

  const [profile, setProfile] = useState(userData?.picture);
  const [uploading, setUploading] = useState(false);
  console.log(userData);
  const onChange = (e) => {
    setUploading(true);
    const files = e.target.files[0];

    const formData = new FormData();
    formData.append("upload_preset", "ngflnmyo");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/tech-18/image/upload", formData)
      .then((res) => {
        console.log(res.data.secure_url);
        const values = {
          name: userData?.name,

          address: userData?.address,
          picture: res.data.secure_url,
          phone: userData?.phone,
        };
        dispatch(updateProfile(values)).then((res) => {
          dispatch(getuserData());
          setProfile(userData?.picture);
          setUploading(false);
        });
      });
  };
  const form = useFormik({
    initialValues: {
      name: userData?.name,
      email: userData?.email,
      address: userData?.address,
      picture: userData?.picture,
      phone: userData?.phone,
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(updateProfile(values)).then((res) => {
      //   dispatch(getuserData());
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
                <h1>{userData?.name}</h1>
                <h2>{userData?.email}</h2>
              </div>
            </div>
            <div className="circle">
              {uploading ? (
                <Loader color="#fcad0a" size={40} />
              ) : (
                <span>
                  <input type="file" name="file" onChange={onChange} />
                  <img
                    src={profile != null ? profile : "/assets/img/userData.png"}
                    alt=""
                  />
                  <div className="camera">
                    <CameraFilled size={100} />
                  </div>
                </span>
              )}
            </div>
          </DashBoardBody.SettingBanner>

          <DashBoardBody.Div>
            <div className="input-control">
              <label>First Name:</label>
              <input
                type="text"
                value={userData?.name}
                onChange={(e) => {
                  setState(e.target.value);
                  form.setFieldValue("name", e.target.value);
                }}
              />
            </div>

            <div className="input-control">
              <label>Email:</label>
              <input type="text" value={userData?.email} readOnly disabled />
            </div>
            <div className="input-group">
              <div className="input-control">
                <label>Phone Number:</label>
                <div className="prefix">
                  <span className="input-group-addon">+234</span>
                  <input
                    type="text"
                    value={userData?.phone}
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
                  value={userData?.address}
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

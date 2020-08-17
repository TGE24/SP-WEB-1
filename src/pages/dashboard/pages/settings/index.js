import React, { useState } from "react";
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

export default function AcountSetting() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data?.user);

  const [uploading, setUploading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

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
  const onInputFocus = (name) => () => form.setFieldError(name, undefined);
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
                  form.setFieldValue("phone", e.target.value);
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
      </DashBoardBody>
    </>
  );
}

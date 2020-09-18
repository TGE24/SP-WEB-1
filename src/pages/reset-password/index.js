import Button from "components/Button";
import Input from "components/input";
import { useRouter } from "next/router";
import { CareerSectionOne } from "pages/careers/styled";
import React from "react";
import Zoom from "react-reveal/Zoom";
import { ResetPasswordContainer } from "./styled";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "store/auth/action";
import { toastSuccess } from "helpers/Toast";
import { showModal } from "store/modal/action";
import Router from "next/router";

export default () => {
  const router = useRouter();
  const { token } = router.query;

  const dispatch = useDispatch();

  const validate = (value) => {
    const errors = {};
    if (!value.password) {
      errors.password = "Password is required";
    }
    if (!value.password_confirmation) {
      errors.password_confirmation = "Password doesn't match";
    }
    if (value.password !== value.password_confirmation) {
      errors.password_confirmation = "Password doesn't match";
    }

    return errors;
  };

  const form = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    onSubmit: (values) => {
      dispatch(resetPassword({ token, data: values })).then(() => {
        Router.push("/");
        toastSuccess("Password changed successfully");
        dispatch(showModal());
      });
    },
    validate,
    validateOnChange: true,
  });
  const onInputFocus = (name) => () => form.setFieldError(name, undefined);

  return (
    <ResetPasswordContainer>
      <CareerSectionOne>
        <div className="over-lay">
          <Zoom right cascade>
            <h1>Please set a new password</h1>
          </Zoom>
        </div>
      </CareerSectionOne>
      <ResetPasswordContainer.Form onSubmit={form.handleSubmit}>
        <div className="input-group">
          <div className="input-control">
            <Input
              name="password"
              id="password"
              passwordToggle
              label="NEW PASSWORD"
              placeholder="ENTER PASSWORD"
              onChange={(e) => {
                form.setFieldValue("password", e.target.value);
              }}
              value={form.values.password}
              error={!!form.errors.password && form.touched.password}
              errorText={
                form.touched.password ? form.errors.password : undefined
              }
              onFocus={onInputFocus("password")}
            />
          </div>
          <div className="input-control">
            <Input
              name="password_confirmation"
              id="password_confirmation"
              label="RE-TYPE PASSWORD"
              passwordToggle
              placeholder="COMFIRM PASSWORD"
              onChange={(e) => {
                form.setFieldValue("password_confirmation", e.target.value);
              }}
              value={form.values.password_confirmation}
              error={
                !!form.errors.password_confirmation &&
                form.touched.password_confirmation
              }
              errorText={
                form.touched.password_confirmation
                  ? form.errors.password_confirmation
                  : undefined
              }
              onFocus={onInputFocus("password_confirmation")}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </ResetPasswordContainer.Form>
    </ResetPasswordContainer>
  );
};

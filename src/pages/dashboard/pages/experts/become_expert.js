import React, { useState, useEffect } from "react";
import DashBoardBody from "styles/dashbord_body";
import Input from "components/input";
import { useFormik } from "formik";
import Select from "components/Select";
import { useDispatch, useSelector } from "react-redux";
import { toastSuccess } from "helpers/Toast";
import { becomeExpert } from "store/user/actions";
import Router from "next/router";
import ImagesUploader from "components/ImageUploader";
import { fetchCareer } from "store/career/actions";
import Button from "components/Button";

export default function ChangePassword() {
  const careers = useSelector((state) => state.careers.data);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const [career_id, setCareerId] = useState([]);

  useEffect(() => {
    const tempCareers = [];
    careers?.careers.forEach((item) => {
      const career = {
        key: item.id,
        name: item.name,
      };
      tempCareers.push(career);
    });
    setCareerId(tempCareers);
  }, [careers]);
  useEffect(() => {
    if (careers == null) {
      dispatch(fetchCareer());
    }
  }, [dispatch]);

  const validate = (values) => {
    const errors = {};

    if (!values.career_id) {
      errors.career_id = "Identification card is required";
    }
    if (!values.years_of_experience) {
      errors.years_of_experience = "Identification number is required";
    }
    if (!values.proof_of_work) {
      errors.proof_of_work = "Your proof_of_work is required";
    }

    return errors;
  };
  const form = useFormik({
    initialValues: {
      career_id: "",
      years_of_experience: "",
      proof_of_work: "",
      image: "",
    },
    onSubmit: (values) => {
      dispatch(becomeExpert(values)).then((res) => {
        if (res) {
          toastSuccess(` You have now a career expert`);

          Router.push("/dashboard/wallet");
        }
      });
    },
    validate,
    validateOnChange: true,
  });

  const onInputFocus = (name) => () => form.setFieldError(name, undefined);
  return (
    <>
      <DashBoardBody.Header>
        <h1>Become An Expert</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Form onSubmit={form.handleSubmit}>
          <div className="input-group">
            <div className="input-control">
              <Select
                name="career_id"
                id="career_id"
                fullWidth
                label="CAREER TYPE"
                options={career_id}
                onChange={(e) => {
                  form.setFieldValue("career_id", e.target.value);
                }}
                value={form.values.career_id}
                error={!!form.errors.career_id && form.touched.career_id}
                errorText={
                  form.touched.career_id ? form.errors.career_id : undefined
                }
                onFocus={onInputFocus("career_id")}
              />
            </div>
            <div className="input-control">
              <Input
                name="years_of_experience"
                id="years_of_experience"
                label="Years Of Experience"
                round
                big
                fullWidth
                placeholder="Years Of Experience"
                onChange={(e) => {
                  form.setFieldValue("years_of_experience", e.target.value);
                }}
                value={form.values.years_of_experience}
                error={
                  !!form.errors.years_of_experience &&
                  form.touched.years_of_experience
                }
                errorText={
                  form.touched.years_of_experience
                    ? form.errors.years_of_experience
                    : undefined
                }
                onFocus={onInputFocus("years_of_experience")}
              />
            </div>
          </div>
          <div className="input-control">
            <label>Resume</label>
            <ImagesUploader
              onChange={(values) => {
                form.setFieldValue("proof_of_work", values[0]);
              }}
            />
          </div>
          <div className="input-control">
            <label>Other Images</label>
            <ImagesUploader
              onChange={(values) => {
                form.setFieldValue("image", values);
              }}
            />
          </div>
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </DashBoardBody.Form>
      </DashBoardBody>
    </>
  );
}

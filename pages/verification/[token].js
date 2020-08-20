import React from "react";
import { useRouter } from "next/router";
import { verify } from "store/auth/action";
import { getUser } from "store/user/actions";
import { useDispatch } from "react-redux";
import { toastSuccess } from "helpers/Toast";

export default () => {
  const router = useRouter();
  const { token } = router.query;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(verify(token))
      .then((res) => {
        console.log(res);
        if (res?.value?.status === 200) {
          // router.push("/");
          toastSuccess("Email verified successfully");
          dispatch(getUser());
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);

  return (
    <section className="verification-container">
      <div style={{ display: "flex" }}>
        <h1>Verifying</h1>
      </div>
    </section>
  );
};

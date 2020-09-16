import React, { useEffect } from "react";
import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  const { referral } = router.query;

  useEffect(() => {
    localStorage.setItem("referral", referral);
    router.push("/");
  }, [referral]);
  return (
    <section className="verification-container">
      <div style={{ display: "flex" }}>
        <h1>Referring</h1>
      </div>
    </section>
  );
};

import React, { useEffect } from "react";
import Auth from "../helpers/auth";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Auth.init();
  }, []);

  console.log(Auth.isLoggedIn());
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

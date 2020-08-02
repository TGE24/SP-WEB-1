import App from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../src/components/Layout";
import "antd/dist/antd.css";
import "../styles/layout.css";
import "../styles/nprogress.css";
import "../styles/modal.css";
import "../styles/navbar.css";
import "../styles/search.css";
import "../styles/propsearch.css";
import "../styles/home.css";
import "../styles/index.css";
import { store, persistor } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

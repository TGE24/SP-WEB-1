import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import "styles/css/layout.css";
import "styles/css/nprogress.css";
import "styles/css/modal.css";
import "styles/css/navbar.css";
import "styles/css/search.css";
import "styles/css/propsearch.css";
import "styles/css/home.css";
import "styles/css/index.css";
import "styles/css/style.css";
import "styles/css/main.css";
import "styles/css/reset.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store, persistor } from "store";

const ToastConfig = {
  className: "toast__container",
  toastClassName: "toast__toast",
  bodyClassName: "toast__body",
  hideProgressBar: true,
  closeButton: false,
  position: toast.POSITION.TOP_RIGHT,
};

// configure global toaster
toast.configure(ToastConfig);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

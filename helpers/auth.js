import request from "./request";
import db from "./db";

const Auth = {
  token: null,
  isLoggedIn: () => (Auth.token ? true : false),

  login: (input) => {
    request(
      {
        url: "/user/login",
        method: "POST",
        data: input,
      },
      false
    )
      .then((res) => {
        Auth.token = res.data.access_token;

        db.setItem("token", Auth.token);
        Auth.loginRedirect();
      })
      .catch((err) => {
        console.error(err);
      });
  },

  loginRedirect: () => {
    if (Auth.token) {
      window.location.assign("/dashboard");
    }
  },

  logoutRedirect: () => {
    window.location.assign("/");
  },

  logout: () => {
    db.removeItem("token", Auth.token);
    Auth.logoutRedirect();
  },
};

export default Auth;

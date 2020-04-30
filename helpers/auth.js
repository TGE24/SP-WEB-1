import request from "./request";
import db from "./db";
import axios from "axios";

const Auth = {
  user: {},
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
  facebookLogin: () => {
    request(
      {
        url: "/login/facebook",
      },
      false
    ).then((res) => {
      Auth.user = res.data.user;
      Auth.token = res.data.access_token;
      db.setItem("token", Auth.token);
      Auth.loginRedirect();
      return Promise.resolve("Login Successful");
    });
  },
  googleLogin: () => {
    request(
      {
        url: "/login/google",
      },
      false
    ).then((res) => {
      Auth.user = res.data.user;
      Auth.token = res.data.access_token;
      db.setItem("token", Auth.token);
      Auth.loginRedirect();
      return Promise.resolve("Login Successful");
    });
  },
  signup: (input) => {
    request(
      {
        url: "/user",
        method: "POST",
        data: input,
      },
      false
    ).then((res) => {
      Auth.user = res.data.user;
      return Promise.resolve("Registration Completed");
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

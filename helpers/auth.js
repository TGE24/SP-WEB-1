import request from "./request";
import db from "./db";
import axios from "axios";

const Auth = {
  user: null,
  token: null,
  isLoggedIn: () => (Auth.token ? true : false),

  init: () => {
    return db
      .getItem("User")
      .then((User) => {
        Auth.token = User.token;
        Auth.user = User.user;
      })
      .catch((err) => console.error(err));
  },

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
        const User = {
          token: res.data.access_token,
          user: res.data.user,
        };
        Auth.token = User.token;
        Auth.user = User.user;
        db.setItem("User", User);
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
      const User = {
        token: res.data.token,
        user: res.data.user,
      };
      Auth.token = User.token;
      Auth.user = User.user;
      db.setItem("User", User);
      Auth.loginRedirect();
      return Promise.resolve("Registration Completed");
    });
  },

  loginRedirect: () => {
    if (Auth.token) {
      window.location.assign("http://dashboard-spuser.netlify.app/");
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

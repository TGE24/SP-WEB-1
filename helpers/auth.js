import request from "./request";
import Cookies from "js-cookie";

const Auth = {
  token: null,
  loading: false,
  User: null,
  isLoggedIn: () => (Auth.token ? true : false),

  init: () => {
    const token = Cookies.getJSON("User");
    token
      ? (Auth.token = token.token)
      : console.error("Not Authenticated");
    request(
      {
        url: "/profile",
      },
      true
    )
      .then((res) => {
        Auth.User = res.data.user;
      })
      .catch((err) => {
        console.error(err);
      });
  },

  login: (input) => {
    Auth.loading = true;
    request(
      {
        url: "/user/login",
        method: "POST",
        data: input,
      },
      false
    )
      .then((res) => {
        Auth.loading = false;
        const User = {
          token: res.data.access_token,
        };
        const JsonUser = JSON.stringify(User);
        console.log(JsonUser);
        Auth.token = User.token;
        Cookies.set("User", JsonUser, {
          // domain: ".spreadprolimited.com",
        });
        // Auth.loginRedirect();
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
    )
      .then((res) => {
        Auth.user = res.data.user;
        Auth.token = res.data.access_token;
        Auth.loginRedirect();
        return Promise.resolve("Login Successful");
      })
      .catch((err) => {
        console.error(err);
      });
  },
  googleLogin: () => {
    request(
      {
        url: "/login/google",
      },
      false
    )
      .then((res) => {
        Auth.user = res.data.user;
        Auth.token = res.data.access_token;
        Auth.loginRedirect();
        return Promise.resolve("Login Successful");
      })
      .catch((err) => {
        console.error(err);
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
    )
      .then((res) => {
        const User = {
          token: res.data.token,
          user: res.data.user,
        };
        Auth.token = User.token;
        Auth.user = User.user;
        // Auth.loginRedirect();
        return Promise.resolve("Registration Completed");
      })
      .catch((err) => {
        console.error(err);
      });
  },

  loginRedirect: () => {
    if (Auth.token) {
      window.location.assign("https://user.spreadprolimited.com/");
    }
  },

  logoutRedirect: () => {
    window.location.assign("https://spreadprolimited.com/");
  },

  // logout: () => {
  // 	db.removeItem("token", Auth.token)
  // 		.then(() => {
  // 			Auth.logoutRedirect();
  // 		})
  // 		.catch((err) => {
  // 			console.error(err);
  // 		});
  // },
};

export default Auth;

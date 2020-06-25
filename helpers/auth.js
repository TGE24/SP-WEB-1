// import request from "./request";
// import db from "./db";
// import Cookies from "js-cookie";
// import axios from "axios";

// const Auth = {
//   user: null,
//   token: null,
//   isLoggedIn: () => (Auth.token ? true : false),

//   login: (input) => {
//     request(
//       {
//         url: "/user/login",
//         method: "POST",
//         data: input,
//       },
//       false
//     )
//       .then((res) => {
//         const User = {
//           token: res.data.access_token,
//           user: res.data.user,
//         };
//         Auth.token = User.token;
//         Auth.user = User.user;
//         db.setItem("User", User);
//         Cookies.set("User", JSON.stringify(User), {
//           domain: ".spreadprolimited.com",
//         });
//         Auth.loginRedirect();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   facebookLogin: () => {
//     request(
//       {
//         url: "/login/facebook",
//       },
//       false
//     )
//       .then((res) => {
//         Auth.user = res.data.user;
//         Auth.token = res.data.access_token;
//         db.setItem("token", Auth.token);
//         Auth.loginRedirect();
//         return Promise.resolve("Login Successful");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   googleLogin: () => {
//     request(
//       {
//         url: "/login/google",
//       },
//       false
//     )
//       .then((res) => {
//         Auth.user = res.data.user;
//         Auth.token = res.data.access_token;
//         db.setItem("token", Auth.token);
//         Auth.loginRedirect();
//         return Promise.resolve("Login Successful");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   signup: (input) => {
//     request(
//       {
//         url: "/user",
//         method: "POST",
//         data: input,
//       },
//       false
//     )
//       .then((res) => {
//         const User = {
//           token: res.data.token,
//           user: res.data.user,
//         };
//         Auth.token = User.token;
//         Auth.user = User.user;
//         db.setItem("User", User);
//         Auth.loginRedirect();
//         return Promise.resolve("Registration Completed");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },

//   loginRedirect: () => {
//     if (Auth.token) {
//       window.location.assign("https://user.spreadprolimited.com/");
//     }
//   },

//   logoutRedirect: () => {
//     window.location.assign("https://spreadprolimited.com/");
//   },

//   logout: () => {
//     db.removeItem("token", Auth.token)
//       .then(() => {
//         Auth.logoutRedirect();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   },
// };

// export default Auth;

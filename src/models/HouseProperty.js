import request from "../../helpers/request";
import Auth from "../../helpers/auth";

const Houses = {
  houses: [],
  house: {},

  getHouses: () => {
    return request(
      {
        url: "/houses",
      },
      true
    ).then((res) => {
      Houses.houses = res.data;
      return Promise.resolve("Fetch completed");
    });
  },
  onlineInspection: (data) => {
    return request(
      {
        method: "POST",
        url: "/payment",
        data,
      },
      true
    )
      .then((res) => {
        Houses.house = res.data.house;
        return Promise.resolve("Fetch completed");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getHouse: (slug) => {
    return request(
      Auth.token
        ? {
            url: "user/house/" + slug,
          }
        : {
            url: "house/auth_false/" + slug,
          },
      true
    ).then((res) => {
      Houses.house = res.data.house;
      return Promise.resolve("Fetch completed");
    });
  },
};

export default Houses;

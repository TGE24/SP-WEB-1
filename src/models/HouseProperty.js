import request from "../../helpers/request";

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
  onlineInspection: () => {
    return request(
      {
        method: "POST",
        url: "/online-inspection",
      },
      true
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getHouse: (slug) => {
    return request(
      {
        url: "user/house/" + slug,
      },
      true
    ).then((res) => {
      Houses.house = res.data.house;
      return Promise.resolve("Fetch completed");
    });
  },
};

export default Houses;

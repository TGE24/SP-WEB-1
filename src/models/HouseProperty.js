import request from "../../helpers/request";

const Houses = {
  houses: [],
  house: {},

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
};

export default Houses;

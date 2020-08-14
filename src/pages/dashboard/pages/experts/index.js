import React, { useEffect, useState } from "react";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperts } from "store/expert/actions";
import Button from "components/Button";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function ReservedProperty() {
  const expertie = useSelector((state) => state.experts.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperts());
  }, [dispatch]);
  console.log(expertie);
  return (
    <>
      <DashBoardBody.Header>
        <h1>My Experties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header">
          <h1>All My experties </h1>
          <div className="sort-by">
            <Button
              small
              onClick={() => Router.push("/dashboard/become-expert")}
            >
              Add Experties
            </Button>
          </div>
        </div>
        <DashBoardBody.Row>
          {expertie?.data.map((item, index) => {
            var status = "";
            if (!item.approved && !item.rejected) {
              status = "Pending";
            }
            if (item.approved && !item.rejected) {
              status = "Approved";
            }
            if (!item.approved && item.rejected) {
              status = "Rejected";
            }

            return (
              <DashBoardBody.careerCard message={status} key={index}>
                <img src={item.career?.image} alt="" />
                <div
                  className="badge"
                  style={{
                    color:
                      status == "Pending"
                        ? "#e38d33"
                        : status == "Approved"
                        ? "#7bc476"
                        : " #d65550",
                  }}
                >
                  {status}
                </div>
                <div className="card-details">
                  <h1>{item.career?.name}</h1>
                  <hr />
                  <h2>{item.career?.description}</h2>
                </div>
              </DashBoardBody.careerCard>
            );
          })}
        </DashBoardBody.Row>
      </DashBoardBody>
    </>
  );
}
const Properties = [
  {
    image: "/assets/img/sold1.png",
    propertyName: "Amaxzon Duplex",
  },
  {
    image: "/assets/img/sold2.png",
    propertyName: "Open yard ",
  },
  {
    image: "/assets/img/sold3.png",
    propertyName: "Open roof house",
  },
  {
    image: "/assets/img/sold4.png",
    propertyName: "Amaxzon Duplex",
  },
];

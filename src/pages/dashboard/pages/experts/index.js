import React, { useEffect, useState } from "react";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperts } from "store/expert/actions";
import Button from "components/Button";
import Router from "next/router";

export default function ReservedProperty() {
  const expertise = useSelector((state) => state.experts.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperts());
  }, [dispatch]);
  return (
    <>
      <DashBoardBody.Header>
        <h1>My Expertise</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header" style={{ marginTop: "10px" }}>
          {/* <h1>All My expertise </h1> */}
          <div className="sort-by">
            <Button
              small
              onClick={() => Router.push("/dashboard/become-expert")}
            >
              Add Expertise
            </Button>
          </div>
        </div>
        <DashBoardBody.Row>
          {expertise?.data.map((item, index) => {
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

import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import Ammenities from "../../../../constants/ammenities";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoughtProperty } from "store/bought_property/actions";
import Link from "next/link";
import Loader from "../../../property/Loader";

const radioOptions = [
  { label: "Houses", value: "Houses" },
  { label: "Lands", value: "Lands" },
];

export default function ReservedProperty() {
  const bought = useSelector((state) => state.boughtProperty.data);
  const { loading } = useSelector((state) => state.boughtProperty);
  const [data, setData] = useState([]);
  const [option, setOption] = useState("Properties");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoughtProperty());
  }, [dispatch]);
  useEffect(() => {
    const newData = bought?.houses?.concat(bought?.lands);
    setData(newData);
  }, [bought]);

  // useEffect(() => {
  //   if (option === "Properties") {
  //     setData(newData);
  //   }
  // }, [option]);

  return (
    <>
      <DashBoardBody.Header>
        <h1>Bought Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header">
          <h1 style={{ marginTop: "10px" }}>Bought {option}</h1>
          <div className="sort-by">
            <Radio.Group
              options={radioOptions}
              onChange={(e) => {
                setOption(e.target.value);
              }}
              value={option}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>
        <DashBoardBody.Row>
          {loading ? (
            <Loader number={3} />
          ) : (
            data?.map((item, index) => (
              <DashBoardBody.SoldCard key={index}>
                <Link
                  href="/properties/[pid]"
                  as={`/properties/${item?.slug}`}
                  key={index}
                  passHref
                >
                  <div className="prop-cards">
                    <div className="image">
                      <img
                        src={
                          item?.house_image
                            ? item?.house_image[0]?.img_url
                            : item?.land_image[0]?.img_url
                        }
                        alt=""
                      />
                      {/* <div className="apartment">
                        <h4>
                          {option === "Houses"
                            ? item?.house_subcategory
                                ?.subcategory_name
                            : item?.land_category?.land_category}
                        </h4>
                      </div> */}
                    </div>

                    <div className="prop-details">
                      <div className="inner-container">
                        <h2>{item?.name}</h2>
                      </div>
                    </div>

                    <div className="prop-icons">
                      {item?.amenities
                        ?.slice(1, 4)
                        .map((item, index) => (
                          <div className="icon" key={index}>
                            {Ammenities[item] ? (
                              <img
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  margin: "0 14px",
                                }}
                                src={Ammenities[item]}
                                alt=""
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </Link>
              </DashBoardBody.SoldCard>
            ))
          )}
        </DashBoardBody.Row>
      </DashBoardBody>
    </>
  );
}

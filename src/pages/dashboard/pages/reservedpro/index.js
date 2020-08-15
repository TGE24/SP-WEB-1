import React, { useEffect, useState } from "react";
import { Select } from "antd";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../property/Loader";
import { fetchReservedHouse } from "store/reserved_propety/actions";

export default function ReservedProperty() {
  const reserved = useSelector((state) => state.reserved.data);
  const { loading } = useSelector((state) => state.reserved);
  const [data, setData] = useState([]);
  const [option, setOption] = useState("Properties");
  const { Option } = Select;
  function handleChange(value) {
    const newData = reserved?.houses?.concat(reserved?.lands);
    switch (value) {
      case "all":
        setData(newData);
        setOption("Properties");
        break;
      case "house":
        setData(reserved?.houses);
        setOption("Houses");
        break;
      case "land":
        setData(newData);
        setOption("Lands");
        break;

      default:
        setData(newData);
        setOption("Properties");
        break;
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservedHouse());
  }, [dispatch]);
  useEffect(() => {
    const newData = reserved?.houses?.concat(reserved?.lands);
    setData(newData);
  }, [reserved]);

  return (
    <>
      <DashBoardBody.Header>
        <h1>Reserved Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header">
          <h1 style={{ marginTop: "10px" }}>Reserved {option}</h1>
          <div className="sort-by">
            <Select
              defaultValue="Sorted By"
              style={{ width: 160 }}
              onChange={handleChange}
              className="select-sort"
            >
              <Option value="all">All</Option>
              <Option value="house">Houses</Option>
              <Option value="land">Lands </Option>
            </Select>
          </div>
        </div>
        <DashBoardBody.Row>
          {loading ? (
            <Loader />
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
                      <img src={item?.take_two_images[0]?.img_url} alt="" />
                      <div className="apartment">
                        <h4>
                          {option === "Houses"
                            ? item?.house_subcategory?.subcategory_name
                            : item?.land_category?.land_category}
                        </h4>
                      </div>
                    </div>

                    <div className="prop-details">
                      <div className="inner-container">
                        <h2>{item?.name}</h2>
                        {/* <h4>
                        <img
                          src="../assets/icons/location.png"
                          alt=""
                        />
                        {item?.location}
                      </h4> */}
                      </div>
                    </div>

                    <div className="prop-icons">
                      {item?.amenities?.slice(1, 4).map((item, index) => (
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

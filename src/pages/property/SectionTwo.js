import React, { useState, useEffect } from "react";
import { Row, Col, Pagination, Radio } from "antd";
import { PropSectionTwo } from "./styled";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getHouses, getLands } from "store/properties/actions";
import Loader from "./Loader";
import { formatMoney } from "helpers/formatter";

const radioOptions = [
  { label: "Houses", value: "Houses" },
  { label: "Lands", value: "Lands" },
];

export default () => {
  const [housesArr, setHouses] = useState([]);
  const [pagination, setPagination] = useState();
  const [option, setOption] = useState("Houses");
  const [page, setPage] = useState(1);
  const { loading } = useSelector((state) => state.properties);
  const properties = useSelector((state) => state.properties.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (option === "Houses") {
      dispatch(getHouses(page));
    } else {
      dispatch(getLands(page));
    }
  }, [dispatch, page, option]);

  useEffect(() => {
    if (option === "Houses") {
      setHouses(properties?.houses?.data);
      setPagination(properties?.houses?.total);
    } else {
      setHouses(properties?.data?.data);
      setPagination(properties?.data?.total);
    }
  }, [properties, option]);
  return (
    <PropSectionTwo>
      <div className="row-head">
        {/* <h1>{option}</h1> */}
        <div className="sort-by">
          <Radio.Group
            size="large"
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
      <Row
        gutter={[32, 32]}
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          housesArr?.map((item, index) => (
            <Link
              href="/properties/[pid]"
              as={`/properties/${item?.slug}`}
              key={index}
              passHref
            >
              <Col
                xs={20}
                sm={20}
                md={10}
                lg={6}
                xl={6}
                key={index}
                style={{ cursor: "pointer", padding: 0 }}
              >
                <div className="prop-cards">
                  <div className="image">
                    <img
                      src={item?.take_two_images[0]?.img_url}
                      alt=""
                    />
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
                      <h4>{item?.state + ", " + item?.lga}</h4>
                      <h4>{"₦" + formatMoney(item?.price)}</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Link>
          ))
        )}
      </Row>
      <Pagination
        total={pagination}
        current={page}
        onChange={(page) => {
          setPage(page);
        }}
        hideOnSinglePage={true}
        style={{ textAlign: "center" }}
      />
    </PropSectionTwo>
  );
};

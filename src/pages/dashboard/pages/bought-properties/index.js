import React, { useEffect, useState } from "react";
import DashBoardBody from "styles/dashbord_body";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoughtProperty } from "store/bought_property/actions";
import Link from "next/link";
import Loader from "../../../property/Loader";
import { formatMoney } from "helpers/formatter";

export default function ReservedProperty() {
  const bought = useSelector((state) => state.boughtProperty.data);
  const { loading } = useSelector((state) => state.boughtProperty);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoughtProperty());
  }, [dispatch]);
  useEffect(() => {
    const newData = bought?.houses?.concat(bought?.lands);
    setData(newData);
  }, [bought]);

  return (
    <>
      <DashBoardBody.Header>
        <h1>Bought Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Row>
          {loading ? (
            <Loader number={3} />
          ) : (
            data?.map((item, index) => (
              <DashBoardBody.SoldCard key={index}>
                <Link
                  href="/property/[pid]"
                  as={`/property/${item?.slug}`}
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
                    </div>

                    <div className="prop-details">
                      <div className="inner-container">
                        <h2>{item?.name}</h2>
                        <h4>{item?.state + ", " + item?.lga}</h4>
                        <h4>{"₦" + formatMoney(item?.price)}</h4>
                      </div>
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

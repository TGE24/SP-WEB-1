import React, { useEffect } from "react";
import Properties from "pages/property";
import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "store/properties/actions";
import Layout from "components/Layout";

const AllProperties = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const houses = useSelector((state) => state.properties.data);

  return (
    <Layout>
      <Properties HousesProp={houses?.houses?.data} />
    </Layout>
  );
};

export default AllProperties;

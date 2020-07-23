import React, { useEffect } from "react";
import Properties from "../src/pages/property";
import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../store/properties/actions";

const AllProperties = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  // const loading = useSelector((state) => state.Properties.loading);
  const houses = useSelector((state) => state.properties.data);

  return <Properties HousesProp={houses?.houses} />;
};

export default AllProperties;

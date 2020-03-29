import React from "react";
import { PropSectionOne } from "./styled";
import Search from "../../components/propertySearch";

export default () => {
  return (
    <PropSectionOne>
      <div className="over-lay">
        <h1>Buy, Rent, Mortgage</h1>
        <h2>comfortable, affordable, exotic, unique</h2>
        <Search />
      </div>
    </PropSectionOne>
  );
};

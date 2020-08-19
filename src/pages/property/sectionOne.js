import React from "react";
import { PropSectionOne } from "./styled";
import Search from "../../components/propertySearch";

export default () => {
  return (
    <PropSectionOne>
      <div className="over-lay">
        <h1>Buy | Rent | Save | Mortgage</h1>
        <h2 style={{textTransform: "uppercase"}} >your choice property now!</h2>
        <Search />
      </div>
    </PropSectionOne>
  );
};

import React from "react";
import { PropSectionOne } from "./styled";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Search from "../../components/search";

export default () => {
  return (
    <PropSectionOne>
      <div className="over-lay">
        <Zoom right cascade>
          <h1>Buy, Rent , mortgage</h1>
        </Zoom>
        <Rotate top right cascade>
          <h2>comfortable, affordable,exotic,un uniquevvv</h2>
        </Rotate>

        <Search />
      </div>
    </PropSectionOne>
  );
};

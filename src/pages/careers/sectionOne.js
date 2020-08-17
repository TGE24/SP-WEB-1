import React from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import { CareerSectionOne } from "./styled";

export default () => {
  return (
    <CareerSectionOne>
      <div className="over-lay">
        <Zoom right cascade>
          <h1>We dont just serve , we employ!</h1>
        </Zoom>
        {/* <Rotate top right cascade>
          <h2>comfortable, affordable,exotic,un uniquevvv</h2>
        </Rotate> */}
      </div>
    </CareerSectionOne>
  );
};

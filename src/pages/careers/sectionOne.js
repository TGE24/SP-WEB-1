import React from "react";
import Zoom from "react-reveal/Zoom";
import { CareerSectionOne } from "./styled";

export default () => {
  return (
    <CareerSectionOne>
      <div className="over-lay">
        <Zoom right cascade>
          <h1>We dont just serve , we employ!</h1>
        </Zoom>
      </div>
    </CareerSectionOne>
  );
};

import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./SectionTwo";

export default ({ HousesProp }) => {
	return (
		<>
			<SectionOne />
			<SectionTwo HousesProp={HousesProp} />
		</>
	);
};

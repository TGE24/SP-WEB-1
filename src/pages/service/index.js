import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "../home/SectionTwo";

import SectionThree from "./sectionThree";
// import SectionFour from "./sectionFour";
// import SectionFive from "./sectionFive";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
export default () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* 
            
            <SectionFour />
            <SectionFive /> */}
      <Footer />
    </>
  );
};

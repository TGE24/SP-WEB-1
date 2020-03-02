import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
export default () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  );
};

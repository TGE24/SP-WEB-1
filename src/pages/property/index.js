import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./SectionTwo";
import Layout from "../../components/Layout";
export default () => {
  return (
    <Layout title="Properties">
      <SectionOne />
      <SectionTwo />
    </Layout>
  );
};

import "./index.css";
import Flip from "react-reveal/Flip";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <Flip right>
      <SectionFour />
    </Flip>
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
  </Layout>
);

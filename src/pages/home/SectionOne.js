import NavBar from "../../components/navbar";
import Search from "../../components/search";
import { Layout } from "antd";
import "./index.css";

const { Content } = Layout;

export default () => (
  <>
    <Content>
      <NavBar />
      <div className="background">
        <h1>Beauty, Luxury, Comfort</h1>
        <p>
          enjoy the beauty and luxry of peace and beauty away from
          home
        </p>
        <Search />
      </div>
    </Content>
  </>
);

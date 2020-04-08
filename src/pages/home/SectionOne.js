import Search from "../../components/search";
import { Layout, Button } from "antd";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

const { Content } = Layout;

export default () => (
  <>
    <Content>
      <div className="background">
        <Zoom right cascade>
          <h1>Beauty, Luxury, Comfort</h1>
        </Zoom>
        <Rotate top right cascade>
          <p>
            enjoy the beauty and luxry of peace and beauty away from
            home
          </p>
        </Rotate>
        <Button className="buy-now">Buy Now</Button>
        <Search />
      </div>
    </Content>
  </>
);

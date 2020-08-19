import { Layout, Carousel, Rate, Empty } from "antd";
import { SectionSix, Testimony, Testimonials } from "./styled";

const { Content } = Layout;

export default () => (
  <SectionSix>
    <Content
      style={{
        padding: "60px 50px",
        background: "whitesmoke",
      }}
    >
      <Testimonials>
        <h3>Client Testimonies</h3>
        <h5>What people are saying about us</h5>
        {testimony.length === 0 ? (
          <Empty description={<span>NO TESTIMONIES YET</span>} />
        ) : (
          <Carousel autoplay>
            {testimony.map((item, index) => (
              <Testimony key={index}>
                <img className="elipse" src={item.image} alt="pic" />
                <div style={{ position: "relative", top: "-26px" }}>
                  <h4>{item.title}</h4>
                  <h6>{item.content}</h6>
                  <h6>
                    <span style={{ color: "#F9A602" }}>
                      {item.name}
                    </span>{" "}
                    -{item.email}
                  </h6>
                </div>
                <Rate allowHalf value={item.rate} />
              </Testimony>
            ))}
          </Carousel>
        )}
      </Testimonials>
    </Content>
  </SectionSix>
);

const testimony = [];

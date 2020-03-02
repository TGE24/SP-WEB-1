import { Layout, Carousel, Rate } from "antd";
import { SectionSix, Testimony, Testimonials } from "./styled";
import "./index.css";

const { Content } = Layout;

export default () => (
  <SectionSix>
    <Content
      style={{
        padding: "60px 50px",
        background: "whitesmoke"
      }}
    >
      <Testimonials>
        <h3>Client Testimonies</h3>
        <h5>Lorem ipsum dolor et mum pas deryt feuityqu</h5>

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
      </Testimonials>
    </Content>
  </SectionSix>
);

const testimony = [
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 2.5
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 3.5
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 1.5
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 2
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 5
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 2.5
  },
  {
    image: "/assets/testimony.png",
    content:
      "Lorem ipsum dolor sit Dictum consectetur adipiscing elit. Dictum turpis tincidunt",
    name: "Ann Erim",
    email: "classicui4@gmail.com",
    title: "Exclusive Service",
    rate: 4.5
  }
];

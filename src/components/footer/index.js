import { Row, Col } from "antd";
import { FooterContainer } from "styles/footerStyled";
export default () => (
  <FooterContainer>
    <div>
      <Row>
        <Col xs={24} sm={24} md={8} lg={8} xl={5} id="footer-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </Col>
        {/* <div className="footer-content"> */}
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <div className="container-item">
            <h1>SERVICES</h1>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <div className="container-item">
            <h1>CONTACT US</h1>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Affilate</li>
              <li>
                <a>(+234)70-800-7373</a>
              </li>
              <li>
                <a>info@Spreadpro.com </a>
              </li>
            </ul>
          </div>
        </Col>
        {/* </div> */}

        {/* <Col xs={24} sm={2} md={24} lg={24} xl={9}>
          <div className="news-letter">
            <h1 id="news">News Letter</h1>
            <div className="newsletter">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </Col> */}
      </Row>
    </div>
    <div className="copy">
      © Copyright 2019 Spreadpro. All Rights Reserved.
    </div>
  </FooterContainer>
);

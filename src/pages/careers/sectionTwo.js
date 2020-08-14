import React from "react";
import { Row, Col } from "antd";
import { CareerSectionTwo } from "./styled";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import { useSelector, useDispatch } from "react-redux";
import { fetchCareer } from "store/career/actions";
import Loader from "../property/Loader";

export default () => {
  const careers = useSelector((state) => state.careers.data);
  const loading = useSelector((state) => state.careers.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (careers == null) {
      dispatch(fetchCareer());
    }
  }, [dispatch]);

  console.log(careers);
  return (
    <CareerSectionTwo>
      <div className="header">
        <Zoom left cascade>
          <h1>Spread Careers</h1>
        </Zoom>
        <Rotate top right cascade>
          <h2>
            We have Experts in variours feel ready to provide quality services
          </h2>
        </Rotate>
      </div>
      <div className="card-container">
        <Row>
          {loading ? (
            <Loader />
          ) : (
            careers?.careers.map((item, index) => (
              <Col xs={24} sm={2} md={10} lg={6} xl={6} key={index}>
                <Flip top cascade>
                  <div className="career-card">
                    <img src={item.image} alt="" />
                    <div className="card-details">
                      <h1>{item.name}</h1>
                      <hr />
                      <h2>{item.description}</h2>
                      <button>Apply</button>
                    </div>
                  </div>
                </Flip>
              </Col>
            ))
          )}
        </Row>
      </div>
    </CareerSectionTwo>
  );
};

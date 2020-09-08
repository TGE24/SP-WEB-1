import React from "react";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "antd";

export default function Loader() {
  return (
    <>
      <Skeleton height={322} />
      <div className="container">
        <Row gutter={[24, 24]} className="cont-row">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div style={{ width: "840px", margin: "auto" }}>
              <div className="prop-heading">
                <span>
                  <Skeleton width={80} height={48} />
                </span>
                <span>
                  <span style={{ margin: "10px" }}>
                    <Skeleton width={80} height={42} />
                  </span>
                  <span style={{ margin: "10px" }}>
                    <Skeleton width={80} height={42} />
                  </span>
                  <span style={{ margin: "10px" }}>
                    <Skeleton width={80} height={42} />
                  </span>
                </span>
              </div>
              <Skeleton width={842} height={586} />
            </div>
            <>
              <div style={{ width: "840px", margin: "91.15px auto" }}>
                <Skeleton width={80} height={15} />
                <Skeleton height={404} />
              </div>
            </>
            <>
              <div
                style={{ width: "840px", margin: "auto" }}
                className="overview-text"
              >
                <Skeleton width={842} height={113} />
              </div>
              <div
                style={{
                  width: "840px",
                  margin: "auto",
                }}
                className="amenities-details"
              >
                <Skeleton width={842} height={113} />
              </div>
            </>
            <div
              style={{
                margin: "91.15px auto ",
                width: "840px",
              }}
              className="prop-video-cont"
            >
              <Skeleton width={840} height={482} />
            </div>
            <div
              style={{
                margin: "91.15px auto ",
                width: "840px",
              }}
              className="location"
            >
              <Skeleton width={840} height={482} />
            </div>
          </Col>
          {/* <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div
              style={{
                width: "314px",
                height: "548px",
                background: "whitesmoke",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="avatar-cont"
            >
              <div style={{ textAlign: "center", margin: "18px" }}>
                <>
                  <Skeleton width={150.58} height={150.58} />
                  <Skeleton width={150.58} height={150.58} />
                </>
              </div>
            </div>
            <div style={{ marginTop: "53px", textAlign: "center" }}>
              <Skeleton width={264} height={188} />
              <Skeleton width={264} height={188} />
              <Skeleton width={264} height={188} />
            </div>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

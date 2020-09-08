import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 867px;
  // @media screen and (max-width: 767px) {

  // }
`;

export default function ListLoader({ number = 4 }) {
  const list = [...Array(number).keys()];

  return (
    <>
      {list.map((_, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          <Skeleton height={88} />
        </div>
      ))}
    </>
  );
}

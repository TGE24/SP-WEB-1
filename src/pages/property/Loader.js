import React from "react";
import Skeleton from "react-loading-skeleton";

export default function ListLoader({ number = 4 }) {
  const list = [...Array(number).keys()];

  return (
    <div style={{ display: "flex" }}>
      {list.map((_, index) => (
        <div style={{ marginLeft: 10 }} key={index}>
          <Skeleton width={269} height={290} />
        </div>
      ))}
    </div>
  );
}

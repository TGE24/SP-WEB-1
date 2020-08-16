import React from "react";
import Skeleton from "react-loading-skeleton";
import { LoaderCont } from "./styled";

export default function ListLoader({ number = 4 }) {
  const list = [...Array(number).keys()];

  return (
    <LoaderCont>
      {list.map((_, index) => (
        <div className="load" key={index}>
          <Skeleton height={290} />
        </div>
      ))}
    </LoaderCont>
  );
}

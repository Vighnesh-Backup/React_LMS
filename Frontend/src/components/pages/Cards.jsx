import React from "react";
import { Card } from "./Card";

export function Cards(props) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-7 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

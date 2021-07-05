import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../store/action";

export function Example() {
  const setedColor = useSelector((state) => state.color);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ color: setedColor }}>dasdasd</h1>
      <button onClick={() => dispatch(changeColor("red"))}>Click</button>
    </>
  );
}

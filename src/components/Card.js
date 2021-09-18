import TypeOfWorkPage from "../pages/TypeOfWorkPage";
import { useState } from "react";
import { useEffect } from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ background: `${props.background}` }} onClick={props.onClick}>
      <h2>{props.taskName}</h2>
      <p>{props.description}</p>
    </div>
  );
}

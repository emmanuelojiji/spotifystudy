import "./MoodCard.scss";
import MoodPage from "../pages/MoodPage";
import { useState } from "react";

export default function MoodCard(props) {
  return (
    <button
      className="mood-card"
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <figure
        style={{ backgroundImage: `url('${props.backgroundImage}')` }}
      ></figure>
      <h1>{props.name}</h1>
      {props.isHover && (
        <div className="play-button-container">
          <i className="fas fa-play"></i>
        </div>
      )}
    </button>
  );
}

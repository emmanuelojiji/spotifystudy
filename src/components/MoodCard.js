import "./MoodCard.scss";
import MoodPage from "../pages/MoodPage";
import { useState } from "react";

export default function MoodCard(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="mood-card"
      onClick={props.playSound}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ border: props.showBorder }}
    >
      <figure
        style={{ backgroundImage: `url('${props.backgroundImage}')` }}
      ></figure>
      <h1>{props.name}</h1>

      <div
        className="play-button-container"
        style={{
          opacity: isHover && "1",
          display: props.hidePlayButton && "none",
        }}
      >
        <i className="fas fa-play" />
      </div>

      <div
        className="pause-button-container"
        style={{ display: props.showPauseButton && "flex" }}
        onClick={props.pauseSound}
      >
        <i className="fas fa-pause" />
      </div>
    </button>
  );
}

import "./MoodCard.scss";
import MoodPage from "../pages/MoodPage";
import { useState } from "react";

export default function MoodCard(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="button-volume-wrap">
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
          className="pause-button-container "
          style={{ display: props.showPauseButton && "flex" }}
          onClick={props.pauseSound}
        >
          <i className="fas fa-pause" />
        </div>
      </button>

    <div className="volume-icon-wrap" style={{display: props.showVolume, opacity: props.opacity}}> <svg
        role="presentation"
        height="16"
        width="16"
        aria-label="Volume off"
        className="volume-icon"
        viewBox="0 0 16 16"
       
      >
        <path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"></path>
      </svg>
      <input type="range"></input>
      <svg
        role="presentation"
        height="16"
        width="16"
        aria-label="Volume high"
        className="volume-icon"
        viewBox="0 0 16 16"
  
      >
        <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
      </svg></div>
   </div>
  );
}

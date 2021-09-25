import "./MoodPage.scss";
import { useEffect, useState } from "react";
import MoodCard from "../components/MoodCard";
import ProfileButton from "../components/ProfileButton";
import { useRef } from "react";
import { MoodCardInfo } from "./MoodCardInfo";

export default function MoodPage(props) {
  const audioRef = useRef(null);

  const [currentSound, setCurrentSound] = useState(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    console.log(currentSound);
    console.log(isSoundPlaying);
  });

  return (
    <>
      {/*<audio loop="true" className="audio" ref={audioRef}>
        <source src={currentSound} />
  </audio>*/}

      {MoodCardInfo.map((audioMap) => (
        <audio loop="true" className="audio" ref={audioRef}>
          <source src={audioMap.sound} />
        </audio>
      ))}

      <div className="mood-container">
        <header>
          <ProfileButton />
        </header>

        <h1 className="choose-mood">Choose a mood</h1>

        <div className="nature-container">
          <h1 className="row-title">Nature</h1>
          <section className="mood-row">
            {MoodCardInfo.map((info) => (
              <>
                <MoodCard
                  name={info.name}
                  backgroundImage={info.image}
                  playSound={() => {
                    setCurrentSound(info.sound);
                    audioRef.current.load();
                    audioRef.current.play();
                    audioRef.current.play && setIsSoundPlaying(true);
                  }}
                  pauseSound={(event) => {
                    audioRef.current.pause();
                    setIsSoundPlaying(false);
                    console.log("paused");
                    event.stopPropagation();
                  }}
                  hidePlayButton={isSoundPlaying}
                  showPauseButton={isSoundPlaying}
                />
              </>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

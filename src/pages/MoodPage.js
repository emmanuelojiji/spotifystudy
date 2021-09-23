import "./MoodPage.scss";
import { useEffect, useState } from "react";
import MoodCard from "../components/MoodCard";
import ProfileButton from "../components/ProfileButton";
import { useRef } from "react";

import { MoodCardInfo } from "./MoodCardInfo";


export default function MoodPage() {
  const [currentSound, setCurrentSound] = useState(null);

  const audio = useRef(null);

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    currentSound && audio.current.play();
    console.log(isHover);
  });

  return (
    <>
      {currentSound && (
        <audio loop="true" className="audio" ref={audio}>
          <source src={currentSound} />
        </audio>
      )}

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
                  onClick={() => setCurrentSound(info.sound)}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  isHover={isHover}
                />
              </>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

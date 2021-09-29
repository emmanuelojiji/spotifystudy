import "./MoodPage.scss";
import { useEffect, useState } from "react";
import MoodCard from "../components/MoodCard";
import ProfileButton from "../components/ProfileButton";
import { useRef } from "react";
import { MoodCardInfo } from "./MoodCardInfo";

export default function MoodPage(props) {
  const RainAudioRef = useRef(null);
  const OceanAudioRef = useRef(null);
  const ThunderAudioRef = useRef(null);
  const WaterfallAudioRef = useRef(null);
  const NightForestAudioRef = useRef(null);

  const [isRainSoundPlaying, setIsRainSoundPlaying] = useState(false);
  const [isOceanSoundPlaying, setIsOceanSoundPlaying] = useState(false);
  const [isThunderSoundPlaying, setIsThunderSoundPlaying] = useState(false);
  const [isWaterfallSoundPlaying, setIsWaterfallSoundPlaying] = useState(false);
  const [isNightForestSoundPlaying, setIsNightForestSoundPlaying] =
    useState(false);

  const borderStyle = "solid 1px #666666";

  const [soundPlaying, setSoundPlaying] = useState([]);

  return (
    <>
      <audio loop="true" className="audio" ref={RainAudioRef}>
        <source src={MoodCardInfo[0].sound} />
      </audio>
      <audio loop="true" className="audio" ref={OceanAudioRef}>
        <source src={MoodCardInfo[1].sound} />
      </audio>
      <audio loop="true" className="audio" ref={ThunderAudioRef}>
        <source src={MoodCardInfo[2].sound} />
      </audio>
      <audio loop="true" className="audio" ref={WaterfallAudioRef}>
        <source src={MoodCardInfo[3].sound} />
      </audio>
      <audio loop="true" className="audio" ref={NightForestAudioRef}>
        <source src={MoodCardInfo[4].sound} />
      </audio>

      <div className="mood-container">
        <header>
          <ProfileButton />
        </header>

        <h1 className="choose-mood">Choose a mood</h1>

        <div className="nature-container">
          <h1 className="row-title">Nature</h1>
          <section className="mood-row">
            <MoodCard
              name={MoodCardInfo[0].name}
              backgroundImage={MoodCardInfo[0].image}
              playSound={() => {
                RainAudioRef.current.load();
                RainAudioRef.current.play();
                RainAudioRef.current.play && setIsRainSoundPlaying(true);
                RainAudioRef.current.play && setSoundPlaying("rain playing");
                console.log(soundPlaying);
              }}
              pauseSound={(event) => {
                RainAudioRef.current.pause();
                setIsRainSoundPlaying(false);
                console.log("paused");
                event.stopPropagation();
              }}
              hidePlayButton={isRainSoundPlaying}
              showPauseButton={isRainSoundPlaying}
              showBorder={isRainSoundPlaying && borderStyle}
              showVolume={isRainSoundPlaying && "flex"}
            />

            <MoodCard
              name={MoodCardInfo[1].name}
              backgroundImage={MoodCardInfo[1].image}
              playSound={() => {
                OceanAudioRef.current.load();
                OceanAudioRef.current.play();
                OceanAudioRef.current.play && setIsOceanSoundPlaying(true);
              }}
              pauseSound={(event) => {
                OceanAudioRef.current.pause();
                setIsOceanSoundPlaying(false);
                console.log("paused");
                event.stopPropagation();
              }}
              hidePlayButton={isOceanSoundPlaying}
              showPauseButton={isOceanSoundPlaying}
              showBorder={isOceanSoundPlaying && borderStyle}
              showVolume={isOceanSoundPlaying && "flex"}
            />

            <MoodCard
              name={MoodCardInfo[2].name}
              backgroundImage={MoodCardInfo[2].image}
              playSound={() => {
                ThunderAudioRef.current.load();
                ThunderAudioRef.current.play();
                ThunderAudioRef.current.play && setIsThunderSoundPlaying(true);
              }}
              pauseSound={(event) => {
                ThunderAudioRef.current.pause();
                setIsThunderSoundPlaying(false);
                console.log("paused");
                event.stopPropagation();
              }}
              hidePlayButton={isThunderSoundPlaying}
              showPauseButton={isThunderSoundPlaying}
              showBorder={isThunderSoundPlaying && borderStyle}
            />

            <MoodCard
              name={MoodCardInfo[3].name}
              backgroundImage={MoodCardInfo[3].image}
              playSound={() => {
                WaterfallAudioRef.current.load();
                WaterfallAudioRef.current.play();
                WaterfallAudioRef.current.play &&
                  setIsWaterfallSoundPlaying(true);
              }}
              pauseSound={(event) => {
                WaterfallAudioRef.current.pause();
                setIsWaterfallSoundPlaying(false);
                console.log("paused");
                event.stopPropagation();
              }}
              hidePlayButton={isWaterfallSoundPlaying}
              showPauseButton={isWaterfallSoundPlaying}
              showBorder={isWaterfallSoundPlaying && borderStyle}
            />

            <MoodCard
              name={MoodCardInfo[4].name}
              backgroundImage={MoodCardInfo[4].image}
              playSound={() => {
                NightForestAudioRef.current.load();
                NightForestAudioRef.current.play();
                NightForestAudioRef.current.play &&
                  setIsNightForestSoundPlaying(true);
              }}
              pauseSound={(event) => {
                NightForestAudioRef.current.pause();
                setIsNightForestSoundPlaying(false);
                console.log("paused");
                event.stopPropagation();
              }}
              hidePlayButton={isNightForestSoundPlaying}
              showPauseButton={isNightForestSoundPlaying}
              showBorder={isNightForestSoundPlaying && borderStyle}
            />
          </section>
        </div>
      </div>
    </>
  );
}

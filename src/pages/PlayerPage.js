import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PlayerPage.scss";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import ProfileButton from "../components/ProfileButton";
import Work from "./Work";
import Mood from "./MoodPage";
import PlayingState from "../PlayingState";

export default function PlayerPage(props) {
  const { state } = useLocation();

  return (
    <>
      <div className="player-page-main">
        <div className="sidebar-main-wrap">
          <Sidebar />
          <main>
            <Mood />
          </main>
        </div>
        <Player songPlaying={props.songPlaying} />
      </div>
    </>
  );
}

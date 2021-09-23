import "./Player.scss";
import PlayingState from "../PlayingState";
import {useState} from 'react'


export default function Player(props) {

  return (
    <>
      <div className="player-container">
        <figure className="song-cover-container">
          <img
            className="song-cover"
            src="https://i.scdn.co/image/ab67616d0000b27360e232dede80f62f9bfc8eda"
            alt="song-cover"
          />
        </figure>
        <div>
          <h1 className="song-title">{props.songPlaying}</h1>
          <p className="artist">Burna Boy</p>
        </div>
      </div>

    </>
  );
}

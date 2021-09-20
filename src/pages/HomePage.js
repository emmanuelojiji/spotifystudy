import { React, useState } from "react";
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import "../pages/HomePage.scss";
import { auth_url } from "../login";

import Sidebar from "../components/Sidebar";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <section className="billboard">
        <div class="circle-1"></div>
        <div class="circle-1-2"></div>
        <div class="circle-2"></div>
        <div class="billboard-wrap">
          <h1>Focus, With Spotify.</h1>
          <p>
            Time your work sessions while listening to your favourite songs.
          </p>
          <a href={auth_url}>
            <button>START SESSION</button>
          </a>
        </div>
      </section>

      <section className="spotify-mood">
        <h1>Spotify Mood</h1>
        <p>Listen to calming sounds to increase productivity</p>
        <Link to="/PlayerPage"><button>START LISTENING</button></Link>
      </section>
    </div>
  );
}

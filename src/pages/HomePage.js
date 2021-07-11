import {React, useState }from "react";

import Header from "../components/Header";
import "../pages/HomePage.scss";
import { auth_url } from "../login";


export default function HomePage() {

  return (
    <>
      <Header />
      <section className="billboard">
        <div class="circle-1"></div>
        <div class="circle-1-2"></div>
        <div class="circle-2"></div>
        <div class="billboard-wrap">
          <h1>
            Focus With Spotify
          </h1>
          <p>
            Time your work sessions while listening to your favourite songs.
          </p>
          <a href={auth_url}>
          <button>START SESSION</button>
          </a>
        </div>
      </section>

      
    </>
  );
}

import {React, useState }from "react";

import Header from "./Header";
import Button from "./Button";
import "./Button.scss";
import "./Billboard.scss";
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
            Make studying <br class="line-break" />
            fun again
          </h1>
          <p>
            Time your work sessions while listening to your favourite songs.{" "}
          </p>
          <a href={auth_url}>
            <Button text="START SESSION" />
          </a>
        </div>
      </section>

      
    </>
  );
}

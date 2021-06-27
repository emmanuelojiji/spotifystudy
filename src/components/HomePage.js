import React from "react";
import { Link } from "react-router-dom";
import { auth_url } from "../login";
import Header from "./Header";
import Button from "./Button";
import "./Button.scss";
import "./Billboard.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="billboard">
        <div class="billboard-wrap">
          <h1>Make studying <br class="line-break"></br>fun again.</h1>
          <a href={auth_url}>
            <Button text="START SESSION" />
          </a>
        </div>
      </section>
    </>
  );
}

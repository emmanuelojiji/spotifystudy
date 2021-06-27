import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";

import TypeOfWorkPage from "./components/TypeOfWorkPage";

import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./login";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/typeOfWork" component={TypeOfWorkPage} />
      </Switch>
    </>
  );
}

export default App;

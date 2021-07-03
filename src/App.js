import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";

import TypeOfWorkPage from "./components/TypeOfWorkPage";
import PlayerPage from "./components/PlayerPage";


const code = new URLSearchParams(window.location.search).get("code");

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/typeOfWork" component={TypeOfWorkPage} />
        <Route exact path="/PlayerPage" component={PlayerPage} />
      </Switch>
    </>
  );
}



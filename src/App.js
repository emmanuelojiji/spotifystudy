import "./App.scss";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";

import TypeOfWorkPage from "./pages/TypeOfWorkPage";
import PlayerPage from "./pages/PlayerPage";


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



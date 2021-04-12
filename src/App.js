import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import DownloadPage from "./components/DownloadPage";
import HomePage from "./components/HomePage";
import TypeOfWorkPage from "./components/TypeOfWorkPage";

import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";

import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

export const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("hey", user.display_name);
      });
    }

    console.log("Token:", token);
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/typeOfWork" component={TypeOfWorkPage} />
      </Switch>


      {token ? <Redirect to="/typeOfWork" /> : null}
    </>
  );
}

export default App;

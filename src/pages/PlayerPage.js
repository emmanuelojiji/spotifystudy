import { useLocation } from "react-router-dom";
import "./PlayerPage.scss";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import ProfileButton from "../components/ProfileButton";

export default function PlayerPage() {
  const { state } = useLocation();
  return (
    <>
      <div className="player-page-main">
        <Sidebar />
        <main>
         {/*Toggle components here*/}
        </main>
      </div>
      <Player />
    </>
  );
}

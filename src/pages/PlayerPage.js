import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Timer from "../components/Timer"
import "./PlayerPage.scss";


export default function PlayerPage(title) {
  return (
    <>
      <HeaderLoggedIn />

      <main className="player-page-main">
        <div className="player-page-main-wrap">
          <div className="timer-title-wrap">
          <Timer />
          <h2 className="task-title">Task Title</h2>
          </div>
        </div>
      </main>
    </>
  );
}

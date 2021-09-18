import Header from "../components/Header";
import Timer from "../components/Timer";
import "./PlayerPage.scss";
import "./TypeOfWorkPage";
import { useLocation } from 'react-router-dom';

export default function PlayerPage() {
  const { state } = useLocation();
  return (
    <>
      <Header />
      <main className="player-page-main">
        <div className="player-page-main-wrap">
          <div className="timer-title-wrap">
            <Timer />
            <h2 className="task-title">{state.task}</h2>
          </div>
        </div>
      </main>
    </>
  );
}

import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import "../components/CardContainer.scss";

export default function TypeOfWorkPage() {
  return (
    <>
      <Header />

      <section className="card-container">
        <div className="global-wrap">
          <h1>Choose your work style</h1>

          <div className="card-wrap">
            <Link to="/player">
              <Card
                title="Short Task"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue quam a semper accumsan."
                background="#3ee18e"
              />
            </Link>
            <Link to="/player">
              <Card
                title="Deep Work"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue quam a semper accumsan."
                background="#ee749d"
              />
            </Link>
            <Link to="/player">
              <Card
                title="Pomodoro"
                description="The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,"
                background="#e42537"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

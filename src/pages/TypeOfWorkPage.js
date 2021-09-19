import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../pages/TypeOfWork.scss";
import ProfileButton from "../components/ProfileButton";
import Header from "../components/Header";
import "./PlayerPage";

export default function TypeOfWorkPage() {
  const date = new Date();
  const time = date.getHours();
  let timeOfDay;

  if (time < 12) {
    timeOfDay = "Morning";
  } else if (time >= 12 && time < 6) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  const [greeting, setGreeting] = useState(timeOfDay)

  

  return (
    <>
      <Header background="#121212" />
      <main className="type-of-work-main">
        <div className="main-wrap">
          <section className="card-container">
            <h1>Good {timeOfDay}</h1>
            <h1>Choose Your Work Style</h1>

            <div className="card-wrap">
              <Link to={{
                  pathname: "/PlayerPage",
                  state: {
                    task: "Short Task",
                  },
                }}
              >
                <Card
                  taskName="Short Task"
                  description="This technique focuses on a quick 10 minute task."
                />
              </Link>
              <Link
                to={{
                  pathname: "/PlayerPage",
                  state: {
                    task: "Focus Block",
                  },
                }}
              >
                <Card
                  taskName="Focus Block"
                  description="This technique focuses on intense concentration for 90 minutes."
                />
              </Link>
              <Link
                to={{
                  pathname: "/PlayerPage",
                  state: {
                    task: "Pomodoro",
                  },
                }}
              >
                <Card
                  taskName="Pomodoro"
                  description="The technique uses a timer to break down work into 25 minute intervals."
                />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

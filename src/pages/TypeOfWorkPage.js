import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../pages/TypeOfWork.scss";
import ProfileButton from "../components/ProfileButton";
import HeaderLoggedIn from "../components/HeaderLoggedIn";

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

  return (
    <>
      <HeaderLoggedIn />
      <main className="type-of-work-main">
        <div className="main-wrap">
          <section className="card-container">
            <h1>Good {timeOfDay}</h1>
            <h1>Choose Your Work Style</h1>

            <div className="card-wrap">
              <Link to="/PlayerPage">
                <Card
                  title="Short Task"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Link>
              <Link to="/PlayerPage">
                <Card
                  title="Task Type"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Link>
              <Link to="/PlayerPage">
                <Card
                  title="Task Type"
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

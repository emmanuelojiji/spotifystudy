import "../components/CardContainer.css";
import Card from "./Card";

export default function CardContainer() {
  return (
    <section className="card-container">
      <div className="global-wrap">
        <h1>Choose your work style</h1>

        <div className='card-wrap'>
          <Card title='Short Task' description='The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,'/>
          <Card title='Deep Work' description='The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,'/>
          <Card title='Pomodoro' description='The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,'/>
        </div>
      </div>
    </section>
  );
}

import "./Mood.scss";
import MoodCard from "../components/MoodCard";
import ProfileButton from "../components/ProfileButton";

export default function Mood() {
  const moodCardInfo = [
    {
      name: "Rain",
      image: "https://via.placeholder.com/150",
    },

    {
      name: "Ocean Waves",
      image: "https://via.placeholder.com/150",
    },

    {
      name: "Thunder",
      image: "https://via.placeholder.com/150",
    },

    {
      name: "Placeholder",
      image: "https://via.placeholder.com/150",
    },

    {
      name: "Placeholder",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="mood-container">
      <header>
        <ProfileButton />
      </header>

      <h1 className="choose-mood">Choose a mood</h1>

      <div className="nature-container">
        <h1 className="row-title">Nature</h1>
        <section className="mood-row">
          {moodCardInfo.map((info) => (
              <>
            <MoodCard name={info.name} />
            </>
          ))}
        </section>
      </div>
    </div>
  );
}

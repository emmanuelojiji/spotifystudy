import "./MoodCard.scss";

export default function MoodCard(props) {
  return (
    <div className="mood-card">
    <img src="https://via.placeholder.com/150" />
    <h1>{props.name}</h1>
    
  </div>
  );
}

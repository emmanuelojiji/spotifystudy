export default function Card(props){
    return (
    <div className='card' style={{ background: `${props.background}`}}>
    
    <h1>{props.emoji}</h1>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>
    )
}
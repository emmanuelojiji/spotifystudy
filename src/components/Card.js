export default function Card(props){

    return (
    <div className='card' style={{ background: `${props.background}`}} >
    
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </div>
    )
 }

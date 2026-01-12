export default function Chip(props) {
  if (props.wrongGuessCount < props.id + 1) {
    return (
      <span style={{backgroundColor:props.backgroundColor, color:props.color}}>{props.name}</span>
    )
  } else {
    return (
      <span className="lost" style={{backgroundColor:props.backgroundColor, color:props.color}}>{props.name}</span>
    )
  }
}
export default function Letter(props) {
  return (
    <span>{props.shown ? props.letter : ''}</span>
  )
}
export default function Letter(props) {
  const isGuessed = props.guessedLetters.includes(props.letter)

  return (
    <span>{isGuessed ? props.letter.toUpperCase() : ''}</span>
  )
}
export default function Letter(props) {
  const isGuessed = props.guessedLetters.includes(props.letter)

  return (
    <span className={props.isGameLost? !isGuessed ? "not-guessed" : "guessed" : ""}>{isGuessed || props.isGameLost ? props.letter.toUpperCase() : ''}</span>
  )
}
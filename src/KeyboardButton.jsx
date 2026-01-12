import clsx from "clsx"

export default function KeyboardButton(props) {
  const isGuessed = props.guessedLetters.includes(props.letter)
  const isCorrect = isGuessed && props.currentWord.includes(props.letter)
  const isWrong = isGuessed && !props.currentWord.includes(props.letter)
  const classNames = clsx({
    correct: isCorrect,
    wrong: isWrong,
  })

  return <button 
      disabled={props.isGameOver}
      aria-disabled={props.isGameOver}
      aria-label= {`Letter ${props.letter}`}
      className={classNames}
      onClick={() => props.onClick(props.letter)}>
          {props.letter.toUpperCase()}
    </button>
}
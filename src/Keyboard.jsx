import KeyboardButton from "./KeyboardButton"

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keyboardButtons = alphabet.split("").map(l => <KeyboardButton key={l} letter={l} onClick={props.onClick} guessedLetters={props.guessedLetters} currentWord={props.currentWord}/>)

  return (
    <section className='keyboard'>
      {keyboardButtons}
    </section>
  )
}
import { useState } from 'react'
import { languages } from './languages'
import Chip from './Chip'
import Letter from './Letter'
import Keyboard from './Keyboard'

export default function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  const languagesElements = languages.map(
    (l, id) => <Chip name={l.name} color={l.color} backgroundColor={l.backgroundColor} key={id}/>
  )

  const letterElements = currentWord.split("").map(
    (letter, id) => <Letter letter={letter} guessedLetters={guessedLetters} key={id}/>
  )

  return (
    <>
      <header>
        <h1>Assembly Game</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      <section className='game-status'>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>

      <section className='language-chips'>
        {languagesElements}
      </section>

      <section className='word'>
        {letterElements}
      </section>

      <Keyboard onClick={addGuessedLetter} guessedLetters={guessedLetters} currentWord={currentWord}/>

      <button className="new-game">New Game</button>
    </>
  )
}
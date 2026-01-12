import { useState } from 'react'
import { languages } from './languages'
import Chip from './Chip'
import Letter from './Letter'
import Keyboard from './Keyboard'
import clsx from 'clsx'
import { getFarewellText } from './utils'

export default function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessedArray = guessedLetters.filter(letter => !currentWord.includes(letter))
  const wrongGuessCount = wrongGuessedArray.length
  const isGameLost = wrongGuessCount >= languages.length -1
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameLost || isGameWon
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return <p>{getFarewellText(languages[wrongGuessCount -1].name)}</p>
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  const languagesElements = languages.map(
    (l, id) => <Chip name={l.name} color={l.color} backgroundColor={l.backgroundColor} key={id} id={id} wrongGuessCount={wrongGuessCount}/>
  )

  const letterElements = currentWord.split("").map(
    (letter, id) => <Letter letter={letter} guessedLetters={guessedLetters} key={id}/>
  )

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect
  })

  return (
    <main>
      <header>
        <h1>Assembly Game</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatus()}
      </section>

      <section className='language-chips'>
        {languagesElements}
      </section>

      <section className='word'>
        {letterElements}
      </section>

      <section className="sr-only" aria-live="polite" role="status">
        <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
      </section>

      <Keyboard onClick={addGuessedLetter} guessedLetters={guessedLetters} currentWord={currentWord} isGameOver={isGameOver}/>

      {isGameOver ? <button className="new-game">New Game</button> : null}
    </main>
  )
}
import { useState } from 'react'
import { languages } from './languages'
import Chip from './Chip'
import Letter from './Letter'

export default function App() {
  const languagesElements = languages.map(
    (l, id) => <Chip name={l.name} color={l.color} backgroundColor={l.backgroundColor} key={id}/>
  )

  const [currentWord, setCurrentWord] = useState("react")

  const letterElements = currentWord.split("").map(
    (letter, id) => <Letter letter={letter.toUpperCase()} shown={true} key={id}/>
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
    </>
  )
}
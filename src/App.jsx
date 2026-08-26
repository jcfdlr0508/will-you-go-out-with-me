import { useState } from 'react'
import './App.css'
import { sendEmail } from './email.js'

function App() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [message, setMessage] = useState('Hi! will go on a date with me?')
  const [showPicture, setShowPicture] = useState(false)
  const [showButtons, setShowButtons] = useState(true)

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 500) - 100
    const y = Math.floor(Math.random() * 400) - 60
    setNoPos({ x, y })
  }

  const yesButton = () => {
    setMessage('She said yes!')
    setShowPicture(true)
    setShowButtons(false)
    sendEmail({ message: 'She said yes!' }).catch((error) => {
      alert('Failed to send: ' + JSON.stringify(error))
    })
  }

  return (
    <div className="box">
      <h1>{message}</h1>

      {showPicture && <img src="./src/assets/Thank you.gif" alt="Thank you" width={200} height={200} />}

      {showButtons && (
        <div className="box-button">
          <button onClick={yesButton}>Yes</button>
          <button
            className="no-button"
            onMouseEnter={moveNoButton}
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              position: 'relative',
              transition: 'transform 0.2s ease',
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  )
}

export default App

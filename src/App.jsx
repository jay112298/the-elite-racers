import { useState } from 'react'
import reactLogo from './assets/react.svg'
import eliteLogo from '/the-elite-racers.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={eliteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>The Elite Racers</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Launching Soon {/*{count} */}
        </button>
      </div>
      <p className="read-the-docs">
        Stay tuned to learn more
      </p>
    </div>
  )
}

export default App

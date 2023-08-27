import { useState } from 'react'
import eliteLogo from '../../assets/the-elite-racers.svg'
// import './Home.css'
import { AppWrap } from './Home.st'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <AppWrap>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={eliteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className='title'>The Elite Racers</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Launching Soon {/*{count} */}
        </button>
      </div>
      <p className="read-the-docs">
        Stay tuned to learn more
      </p>
    </AppWrap>
  )
}

export default Home
import { useState } from 'react'
import Hero from "../../components/Hero/Hero"
import { AppWrap } from './Home.st'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <AppWrap>
      <Hero />
    </AppWrap>
  )
}

export default Home
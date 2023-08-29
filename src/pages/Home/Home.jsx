import { useState } from 'react'
import Hero from "../../components/Hero/Hero"
import { AppWrap } from './Home.st'
import BlogWidget from '../../components/Blog/BlogWidget'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <AppWrap>
      <Hero />
      <BlogWidget />
    </AppWrap>
  )
}

export default Home
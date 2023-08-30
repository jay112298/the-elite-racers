import { useState } from 'react'
import Hero from "../../components/Hero/Hero"
import { AppWrap } from './Home.st'
import BlogWidget from '../../components/Blog/BlogWidget'
import Explore from '../../components/Explore/Explore'
import Races from '../../components/Races/Races'
import Footer from '../../components/Footer/Footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <AppWrap>
      <Hero />
      <BlogWidget />
      <Explore />
      <Races />
      <Footer />
    </AppWrap>
  )
}

export default Home
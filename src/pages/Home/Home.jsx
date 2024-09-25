import { useState } from 'react'
import Hero from "../../components/Hero/Hero"
import { AppWrap } from './Home.st'
import BlogWidget from '../../components/Blog/BlogWidget'
import Explore from '../../components/Explore/Explore'
import Races from '../../components/Races/Races'
import RecruitmentBanner from '../../components/RecruitmentBanner/RecruitmentBanner'
import PastEvents from '../../components/PastEvents/PastEvents'
import Footer from '../../components/Footer/Footer'
// import { Button } from './Button.st'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <AppWrap>
      <Hero />
      <BlogWidget />
      <Explore />
      <Races /> 
      <RecruitmentBanner />
      <PastEvents />
      <Footer />
    </AppWrap>
  )
}

export default Home
import React from 'react'
import FundsCard from '../../../components/DashCard/FundsCard'
import RecruitmentsCard from '../../../components/DashCard/RecruitmentsCard'
import ApplicationsCard from '../../../components/DashCard/ApplicationsCard'
import { Content } from './Home.st'

const Home = () => {
  return (
    <Content>
      <FundsCard title="Members" footLink="/funds/add-transaction"/>
      <FundsCard title="Funds" footLink="/funds/add-transaction"/>
      <RecruitmentsCard />
      <ApplicationsCard />
    </Content>
  )
}

export default Home
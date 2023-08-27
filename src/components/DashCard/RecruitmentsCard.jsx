import React from 'react'
import { Card } from './FundsCard.st'
import { BsCashStack } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'

const RecruitmentsCard = (props) => {
    return (
      <Card>
          <div className='header'>
              <div>Open Posts</div>
              <div><BsCashStack /></div>
          </div>
          <div className='digit'>8</div>
          <div className='hr-line'></div>
          <div className='foot'>
              <div>Manage Posts</div>
              <div><GrAddCircle /></div>
          </div>
      </Card>
    )
  }
  
  export default RecruitmentsCard
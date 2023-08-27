import React from 'react'
import { Card } from './FundsCard.st'
import { GrAddCircle } from 'react-icons/gr'
import { BsCashStack } from 'react-icons/bs'

const DashCard = (props) => {
  return (
    <Card>
        <div className='header'>
            <div>{props.title}</div>
            <div><BsCashStack /></div>
        </div>
        <div className='digit'>15000</div>
        <div className='hr-line'></div>
        <div className='foot'>
            <div>Add Funds</div>
            <div><GrAddCircle /></div>
        </div>
    </Card>
  )
}

export default DashCard
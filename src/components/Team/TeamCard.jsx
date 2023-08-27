import React from 'react'
import { Card } from './TeamCard.st'


const TeamCard = (props) => {
  return (
    <Card>
        <div className="image">Image</div>
        <div className="name">Jitendra Asole</div>
        <div className="post">Manager</div>
        <div className="social-icons">
            <div className="ig">IG</div>
            <div className="li">Li</div>
            <div className="github">GHub</div>
        </div>
    </Card>
  )
}

export default TeamCard
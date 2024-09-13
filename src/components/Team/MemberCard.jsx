import React from 'react'
import { Card } from './MemberCard.st'
import { BsLinkedin } from 'react-icons/bs'

const MemberCard = (props) => {
  return (
    <Card bgUrl={props.image}>
        <div className="image"></div>
        <div className="name">{props.name}</div>
        <div className="post">{props.role}</div>
        <div className="social-icons">
          <a href={props.linkedinUrl} className="icon" target="_blank" rel="noopener noreferrer">
            <div className="li"><BsLinkedin size="2.8783rem" color='#0077B5'/></div>
          </a>
        </div>
    </Card>
  )
}

export default MemberCard
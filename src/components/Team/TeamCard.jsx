import React from 'react'
import { Card } from './TeamCard.st'
import { BiLogoInstagram } from 'react-icons/bi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const TeamCard = (props) => {
  return (
    <Card bgUrl={props.image}>
        <div className="image"></div>
        <div className="name">{props.name}</div>
        <div className="post">{props.role}</div>
        <div className="social-icons">
            <div className="ig"><BiLogoInstagram size="2.38095rem"/></div>
            <div className="li"><BsLinkedin size="2.38095rem"/></div>
            <div className="github"><BsGithub size="2.38095rem"/></div>
        </div>
    </Card>
  )
}

export default TeamCard
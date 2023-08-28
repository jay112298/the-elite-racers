import React from 'react'
import { TeamWrapper } from './Team.st'
import Navbar from "../../components/Navbar/Navbar"
import TeamCard from '../../components/Team/TeamCard'
import MemberCard from '../../components/Team/MemberCard'
import qualitiesSvg from "../../assets/qualities.svg"
import driftShape from "../../assets/drift-shape.svg"
import exploreTeam from "../../assets/explore-team.svg"


const people = [
    {
      name: 'Rahul Patankar',
      role: 'Team Captain',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jitendra Asole',
      role: 'Team Manager',
      imageUrl:
        'https://media.licdn.com/dms/image/C5103AQHeicn8jyZONw/profile-displayphoto-shrink_800_800/0/1580794167564?e=2147483647&v=beta&t=P7bO89gP51BII02LrMSyU1YhX3nvPDKcXjByovBrTTk',
    },
    {
      name: 'Himanshu Mange',
      role: 'Vice-Captain',
      imageUrl:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Amit Rahangdale',
      role: 'Aerodynamics Lead',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Pratham Shende',
      role: 'Funds Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Abhishek Padghan',
      role: 'Social Media Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <>
        <Navbar />

        <TeamWrapper>
          <div className="header">
            <div className="shape"></div>
            <div className="text">Meet Our <span>Team</span></div>
          </div>
          <div className="leaders-wrapper">
            <div className="cards-leader">
              {
                people.slice(0,3).map(member => <TeamCard image={member.imageUrl} name={member.name} role={member.role} />)
              }
            
            </div>
            <div className="statements">
              <div className="left"><span>Fueling</span> victory through...</div>
              <div className="right">...teamwork and <span>precision.</span></div>
            </div>
          </div>

          <div className="explore-team"><img src={exploreTeam} alt="" /></div>
          
          <div className="members-wrapper">
            <div className="top">
              <div className="left"><div className="text">Our <span>legacy</span> holders <img src={driftShape} alt="drift sign" /></div></div>
              <div className="right"><img src={qualitiesSvg} alt="Qualities" /></div>
            </div>
            <div className="cards-member">
              {
                people.slice(3).map(member => <MemberCard image={member.imageUrl} name={member.name} role={member.role} />)
              }
            </div>
          </div>

        </TeamWrapper>
      </>
    )
  }
  




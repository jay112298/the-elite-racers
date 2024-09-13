import React from "react";
import { TeamWrapper } from "./Team.st";
import Navbar from "../../components/Navbar/Navbar";
import TeamCard from "../../components/Team/TeamCard";
import MemberCard from "../../components/Team/MemberCard";
import Footer from "../../components/Footer/Footer";
import qualitiesSvg from "../../assets/qualities.svg";
import driftShape from "../../assets/drift-shape.svg";
import exploreTeam from "../../assets/explore-team.svg";
import img1 from "../../assets/TeamMembers/AnshikaKumari.png";
import img2 from "../../assets/TeamMembers/Harsh.png";
import img3 from "../../assets/TeamMembers/HrigvedMahule.png";
import img4 from "../../assets/TeamMembers/IshanKumar.png";
import img5 from "../../assets/TeamMembers/KaushtubhCharpe.png";
import img6 from "../../assets/TeamMembers/KhushiKhadgi.png";
import img7 from "../../assets/TeamMembers/LipikshaDhakate.png";
import img8 from "../../assets/TeamMembers/MansviBagde.png";
import img9 from "../../assets/TeamMembers/MukindaWakode.png";
import img10 from "../../assets/TeamMembers/NawaidSheikh.png";
import img11 from "../../assets/TeamMembers/NishantTimane.png";
import img12 from "../../assets/TeamMembers/PawanNasre.png";
import img13 from "../../assets/TeamMembers/PratikGujrker.png";
import img14 from "../../assets/TeamMembers/PratikShende.png";
import img15 from "../../assets/TeamMembers/PrishaTaklikar.png";
import img16 from "../../assets/TeamMembers/ProfFaizalHussen.png";
import img17 from "../../assets/TeamMembers/ProfGauravMohite.png";
import img18 from "../../assets/TeamMembers/RaniShende.png";
import img19 from "../../assets/TeamMembers/ShantanuFuke.png";
import img20 from "../../assets/TeamMembers/ShrvanKalode.png";
import img21 from "../../assets/TeamMembers/TakshitKombe.png";
import img22 from "../../assets/TeamMembers/TanushreeZamare.png";
import img23 from "../../assets/TeamMembers/UbaidRahman.png";
import img24 from "../../assets/TeamMembers/NinadJain.png";
import img25 from "../../assets/TeamMembers/DrHarishBhatkulkar.png";
import img26 from "../../assets/TeamMembers/JitendraAsole.jpg";
import img27 from "../../assets/TeamMembers/RahulPatankar.jpg";
import img28 from "../../assets/TeamMembers/HimanshuMange.jpg";
// import img30 from "../../assets/TeamMembers/RahulPatankar.png";
// import img31 from "../../assets/TeamMembers/HimanshuMange.png";
// import img32 from "../../assets/TeamMembers/JitendraAsole.png";
import img33 from "../../assets/TeamMembers/PrathamMendhe.png";
// import img34 from "../../assets/TeamMembers/NinadManekar.png";
import img35 from "../../assets/TeamMembers/AshuketKhakre.png";
// import img36 from "../../assets/TeamMembers/AbhishekPadghan.png";
import img37 from "../../assets/TeamMembers/ChetanAkhand.png";
// import img38 from "../../assets/TeamMembers/RohanYedelloo.png";
// import img39 from "../../assets/TeamMembers/PranayRamteke.png";
import img40 from "../../assets/TeamMembers/AmitRahangdale.png";
import img41 from "../../assets/TeamMembers/KunalKadak.png";
import img43 from "../../assets/TeamMembers/PrajeshKadbe.png";
import img44 from "../../assets/TeamMembers/RishikNichat.png";
import img45 from "../../assets/TeamMembers/AbhishekPadghan.png";
import EliteLogo from "../../assets/elite-logo.svg";

const people = [
  {
    name: "Jitendra Asole",
    role: "Team Manager",
    imageUrl: img26,
  },
  {
    name: "Rahul Patankar",
    role: "Team Captain",
    imageUrl: img27,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Himanshu Mange",
    role: "Vice-Captain",
    imageUrl: img28,
  },

  // {
  //   name: 'Amit Rahangdale',
  //   role: 'Aerynamics Lead',
  //   imageUrl:img24,
  // },
  // {
  //   name: 'Pratham Shende',
  //   role: 'Funds Manager',
  //   imageUrl:img24,
  // },
  // {
  //   name: 'Abhishek Padghan',
  //   role: 'Social Media Manager',
  //   imageUrl:img24,
  // },
  // {
  //   name: "Mukinda Wakode",
  //   role: "Treasurer",
  //   imageUrl: img9,
  //   linkedinUrl: "https://www.linkedin.com/in/mukinda-wakode/",
  //   iconSize: "2.8783rem",
  // },
  // {
  //   name: "Lipiksha Dhakate",
  //   role: "Publicity Chair",
  //   imageUrl: img7,
  //   linkedinUrl: "https://www.linkedin.com/in/lipiksha-dhakate/",
  //   iconSize: "2.8783rem",
  // },
  // {
  //   name: "Kaushtubh Charpe",
  //   role: "Reception Chair",
  //   imageUrl: img5,
  //   linkedinUrl: "https://www.linkedin.com/in/kaustubh-charpe/",
  //   iconSize: "2.8783rem",
  // },

   {
    name: "Pratik Shende",
    role: "Chairperson",
    imageUrl: img14,
    linkedinUrl: "https://www.linkedin.com/in/pratik-shende/",
    iconSize: "2.8783rem",
  },
  {
    name: "Ninad Manekar",
    role: "Vice Chairperson",
    imageUrl: img24,
  },
  {
    name: "Rani Shende",
    role: "Secretary",
    imageUrl: img18,
    linkedinUrl: "https://www.linkedin.com/in/rani-shende/",
    iconSize: "2.8783rem",
  },
  {
    name: "Mukinda Wakode",
    role: "Treasurer",
    imageUrl: img9,
    linkedinUrl: "https://www.linkedin.com/in/mukinda-wakode/",
    iconSize: "2.8783rem",
  },
  {
    name: "Pawan Nasre",
    role: "Program Chair",
    imageUrl: img12,
    linkedinUrl: "https://www.linkedin.com/in/pawan-nasre/",
    iconSize: "2.8783rem",
  },
  {
    name: "Kaushtubh Charpe",
    role: "Reception Chair",
    imageUrl: img5,
    linkedinUrl: "https://www.linkedin.com/in/kaustubh-charpe/",
    iconSize: "2.8783rem",
  },
  {
    name: "Ubaid Rahman",
    role: "Membership Chair",
    imageUrl: img23,
    linkedinUrl: "https://www.linkedin.com/in/ubaid-rahman/",
    iconSize: "2.8783rem",
  },
  {
    name: "Lipiksha Dhakate",
    role: "Publicity Chair",
    imageUrl: img7,
    linkedinUrl: "https://www.linkedin.com/in/lipiksha-dhakate/",
    iconSize: "2.8783rem",
  },
  // {
  //   name: "Pratham Mendhe",
  //   role: "Budget Manager",
  //   imageUrl: img33,
  //   linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
  //   iconSize: "2.8783rem",
  // },
  // {
  //   name: "Ashuket Khakre",
  //   role: "CAE Lead",
  //   imageUrl: img35,
  //   linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
  //   iconSize: "2.8783rem",
  // },
  
  // {
  //   name: "Chetan Akhand",
  //   role: "Talent Scout",
  //   imageUrl: img37,
  //   linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
  //   iconSize: "2.8783rem",
  // },
  {
    name: "Anshika Kumari",
    role: "Suspension Department Member",
    imageUrl: img1,
    linkedinUrl: "https://www.linkedin.com/in/anshika-kumari/",
    iconSize: "2.8783rem",
  },
  {
    name: "Tanushree Zamare",
    role: "Powertrain Department Member",
    imageUrl: img22,
    linkedinUrl: "https://www.linkedin.com/in/tanushree-zamare/",
    iconSize: "2.8783rem",
  },
  {
    name: "Md. Nawaid Sheikh",
    role: "Web Developer & Cloud Engineer",
    imageUrl: img10,
    linkedinUrl: "https://www.linkedin.com/in/nawaid-sheikh/",
    iconSize: "2.8783rem",
  },
  {
    name: "Harsh Sharma",
    role: "Backend Developer",
    imageUrl: img2,
    linkedinUrl: "https://www.linkedin.com/in/harsh-sharma/",
    iconSize: "2.8783rem",
  },
  {
    name: "Hrigved Mahule",
    role: "Powertrain Member",
    imageUrl: img3,
    linkedinUrl: "https://www.linkedin.com/in/hrigved-mahule/",
    iconSize: "2.8783rem",
  },
  {
    name: "Pratik Gujrker",
    role: "Aerodynamics Member",
    imageUrl: img13,
    linkedinUrl: "https://www.linkedin.com/in/pratik-gujrker/",
    iconSize: "2.8783rem",
  },
  

  {
    name: "Khushi Khadgi",
    role: "Suspension Member",
    imageUrl: img6,
    linkedinUrl: "https://www.linkedin.com/in/khushi-khadgi/",
    iconSize: "2.8783rem",
  },

  {
    name: "Mansvi Bagde",
    role: "Chassis member",
    imageUrl: img8,
    linkedinUrl: "https://www.linkedin.com/in/mansvi-bagde/",
    iconSize: "2.8783rem",
  },
  {
    name: "Takshit Kombe",
    role: "Social Media Manager",
    imageUrl: img21,
    linkedinUrl: "https://www.linkedin.com/in/takshit-kombe/",
    iconSize: "2.8783rem",
  },  
  {
    name: "Nishant Timane",
    role: "Team Member",
    imageUrl: img11,
    linkedinUrl: "https://www.linkedin.com/in/nishant-timane/",
    iconSize: "2.8783rem",
  },

  
  {
    name: "Prisha Taklikar",
    role: "Team Member",
    imageUrl: img15,
    linkedinUrl: "https://www.linkedin.com/in/prisha-taklikar/",
    iconSize: "2.8783rem",
  },
  {
    name: "Shantanu Fuke",
    role: "Team Member",
    imageUrl: img19,
    linkedinUrl: "https://www.linkedin.com/in/shantanu-fuke/",
    iconSize: "2.8783rem",
  },
  {
    name: "Shrvan Kalode",
    role: "Team Member",
    imageUrl: img20,
    linkedinUrl: "https://www.linkedin.com/in/shrvan-kalode/",
    iconSize: "2.8783rem",
  },

  {
    name: "Ishan Kumar",
    role: "Team Member",
    imageUrl: img4,
    linkedinUrl: "https://www.linkedin.com/in/ishan-kumar/",
    iconSize: "2.8783rem",
  },  
  
  {
    name: "Prajesh Kadbe",
    role: "Team Member",
    imageUrl: img43,
    linkedinUrl: "https://www.linkedin.com/in/prajesh-kadbe/",
    iconSize: "2.8783rem",
  },
  
  

  // More people...
];

const additionalPeople = [
  {
    name: "Pratham Mendhe",
    role: "Budget Manager",
    imageUrl: img33,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Ninad Manekar",
    role: "Vice Chairperson",
    imageUrl: img24,
  },
  {
    name: "Ashuket Khakre",
    role: "CAE Lead",
    imageUrl: img35,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Abhishek Padghan",
    role: "Soical Media Manager",
    imageUrl: img45,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Chetan Akhand",
    role: "Talent Scout",
    imageUrl: img37,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Rohan Yedelloo",
    role: "Test Engineer",
    imageUrl: img37,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Md. Nawaid Sheikh",
    role: "UI/UX Designer",
    imageUrl: img10,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Pratik Shende",
    role: "Aero Specialist",
    imageUrl: img14,
    linkedinUrl: "https://www.linkedin.com/in/pratik-shende/",
    iconSize: "2.8783rem",
  },
  {
    name: "Amit Rahangdale",
    role: "Aero Lead",
    imageUrl: img40,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Kunal Kadak",
    role: "Suspension Lead",
    imageUrl: img41,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Rishik Nichat",
    role: "MFG Lead",
    imageUrl: img44,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
];

const facultyAdvisors = [
  {
    name: "Dr. Harish Bhatkulkar",
    role: "Head of Department",
    imageUrl: img25,
    linkedinUrl: "https://www.linkedin.com/in/faizal-hussen/",
    iconSize: "2.8783rem",
  },
  {
    name: "Prof. Gaurav Mohite",
    role: "Faculty Advisor",
    imageUrl: img17,
    linkedinUrl: "https://www.linkedin.com/in/gaurav-mohite/",
    iconSize: "2.8783rem",
  },
  {
    name: "Prof. Faizal Hussen",
    role: "Faculty Advisor",
    imageUrl: img16,
    linkedinUrl: "https://www.linkedin.com/in/faizal-hussen/",
    iconSize: "2.8783rem",
  },
];

const saeTeamMembers = [
  {
    name: "Pratik Shende",
    role: "Chairperson",
    imageUrl: img14,
    linkedinUrl: "https://www.linkedin.com/in/pratik-shende/",
    iconSize: "2.8783rem",
  },
  {
    name: "Ninad Manekar",
    role: "Vice Chairperson",
    imageUrl: img24,
  },
  {
    name: "Rani Shende",
    role: "Secretary",
    imageUrl: img18,
    linkedinUrl: "https://www.linkedin.com/in/rani-shende/",
    iconSize: "2.8783rem",
  },
  
  {
    name: "Rohan Yedelloo",
    role: "Test Engineer",
    imageUrl: img24,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Md. Nawaid Sheikh",
    role: "UI/UX Designer",
    imageUrl: img10,
    linkedinUrl: "https://www.linkedin.com/company/nawaid-sheikh/",
    iconSize: "2.8783rem",
  },
  {
    name: "Amit Rahangdale",
    role: "Aero Lead",
    imageUrl: img40,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
  {
    name: "Kunal Kadak",
    role: "Suspension Lead",
    imageUrl: img41,
    linkedinUrl: "https://www.linkedin.com/company/the-elite-racers/",
    iconSize: "2.8783rem",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />

      <TeamWrapper>
        <div className="header">
          <div className="shape"></div>
          <div className="text">
            Meet Our <span>Team</span>
          </div>
        </div>
        <div className="leaders-wrapper">
          <div className="top">
            <div className="left">
              <div className="text">
                Session <span>2023-24</span> Team{" "}
                <img src={driftShape} alt="drift sign" />
              </div>
            </div>
            <div className="right">
              <img src={EliteLogo} alt="Elite Logo" />
            </div>
          </div>
          <div className="cards-leader">
            {people.slice(0, 3).map((member, index) => (
              <TeamCard
                key={`top-${index}`}
                image={member.imageUrl}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
          <div className="additional-cards">
            {additionalPeople.map((member, index) => (
              <MemberCard
                key={`additional-${index}`}
                image={member.imageUrl}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
          <div className="statements">
            <div className="left">
              <span>Fueling</span> victory through...
            </div>
            <div className="right">
              ...teamwork and <span>precision.</span>
            </div>
          </div>
        </div>

        <div className="explore-team">
          <img src={exploreTeam} alt="" />
        </div>

        <div className="members-wrapper">
          <div className="top">
            <div className="left">
              <div className="text">
                Session <span>2024</span> Team{" "}
                <img src={driftShape} alt="drift sign" />
              </div>
            </div>
            <div className="right">
              <img src={qualitiesSvg} alt="Qualities" />
            </div>
          </div>
          <div className="cards-legacy">
            {people.slice(3, 6).map((member, index) => (
              <TeamCard
                key={`legacy-top-${index}`}
                image={member.imageUrl}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
          <div className="cards-member">
            {people.slice(6).map((member, index) => (
              <MemberCard
                key={`legacy-${index}`}
                image={member.imageUrl}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>

          <div className="top">
            <div className="left">
              <div className="text">
                Our <span>Faculty</span> Advisors{" "}
                <img src={driftShape} alt="drift sign" />
              </div>
            </div>
          </div>
          <div className="cards-faculty">
            {facultyAdvisors.map((advisor, index) => (
              <TeamCard
                key={`faculty-${index}`}
                image={advisor.imageUrl}
                name={advisor.name}
                role={advisor.role}
                linkedinUrl={advisor.linkedinUrl}
              />
            ))}
          </div>

          {/* <div className="top">
            <div className="left">
              <div className="text">
                Our <span>SAE</span> Collegiate Club{" "}
                <img src={driftShape} alt="drift sign" />
              </div>
            </div>
          </div>
          <div className="cards-sae-team">
            {saeTeamMembers.map((member, index) => (
              <MemberCard
                key={`sae-${index}`}
                image={member.imageUrl}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div> */}
        </div>
      </TeamWrapper>
      <Footer />
    </>
  );
}

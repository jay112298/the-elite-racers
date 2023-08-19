import React, { useState } from 'react';
import EliteLogo from '../../assets/the-elite-racers.svg'
import Bell from '../../assets/bell.svg'
import UserIcon from '../../assets/user-icon.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import './Dashboard.st.js'; // Import your stylesheet
import {DashContainer} from './Dashboard.st.js'
import Home from './Home/Home.jsx'
import Finances from './Finances/Finances.jsx'
import Inventory from './Inventory/Inventory.jsx'
import Task from './Task/Task.jsx'
import Communication from './Communication/Communication.jsx'
import Documents from './Documents/Documents.jsx'
import Resources from './Resources/Resources.jsx'
import Recruitment from './Recruitment/Recruitment.jsx'
import Event from './Event/Event.jsx'
import Knowledge from './Knowledge/Knowledge.jsx'
import Code from './Code/Code.jsx'
import { 
  AiOutlineHome, 
  AiOutlineDollar, 
  AiOutlineShop, 
  AiOutlineCheckSquare,
  AiOutlineMail,
  AiOutlineFileText,
  AiOutlineDatabase,
  AiOutlineCalendar,
  AiOutlineBook,
  AiOutlineQuestionCircle,
  AiOutlineCode 
} from 'react-icons/ai'; // Import other icons as neede

const tabs = [
  { label: "Home", icon: <AiOutlineHome /> },
  { label: "Finances", icon: <AiOutlineDollar /> },
  { label: "Inventory", icon: <AiOutlineShop /> },
  { label: "Task", icon: <AiOutlineCheckSquare /> },
  { label: "Communication", icon: <AiOutlineMail /> },
  { label: "Recruitment", icon: <AiOutlineCalendar /> },
  { label: "Documents", icon: <AiOutlineFileText /> },
  { label: "Resources", icon: <AiOutlineDatabase /> },
  { label: "Event", icon: <AiOutlineBook /> },
  { label: "Knowledge", icon: <AiOutlineQuestionCircle /> },
  { label: "Code", icon: <AiOutlineCode /> },
];


const componentMap = {
  Home: Home,
  Finances: Finances,
  Inventory: Inventory,
  Task: Task,
  Communication: Communication,
  Recruitment: Recruitment,
  Documents: Documents,
  Resources: Resources,
  Event: Event,
  Knowledge: Knowledge,
  Code: Code,
  // Add other components as needed
};
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab)
  };

  const ActiveComponent = componentMap[activeTab];

  const clickProfile = () => {
    console.log("Profile clicked")
  }
  return (
    <DashContainer>
      <div className="sidebar">
        <div className="logo"><img src={EliteLogo} className="logo" alt="Vite logo" /></div>
        <ul className="tabs">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              className={activeTab === tab.label ? 'active' : ''}
              onClick={() => handleTabClick(tab.label)}
            >
              <div className="icon">{tab.icon}</div>
              <div className="label">{tab.label}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="top-navbar">
          <div className="greeting">
            Good Morning, $USER
          </div>
          <div className="user">
            <div className="user-bell">
              <img src={Bell} alt="Notification Icon" />
            </div>
            <div className="user-icon" onClick={clickProfile}>
              <img src={UserIcon} alt="User Icon" />
              <img src={ArrowDown} alt="User Icon" />
            </div>
          </div>

        </div>
        <div className="content">
          <ActiveComponent />
        </div>
      </div>
    </DashContainer>
  );
};

export default Dashboard;
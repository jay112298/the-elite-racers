import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recruitments from "./pages/Recruitments/Recruitments";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Sheet from './pages/Dashboard/Sheet/Sheet';
import Documents from './pages/Dashboard/Documents/Documents';
import Communication from './pages/Dashboard/Communication/Communication';
import Gallery from './components/Gallery/Gallery';
import Partners from './components/Partners/Partners';
import Vehicle from './components/Vehicle/Vehicle';
import RaceEvents from './pages/RaceEvents/RaceEvents';
import TermsOfUse from './components/TermsofUse/TermsOfUse.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Merchandise from './components/Merchandise/Merchandise';
import AchievementsPage  from './components/Achievements/AchievementsPage';
import Blog1 from './components/Blog/BLog1'
import Blog2 from './components/Blog/Blog2';
import Blog3 from './components/Blog/Blog3';
import Blog4 from './components/Blog/Blog4';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recruitments" element={<Recruitments />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/sheet" element={<Sheet />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/communication" element={<Communication />} /> 
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/raceEvents" element={<RaceEvents />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2/>} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
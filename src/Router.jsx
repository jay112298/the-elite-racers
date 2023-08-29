import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Sheet from './pages/Dashboard/Sheet/Sheet';
import Documents from './pages/Dashboard/Documents/Documents';
import Communication from './pages/Dashboard/Communication/Communication';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/sheet" element={<Sheet />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/communication" element={<Communication />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
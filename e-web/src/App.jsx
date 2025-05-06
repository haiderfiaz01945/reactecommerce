import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Landing from './pages/Landing'; 
import Contact from './pages/Contact';
import { IoMdHelp } from 'react-icons/io';
import Resources from './pages/Resources';
import Help from './pages/Help';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource" element={<Resources />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

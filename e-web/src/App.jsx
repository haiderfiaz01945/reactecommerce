import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Company from './pages/Company';
import Landing from './pages/Landing'; // <-- new

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;

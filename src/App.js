//import logo from './logo.svg'; //use similar to import images/videos
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Meets from './components/pages/Meets';
import Zachmx5 from './components/pages/Zachmx5';
import Loganmx5 from './components/pages/Loganmx5';
import DanielR33 from './components/pages/DanielR33';
import ENDGAME from './components/pages/ENDGAME';
import Jdm2 from './components/pages/jdM2';
import MoiR34 from './components/pages/moi57rR34';

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/gallery/ZacMX-5" element={<Zachmx5/>} />
        <Route path="/gallery/LoganMX-5" element={<Loganmx5/>} />
        <Route path="/gallery/DaymeinR33" element={<DanielR33/>} />
        <Route path="/gallery/EndGame" element={<ENDGAME/>} />
        <Route path="/gallery/00jdM2" element={<Jdm2/>} />
        <Route path="/gallery/moi57rR34" element={<MoiR34/>} />
        <Route path="/shop" element={<Shop/>} />  
        <Route path="/meets" element={<Meets/>} /> 
        //why the fuck must it be caps this lang sucks cock and balls
      </Routes>
    </Router>
  
  );
}

export default App;

//import logo from './logo.svg'; //use similar to import images/videos
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar'; // Change 'Navbar' to 'navbar'
import Gallery from './components/pages/gallery'; // Change 'Gallery' to 'gallery'
import Home from './components/pages/home'; // Change 'Home' to 'home'
import Shop from './components/pages/shop'; // Change 'Shop' to 'shop'
import Meets from './components/pages/Meets';
import Zachmx5 from './components/pages/Zachmx5';
import Loganmx5 from './components/pages/Loganmx5';
import DanielR33 from './components/pages/DanielR33';
import ENDGAME from './components/pages/ENDGAME';
import Jdm2 from './components/pages/jdM2';
import MoiR34 from './components/pages/moi57rR34';
import IconRx7 from './components/pages/IconRx7';
import CyiGtr from './components/pages/CyiGtr';
import SailSky from './components/pages/SailR600';
import Max240SX from './components/pages/Max240SX';
import JonoChaser from './components/pages/JonoChaser';
import RollaWagon from './components/pages/RollaWagon';


// ... other imports

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
        <Route path="/gallery/IconRx7" element={<IconRx7/>} />
        <Route path="/gallery/CYIFLY" element={<CyiGtr/>} />
        <Route path="/gallery/Sail" element={<SailSky/>} />
        <Route path="/gallery/Max240SX" element={<Max240SX/>} />
        <Route path="/gallery/JonoCresta" element={<JonoChaser/>} />
        <Route path="/gallery/RollaWagon" element={<RollaWagon/>} />
        <Route path="/shop" element={<Shop/>} />  
        <Route path="/meets" element={<Meets/>} /> 
        //why the fuck must it be caps this lang sucks cock and balls
      </Routes>
    </Router>
  
  );
}

export default App;

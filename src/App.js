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

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/gallery/ZachMX-5" element={<Zachmx5/>} />
        <Route path="/gallery/LoganMX-5" element={<Loganmx5/>} />
        <Route path="/gallery/DanielR33" element={<DanielR33/>} />
        <Route path="/shop" element={<Shop/>} />  
        <Route path="/meets" element={<Meets/>} /> 
      </Routes>
    </Router>
  
  );
}

export default App;

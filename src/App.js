//import logo from './logo.svg'; //use similar to import images/videos
import './App.css';
import navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/gallery';
import Booking from './components/pages/home'
import Account from './components/pages/shop'

function App() {
  return (
    <Router>
      <navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/shop//*" element={<Shop/>} />  
      </Routes>
    </Router>
  );
}

export default App;

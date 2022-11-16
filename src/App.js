//import react lib
import React from 'react'
//import pages
import Home from './components/Space';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome'
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience'
import Footer from './components/Footer'


//import react dom lib for page navigation
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar/>
      <Welcome/>       
        <Routes>
          {/*<Route path = '/' element={<Home/>} />*/}
          <Route path = '/' element={<Hero/>} />
          <Route path = '/Education' element={<Education/>} />
          <Route path = '/Experience' element={<Experience/>} />
          
        </Routes>
      <Footer/>    
    </Router>
  );
}

export default App;

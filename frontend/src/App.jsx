import React from 'react'
import Header from "./component/Header"
import Footer from "./component/Footer"
import Navbar from './component/Navbar';
import { Route,Routes } from 'react-router-dom'; 
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Service from './page/Service';
import UseState from './Hooks/UseState';
import UseEffect from './component/UseEffect';
const App = () => {
  return (
    <>
      {/* <Header/>
      <Footer/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/> 
        <Route path='/useState' element={<UseState/>}/> 
        <Route path='/useEffect' element={<UseEffect/>}/>
      </Routes>
     
   </>
  ) ;
} ;
export default App

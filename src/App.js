import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
// import Visit from './components/Visit'
import Home from './components/Home'
import Signin from './components/Signin'
import Service from './components/Service'
import Staff from './components/Staff'
import Logout from './components/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Signin />}/>
        <Route path="/service" element={<Service />}/>
        <Route path = '/logout' element = {<Logout />} />
        {/* <Route path="/contact" element={<h1>visit</h1>}/> */}
        <Route path="/staff" element={<Staff />}/>
      </Routes>
   
      </BrowserRouter>
      <Footer />
      
    </div>
  )
}

export default App

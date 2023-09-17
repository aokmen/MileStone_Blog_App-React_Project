import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import About from '../pages/About'
import Navbar from '../components/Navbar'
import NewBlog from '../pages/NewBlog';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';
const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/newblog" element={<NewBlog/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter
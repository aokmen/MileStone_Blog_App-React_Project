import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import About from '../pages/About'
import Navbar from '../components/Navbar'
import NewBlog from '../pages/NewBlog';
import Footer from '../components/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';
import Detail from '../pages/Detail';
import MyBlogs from '../pages/MyBlogs';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/my-blogs" element={<MyBlogs/>}/> 

        <Route path="" element={<PrivateRouter/>}>
          <Route path="/newblog" element={<NewBlog/>} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter
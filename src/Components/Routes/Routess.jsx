import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "../../pages/SignUp"
import HomePage from '../../pages/HomePage';
import Login from '../../pages/Login';
import Logout from "../../pages/LogOut";

    const AppRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/Homepage" element={<HomePage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Logout" element={<Logout />} /> 
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} /> */}
    </Routes>
  </Router>
  )
}
export default AppRoutes

import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ChangePass from './pages/ChangePass';
import Home from './pages/Home';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpass" element={<ChangePass />} />
      </Routes>
    </BrowserRouter>
  )
}


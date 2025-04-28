import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Text, Stack, Container } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import PostGrid from './components/PostGrid'
import { useColorModeValue } from "@/components/ui/color-mode"
import React from 'react'

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/home" Component={Home}/>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage}/>
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

export default function App() {
  return (
    <div className='font-inter'>
      <Overview/>
      <Navbar/>

      <Routes>  </Routes>
    </div>
  )
}
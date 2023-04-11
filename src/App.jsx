import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componets/Home'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <div className='md:min-h-[calc(100vh-641px)]'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
  
export default App

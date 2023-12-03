import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto] font-Public-Sans-Regular font-normal text-zinc-900 scroll-smooth'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout

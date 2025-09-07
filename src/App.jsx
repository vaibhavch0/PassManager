import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className=" min-h-[78vh]">

    <Manager/>
    </div>

    <Footer/>
    </>
  )
}

export default App

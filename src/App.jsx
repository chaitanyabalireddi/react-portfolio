import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/about'
import Eyes from './components/Eyes'
import Footer from './components/Footer'
import Featured from './components/cards'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landingpage />
      
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Footer />
    </div>
  )
}

export default App

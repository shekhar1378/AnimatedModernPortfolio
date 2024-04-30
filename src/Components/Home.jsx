import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import SkilllsMarque from './SkilllsMarque'

const Home = () => {
  return (
  <>
  <Navbar/>
  <Hero/>
  {/* <SkilllsMarque/> */}
  <About/>
  <Projects/>
  <Contact/>
  {/* <Footer/> */}
  </>
  )
}

export default Home

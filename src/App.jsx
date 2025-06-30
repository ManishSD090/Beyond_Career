import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>

  )
}

export default App

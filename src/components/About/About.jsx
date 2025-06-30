import React from 'react'
import './About.css'
import About_img from '../../assets/about_img.svg'

const About = () => {
  return (
    <div className="about_section" >
        <div className="about_details">
        <h2>About Beyond Career</h2>
        <p>
            Founded by passionate students from IIT Kharagpur, Beyond Career is on a mission to transform how students build their future. We provide mentorship, internships, and industry connections, all tailored to help students discover their true potential. Through a personalized and student-first approach, we ensure that no one feels lost or left behind in their career journey. Whether it's finding the right mentor, securing a meaningful internship, or simply gaining clarity on what to pursue, Beyond Career is your trusted partner. Backed by a strong community and insights from industry experts, we are redefining the roadmap to success. Beyond Career isn’t just a platform, it's a movement built around ambition, guidance, and real impact.
        </p>
        </div>
        <div className="about_img">
            <img src={About_img} alt="" />
        </div>
    </div>
  )
}

export default About

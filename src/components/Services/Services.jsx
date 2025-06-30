import React from 'react'
import career_guidance from '../../assets/career_guidance.svg'
import mentorship from '../../assets/mentorship.svg'
import internship from '../../assets/internship.svg'
import community from '../../assets/community.svg'
import './Services.css'
const Services = () => {
  return (
    <div className="services">
      <h1>Services Offered</h1>
      <div className="service_main">
        <div className="service_sub">
            <img src={career_guidance} alt="" />
            <h2>Career Guidance</h2>
        </div>
        <div className="service_sub">
            <img src={mentorship} alt="" />
            <h2>Mentorships</h2>
        </div>
        <div className="service_sub">
            <img src={internship} alt="" />
            <h2>Internships</h2>
        </div>
        <div className="service_sub">
            <img src={community} alt="" />
            <h2>Community</h2>
        </div>
      </div>
    </div>
  )
}

export default Services

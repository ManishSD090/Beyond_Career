    import React from 'react';
    import testimonial1 from '../../assets/testimonial1.svg';
    import testimonial2 from '../../assets/testimonial2.svg';
    import testimonial3 from '../../assets/testimonial3.svg';
    import testimonial4 from '../../assets/testimonial4.svg';
    import './Testimonials.css'

    const Testimonials = () => {
    return (
        <div className="testimonials_heading" id="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials_section">
            {/* Testimonial 1 */}
            <div className="bites">
            <div className="testimonials_img">
                <img src={testimonial1} alt="Shawn Murphy" />
                <h3>Shawn Murphy</h3>
            </div>
            <div className="testimonials_recorded">
                <p>
                “Beyond Career connected me with an incredible mentor from the AI industry. I finally understood what direction to take — and even got help prepping for interviews!”
                </p>
                <strong>— Shawn Murphy, Computer Science Major, Germany</strong>
            </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bites">
            <div className="testimonials_img">
                <img src={testimonial2} alt="Mia Hayden" />
                <h3>Mia Hayden</h3>
            </div>
            <div className="testimonials_recorded">
                <p>
                “As an international student, I struggled to find the right opportunities. Beyond Career gave me the clarity and support I needed to kickstart my career with confidence.”
                </p>
                <strong>— Mia Hayden, Software Engineering Student, Spain</strong>
            </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bites">
            <div className="testimonials_img">
                <img src={testimonial3} alt="Stuart Ross" />
                <h3>Stuart Ross</h3>
            </div>
            <div className="testimonials_recorded">
                <p>
                “The platform feels super student-focused. I joined a community of learners, landed an internship, and even built a stronger portfolio thanks to the resources they offer.”
                </p>
                <strong>— Stuart Ross, IT Student, Australia</strong>
            </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bites">
            <div className="testimonials_img">
                <img src={testimonial4} alt="Alicia Bradman" />
                <h3>Alicia Bradman</h3>
            </div>
            <div className="testimonials_recorded">
                <p>
                “I’ve tried so many career platforms, but this one stands out. The mentorship sessions were eye-opening and the guidance I got was tailored exactly to my goals.”
                </p>
                <strong>— Alicia Bradman, UX Design Student, UAE</strong>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Testimonials;

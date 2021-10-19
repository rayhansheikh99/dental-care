import React from 'react';
import './about.css'
import img from '../../images/doctor.jpg'

const About = () => {
    return (
        <div className=''>

            {/* about section  */}
            <div className='about-header body-size'>
                <h2>Discover a Patient-Centered Experience <br/>
                at Our Dental Office</h2>
            </div>
            
            {/* <div className='about-aim body-size'>
                <p>
                Do you want a brighter, healthier smile? Our highly trained dentists offer general, cosmetic, and restorative dentistry treatments at Dental Square to help you achieve the healthiest and most beautiful smile possible. As a patient here, you can rest assured that the entire staff is committed to providing the highest quality care and affordable treatments.
                </p>
            </div> */}
            <div className='body-size'>
                <h2>About Our Dentist</h2>
                <h3>Dr. Samir Banik</h3>
                <h5>Assistant Professor<br/>
                    Dhaka Dental College Hospital<br/>
                    Mirpur-14, Dhaka.<br/>
                    Ph.D from Hiroshima University, Japan
                </h5><br/>
                <img className='dr-img mb-5' src={img} alt='' />
                
               
            </div>

        </div>
    );
};

export default About;
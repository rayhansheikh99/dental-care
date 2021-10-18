import React from 'react';
import './about.css'
import img from '../../images/doctor.jpg'

const About = () => {
    return (
        <div>
            <div className='about-header'>
                <h2>Discover a Patient-Centered Experience <br/>
                at Our Dental Office</h2>
            </div>
            
            <div className='about-aim'>
                <p>
                Do you want a brighter, healthier smile? Our highly trained dentists offer general, cosmetic, and restorative dentistry treatments at Dental Square to help you achieve the healthiest and most beautiful smile possible. As a patient here, you can rest assured that the entire staff is committed to providing the highest quality care and affordable treatments.
                </p>
            </div>
            <div className='about-doctor'>
                <h2>About Our Dentist</h2>
                <h3>Dr. Samir Banik</h3>
                <h5>Assistant Professor<br/>
                    Dhaka Dental College Hospital<br/>
                    Mirpur-14, Dhaka.<br/>
                    Ph.D from Hiroshima University, Japan
                </h5><br/>
                <img className='dr-img' src={img} alt='' />
                <p>Dr. Samir Banik completed his Bachelor of Dental Surgery from the University of Dhaka, Bangladesh in the year 2001. After that, he joined Bangabandhu Sheikh Mujib Medical University for his post graduation training in the dept. of Prosthodontics. Then he joined Bangladesh Civil Service (BCS) as a dental surgeon. At the same time, he was blessed by a prestigious scholarship from Govt. of Japan (Monubukagakasu). Then he joined Hiroshima University, Japan in the dept of Oral & Maxillofacial Radiology as a Ph.d fellow. He finished Doctor of Philosophy in dental science in the year of 2010. Returning from Japan, he joined Dhaka Dental College and Hospital in the dept of Oral and Maxillofacial Radiology as Assistant Professor. He is a specialist in Maxillofacial Radiology. He has a vast working experience and expertise in the below arenas:

                    1. General Dentistry
                    2. Implant Surgery
                    3. Prosthodontics

                    Dr. Samir attended at many international congresses around the world. He visited China, Japan, Thailand and Netherland for different issues with dentistry.

                    He is reachable at the e-mail: sbanik30@yahoo.com and also in the contact number: +8801753057342.
                </p>
               
            </div>

        </div>
    );
};

export default About;
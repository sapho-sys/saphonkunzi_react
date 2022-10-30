import React from 'react';
import MeAbout from '../../img/skillo.jpg';
import './about.css';

const About = () => {
   return (
      <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>

         <div className='container about_container'>
            <div className='about_me'>
               <div className='about_me-image'>
                  <img src={MeAbout} alt='About Me' />
               </div>
            </div>

            <div className='about_content'>
               <p>
                 Sapho Nkunzi is a very proactive person, 
               </p>
            </div>
         </div>
      </section>
   );
};

export default About;
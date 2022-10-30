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
                 Sapho Nkunzi is a very proactive , humbled and mindful person. I'm also a team player who enjoys collaborating 
                 and interacting with other coder's when it comes to solving problems , I am comfortable with being uncomfortable and 
                 very good with handling uncertainty "moving from not knowing to knowing"; I currently hold a Diploma in Accountancy,
                 two years I spent studying a Certificate in Financial information systems (till phased out 2019). I'm an apprentice at Project Codex 
                 doing on-the-job training in full-stack web development till end of November 2022.
               </p>
            </div>
         </div>
      </section>
   );
};

export default About;
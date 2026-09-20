"use client";

import React, { useEffect } from 'react'
import Hero from './Home/Hero/Hero'
import Services from './Home/Services/Services';
import Resume from './Home/Resume/Resume';
import Projects from './Home/Projects/Projects';
import Skills from './Home/Skills/Skills';
//import ClienteReview from './Home/ClientReview/ClienteReview';
//import Blog from './Home/Blog/Blog';
import Contact from './Home/Contact/Contact';
// import Footer from './Home/Footer/Footer'; // Veo que no lo usas en el return, asegúrate si lo necesitas
import AOS from 'aos';
//import 'aos/dist/aos.css'; 

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
    
  }, []); 

  return (
    <div className='overflow-hidden bg-slate-900'>
      <Hero />
      <Services/>
      <Resume/>
      <Projects/>
      <Skills />
      
      <Contact />
      {/* <Footer /> Si tienes el footer importado, deberías ponerlo aquí */}
    </div>
  )
}

export default Home;
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div id="services" className='pt-16 pb-16'>
        {/* Corregí 'text-2x1' por 'text-2xl' para que el tamaño sea correcto */}
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Nuestras Soluciones <br/> Digitales  e Innovación
        </h1>
        
        {/* CAMBIO AQUÍ: Quité 'items-center' y puse 'items-start' para que todas empiecen arriba */}
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start'>
          
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServicesCard 
            icon="/images/s1.png"
            name="Diseño UI / UX"
            description="Interfaces modernas, intuitivas y centradas en la experiencia de usuario."
            /> 
          </div>

          <div 
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100">
            <ServicesCard 
            icon="/images/s2.png"
            name="Desarrollo Web"
            description="Sitios web y aplicaciones a medida, escalables y de alto rendimiento."
            /> 
          </div>

          <div 
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200">
            <ServicesCard 
            icon="/images/s3.png"
            name="Automatización con IA"
            description="Optimización de procesos y flujos de trabajo con Inteligencia Artificial."
            /> 
          </div>

          <div 
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300">
            <ServicesCard 
            icon="/images/s4.png"
            name="Marketing Digital"
            description="Estrategias de posicionamiento y crecimiento para tu marca."
            /> 
          </div>
        </div>
    </div>
  )
}

export default Services
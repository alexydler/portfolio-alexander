import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div id="services" className='pt-16 pb-16'>

        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Áreas de Especialización <br/>
            <span className='text-cyan-200'>
              Tecnología, Desarrollo & Automatización
            </span>
        </h1>

        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start'>

          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServicesCard
              icon="/images/s1.png"
              name="Desarrollo Full Stack"
              description="Desarrollo aplicaciones web completas, desde interfaces responsivas hasta lógica backend y bases de datos."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServicesCard
              icon="/images/s2.png"
              name="Backend & APIs"
              description="Construyo arquitecturas backend, APIs y sistemas con Python, Django, FastAPI, C++ y PostgreSQL."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServicesCard
              icon="/images/s3.png"
              name="IA & Automatización"
              description="Diseño automatizaciones y flujos inteligentes con n8n, Zapier, Make e integración de herramientas de Inteligencia Artificial."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServicesCard
              icon="/images/s4.png"
              name="Cloud & DevOps"
              description="Trabajo con Docker, Linux, VPS, Git/GitHub y arquitecturas Cloud para desplegar soluciones estables y escalables."
            />
          </div>

        </div>
    </div>
  )
}

export default Services
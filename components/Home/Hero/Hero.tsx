"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div id="home" className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col' >

    <ParticlesHero/>

        <div className='relative z-10 flex flex-col items-center'>
            
            {/* --- ZONA DE IMÁGENES --- */}
            {/* Usamos flex para ponerlas una al lado de la otra sin cambiar nada más */}
            <div className='flex justify-center items-center gap-6'>
                
                {/* Imagen 1: Alexander */}
                <Image
                    src="/images/alexander.jpeg" // Tu foto
                    alt="Alexander"
                    width={150}
                    height={150}
                    
                    className="rounded-full border-5 border-[#0067f7aa] object-cover w-[150px] h-[150px]"
                    data-aos="fade-right"
                />

                {/* Imagen 2: Eyleen */}
                <Image
                    src="/images/eyleen.jpg" // Asegúrate de tener esta foto en public/images/
                    alt="Eyleen"
                    width={150}
                    height={150}
                    // Exactamente el mismo estilo
                    className="rounded-full border-5 border-[#ff00aeaa] object-cover w-[150px] h-[150px]"
                    data-aos="fade-left"
                />
            </div>
            {/* ------------------------- */}

             <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Full Stack & <br/>
                <span className='text-cyan-200'> Automatización Inteligente </span>
             </h1>
             
             <h2 
              data-aos="fade-up"
              data-aos-delay="400"
              className='mt-5 text-lg sm:text-2xl font-medium flex flex-wrap items-center justify-center gap-2 px-2 text-center'>

                Ofrecemos servicios de 
                <span className='text-cyan-200 font-bold '>
                <Typewriter options={{
                    strings:[
                        ' Desarrollo de Software ',
                        ' Automatización con IA ',
                        ' Marketing Digital ',
                        ' Diseño UX/UI ',
                        ' Software a la Medida ',
                    ],
                    autoStart:true,
                    loop:true,
                    delay:75,
                    deleteSpeed: 50,
                    wrapperClassName: "p1-2",
                }}/>
                </span>
             </h2>

             <button 
              data-aos="fade-up"
              data-aos-delay="600"
              className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
             cursor-pointer rounded-full text-lg font-medium'>
                <span> Ver Servicios </span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block ' />

             </button>
        </div>
    </div>
  )
}

export default Hero


{/* 


"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col' >

    <ParticlesHero/>

        <div className='relative z-10 flex flex-col items-center'>
            
            {/* --- ZONA DE IMAGEN (SOLO ALEXANDER) --- 
            <Image
                src="/images/alexander.jpeg" // Tu foto
                alt="Alexander"
                width={150}
                height={150}
                // Mantengo tus estilos: borde azul, cover, redondo
                className="rounded-full border-[5px] border-[#0067f7aa] object-cover w-[150px] h-[150px]"
                data-aos="fade-up" // Usamos fade-up para que aparezca subiendo (se ve mejor cuando es una sola imagen)
            />
            {/* --------------------------------------- 

             <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Full Stack & <br/>
                <span className='text-cyan-200'> Automatización Inteligente </span>
             </h1>
             
             <h2 
              data-aos="fade-up"
              data-aos-delay="400"
              className='mt-5 text-lg sm:text-2xl font-medium flex flex-wrap items-center justify-center gap-2 px-2 text-center'>

                Ofrecemos servicios de 
                <span className='text-cyan-200 font-bold '>
                <Typewriter options={{
                    strings:[
                        ' Desarrollo de Software ',
                        ' Automatización con IA ',
                        ' Marketing Digital ',
                        ' Diseño UX/UI ',
                        ' Software a la Medida ',
                    ],
                    autoStart:true,
                    loop:true,
                    delay:75,
                    deleteSpeed: 50,
                    wrapperClassName: "p1-2",
                }}/>
                </span>
             </h2>

             <button 
              data-aos="fade-up"
              data-aos-delay="600"
              className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
             cursor-pointer rounded-full text-lg font-medium'>
                <span> Ver Servicios </span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block ' />

             </button>
        </div>
    </div>
  )
}

export default Hero

*/}
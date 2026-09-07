import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="works" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4x1 xl:text-5xl font-bold text-white'>
            Seccion donde se muestran los <br/>{" "} 
            <span className='text-cyan-300'> projectos  </span> 
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/*1 Proyeccto */}
            <div
                 data-aos="fade-up"
                data-aos-dalay="0"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p1.jpg"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Dashboard de finanzas
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Dashboard de finanzas
            </h1>
            </div>
            {/*2 Proyeccto */}
            <div
                data-aos="fade-up"
                data-aos-dalay="100"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p2.jpg"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Dashboard de finanzas
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Dashboard de finanzas
            </h1>
            </div>
            {/*3 Proyeccto */}
            <div 
                data-aos="fade-up"
                data-aos-dalay="200"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p3.jpg"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Dashboard de finanzas
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Dashboard de finanzas
            </h1>
            </div>
            {/*4 Proyeccto */}
            <div                
                data-aos="fade-up"
                data-aos-dalay="300"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p4.jpg"
                alt="img"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Dashboard de finanzas
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Dashboard de finanzas
            </h1>
            </div>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id="contact" className='pt-16 pb-16 bg-slate-900'> {/* Agregué fondo oscuro para ver mejor */}
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            
            {/* --- COLUMNA 1: INFORMACIÓN (IZQUIERDA) --- */}
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
                    Hola <span className='text-cyan-300'> Contactame </span>
                </h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                    Contactame por que chamba chmaba 
                </p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className="w-9 h-9 text-cyan-300" />
                        <p className='text-xl font-bold text-gray-400'>
                            Alex@ydler.com
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiPhone className="w-9 h-9 text-cyan-300" />
                        <p className='text-xl font-bold text-gray-400'>
                            0424211861
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className="w-9 h-9 text-cyan-300" />
                        <p className='text-xl font-bold text-gray-400'>
                            Caracas-Venezuela
                        </p>
                    </div>
                    {/* social icon */}
                    <div className='flex items-center mt-8 space-x-3'>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>   
                            <FaFacebook className='text-white w-6 h-6'/>
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300'>   
                            <FaInstagram className='text-white w-6 h-6'/>
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>   
                            <FaLinkedinIn className='text-white w-6 h-6'/>
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>   
                            <FaGithub className='text-white w-6 h-6'/>
                        </div>
                    </div>
                </div>
            </div> {/* <--- ¡AQUÍ ESTABA EL ERROR! Cerrar el div de la izquierda aquí. */}


            {/* --- COLUMNA 2: FORMULARIO (DERECHA) --- */}
            <div 
            data-aos="zoom-in"
                data-aos-dalay="0"
                data-aos-anchor-placement="top-center"
                className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <input 
                    type="text"
                    placeholder='Nombre'
                    className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                />
                <input 
                    type="email"
                    placeholder='Email'
                    className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                />
                <input 
                    type="text"
                    placeholder='Asunto'
                    className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                />
                {/* Cambié el último input por un textarea para el mensaje */}
                <textarea 
                    rows={4}
                    placeholder='Mensaje'
                    className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 resize-none'
                />
                <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900  text-white   transition-all duration-300 cursor-pointer  rounded-full  '>
                    Enviar Mensaje
                </button>
            </div>

        </div>
    </div>
  )
}

export default Contact
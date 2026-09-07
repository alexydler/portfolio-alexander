"use client";

import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

// Definimos el tipo para las props
type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    // ERROR 1 CORREGIDO: Faltaba el signo '='
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    // ERROR 2 CORREGIDO: Uso de comillas invertidas (backticks) `` para la lógica dinámica
    <div className={`fixed w-full transition-all duration-200 h-[12vh] z-[1000] ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''}`}>
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className="w-5 h-5 text-black" />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>
                    SoftAE
                </h1>
            </div>

            {/* NAVLINKS */}
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>   
                            <p>{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            {/* BOTONES */}
            <div className='flex items-center space-x-4'>
                <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                    <BiDownload className="w-5 h-5" />
                    <span>Descargar CV</span>
                </button>
                
                {/* Botón menú móvil */}
                <HiBars3BottomRight 
                    onClick={openNav}
                    className="w-8 h-8 cursor-pointer text-white lg:hidden" 
                />
            </div>

        </div>
    </div>
  )
}

export default Nav;
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* OVERLAY (Fondo Oscuro) */}
      <div 
        onClick={closeNav} // Para que se cierre al dar clic fuera
        className={`fixed ${showNav ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'} inset-0 transform transition-all duration-500 z-[10000] bg-black w-full h-screen`}
      />
      
      {/* MENU LATERAL */}
      {/* CORRECCIÓN AQUÍ: Cambié bg-cyan-800 por bg-[#0f142e] para que coincida con el tema */}
      <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#0f142e] space-y-6 z-[100050] right-0 top-0`}>
        
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url} onClick={closeNav}> {/* Agregué onClick para que el menú se cierre al elegir una opción */}
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-cyan-300 transition-all duration-200">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* Cross icon (Cerrar) */}
        <CgClose 
            onClick={closeNav}
            className='absolute top-[1.5rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-cyan-300 transition-all' 
        />
      </div>
    </div>
  )
}

export default MobileNav
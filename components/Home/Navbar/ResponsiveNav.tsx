"use client"; 
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

    // 1. CORREGIDO: Usamos camelCase (setShowNav con S mayúscula) para seguir el estándar
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

  return (
    <div>
        {/* Nota: Borré el texto "ResponsiveNav" que tenías aquí suelto, 
            ya que eso aparecería escrito en tu página web y se vería mal.
        */}
        
        <Nav openNav={openNavHandler} />
        
        {/* 2. CORREGIDO: La propiedad se llama 'closeNav', no 'classNav' */}
        <MobileNav showNav={showNav} closeNav={closeNavHandler}  />
    </div>
  )
}

export default ResponsiveNav
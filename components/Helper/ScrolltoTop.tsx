"use client";

import React, { useEffect, useState } from 'react'; // 1. Faltaba importar useState
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {

    // 2. Corregido el nombre de la variable (isVisible) y del set
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    
    }, []); // 3. El array [] va DENTRO del paréntesis del useEffect


    // 4. Corregido el nombre de la función y la sintaxis de window.scrollTo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 5. 'behavior' se escribe con 'o', no 'a'
        });
    };

   return (
        <div className='fixed bottom-4 right-4'> {/* AGREGADO: z-[1000] */}
            {isVisible && (
                <button 
                    className='bg-blue-600 shadow-lg shadow-blue-500/50 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none hover:bg-blue-800 transition-all animate-bounce' // Agregué animate-bounce y shadow
                    onClick={scrollToTop}
                > 
                    <FaArrowUp/>           
                </button>
            )}
        </div>
    )
}

export default ScrollToTop;
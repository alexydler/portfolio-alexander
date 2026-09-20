import React from 'react'

const Footer = () => {
  return (
    // CAMBIO: Usamos bg-slate-950 (negro azulado sólido) en vez de transparente
    // Agregué 'z-[100]' para asegurar que quede por encima de las partículas si fuera necesario
    <div className='pt-10 pb-10 bg-slate-900 border-t border-slate-800 text-center  relative'>
        <h1 className='text-lg text-white/70'>
            Mis <span className='text-cyan-300'> Portafolio Alexander Ydler</span>
        </h1>
        <p className='text-sm text-white/50 mt-2'>© 2026 Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer
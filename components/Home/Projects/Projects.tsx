import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id="works" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Proyectos <span className='text-cyan-300'>Destacados</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            <Link
                href="/demos/project-manager"
                className="group block"
                 data-aos="fade-up"
                data-aos-delay="0"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p1.jpg"
                alt="Vista previa de Project Manager"
                width={800}
                height={650}
                className="rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Project Manager
            </h1>
            <p className='pt-2 font-medium leading-relaxed text-white/80'>
                Plataforma interactiva para gestión de proyectos, tareas, presupuestos y analítica.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Django', 'PostgreSQL', 'Redis', 'Docker'].map((technology) => (
                    <span key={technology} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                        {technology}
                    </span>
                ))}
            </div>
            <span className="mt-5 inline-block font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
                Ver demo
            </span>
            </Link>
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p2.jpg"
                alt="Próximo proyecto"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Próximamente
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Nuevo proyecto en preparación.
            </h1>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p3.jpg"
                alt="Próximo proyecto"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Próximamente
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Nuevo proyecto en preparación.
            </h1>
            </div>
            <div                
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="top-center">
                <Image
                src="/images/p4.jpg"
                alt="Próximo proyecto"
                width={800}
                height={650}
                className="rounded-lg"
                             />
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                Próximamente
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
                Nuevo proyecto en preparación.
            </h1>
            </div>
        </div>
    </div>
  )
}

export default Projects

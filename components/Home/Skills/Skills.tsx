"use client";
import React from 'react'
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiNextdotjs, SiPython, SiReact } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'


const skills = [
    {
        name:"JavaScript",
        icon: <SiJavascript/>,
        percentage:"89%",
    },
    {
        name:"React Js",
        icon: <SiReact/>,
        percentage:"92%",
    },
    {
        name:"Next Js",
        icon: <SiNextdotjs/>,
        percentage:"95%",
    },
    {
        name:"Python",
        icon: <SiPython/>,
        percentage:"99%",
    },
    {
        name:"Django",
        icon: <SiDjango/>,
        percentage:"90%",
    },
    {
        name:"CSS",
        icon: <SiCss3/>,
        percentage:"89%",
    },
    {
        name:"HTML",
        icon: <SiHtml5/>,
        percentage:"97%",
    },
]


const Skills = () => {
  return (
    <div id="skills" className='text-white pt-16 pb-16 bg-slate-900'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Mis <span className='text-cyan-300'> Habilidades </span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skil,i) => {
                return (
                    <Tilt key={skil.name} scale={1.1} transitionSpeed={400} className="glare-effect"> 
                        
                        <div 
                        data-aos="flip-right"
                        data-aos-dalay={i * 100}
                        data-aos-anchor-placement="top-center"
                        className='bg-[#14134145] text-center w-40 h-52 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-115 border border-slate-700 cursor-pointer'>

                            <div className='text-6xl mb-4'>
                                {skil.icon}
                            </div>
                         
                            <p className='text-2xl font-semibold text-white'>{skil.percentage}</p>
                            <p className='text-cyan-300 mt-2 font-bold'> {skil.name} </p>

                        </div>
                    </Tilt>
                )
            })}
        </div>
    </div>
  );
}; 

export default Skills;
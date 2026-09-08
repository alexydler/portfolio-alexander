"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">

        {/* FOTO DE PERFIL */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/alexander.jpeg"
            alt="Alexander Ydler"
            width={150}
            height={150}
            className="rounded-full border-5 border-[#0067f7aa] object-cover w-[150px] h-[150px]"
            data-aos="fade-right"
          />
        </div>

        

        {/* TITULAR PRINCIPAL */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-center font-bold tracking-wide"
        >
          Full Stack Developer
          <br />
          <span className="text-cyan-200">
            & Automatización Inteligente
          </span>
        </h1>

        {/* ROLES */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-lg sm:text-2xl font-medium flex flex-wrap items-center justify-center gap-2 px-2 text-center"
        >
          <span>Especializado en</span>

          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Desarrollo Full Stack",
                  "Desarrollo con Python",
                  "Backend & APIs",
                  "Frontend",
                  "Automatización con IA",
                  "Software a la Medida",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </div>

        {/* CTA */}
        <a
          href="#works"
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          <span>Ver mis proyectos</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
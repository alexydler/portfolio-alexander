import Home from "@/components/home";
import ParticlesHero from "@/components/Home/Hero/ParticleBackground";
import React from "react";
//import ParticlesHero from "./ParticleBackground"; // Importamos tu componente

const HomePage = () => {
  return (

    <div className="relative w-full">
        
        {/* Tu contenido principal */}
        <Home/>
        
    </div>
  );
};

export default HomePage;

//Localhost:3000
//Localhost:3000/about
//Localhost:3000/about/team
//Localhost:3000/about/team/AE
//Localhost:3000/about/team/AE/Portaforlio

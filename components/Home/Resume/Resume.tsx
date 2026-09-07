"use client";

import React, { useState } from "react";
import ResumeCard from "./ResumeCard";
import {
  FaDatabase,
  FaPython,
  FaServer,
  FaCode,
  FaMicrosoft,
} from "react-icons/fa6";
import { SiN8N, SiTensorflow, SiDocker, SiGooglegemini, SiDjango } from "react-icons/si";

const Resume = () => {
  // Estado para controlar qué perfil está activo
  const [activeTab, setActiveTab] = useState("alexander");

  return (
    <div id="resume" className=" pt-20 pb-16">
        
      {/* Animación CSS para cuando cambias de pestaña */}
      <style jsx>{`
        .fade-in-content {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h1
        className="text-center text-3xl sm:text-5xl font-bold text-white mb-10"
        data-aos="fade-right"
      >
        Nuestra <span className="text-cyan-300"> Trayectoria </span>
      </h1>

      {/* ==================== BOTONES DE INTERACCIÓN ==================== */}
      <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
        <button
          onClick={() => setActiveTab("alexander")}
          className={`px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 ${
            activeTab === "alexander"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
              : "bg-slate-800 text-gray-400 hover:bg-slate-700"
          }`}
        >
          Alexander Ydler
        </button>

        <button
          onClick={() => setActiveTab("eyleen")}
          className={`px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold transition-all duration-300 ${
            activeTab === "eyleen"
              ? "bg-pink-600 text-white shadow-lg shadow-pink-500/50 scale-105"
              : "bg-slate-800 text-gray-400 hover:bg-slate-700"
          }`}
        >
          Eyleen Jaen
        </button>
      </div>

      {/* Contenedor principal de la información */}
      <div className="w-[85%] xl:w-[80%] mx-auto relative overflow-visible">
        
        {/* ==================== SLIDE 1: ALEXANDER ==================== */}
        {activeTab === "alexander" && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-8 fade-in-content">
            {/* Alexander Experiencia */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                Experiencia: <span className="text-cyan-200">Alexander</span>
              </h2>

              <div className="mt-6 space-y-6">
                <ResumeCard
                  Icon={SiN8N}
                  role="Desarrollo de Tecnología IA"
                  company="G-Talent.net"
                  date="Jun 2025 - Sept 2025"
                  description="Lideré la innovación implementando +5 automatizaciones clave con n8n, Zapier y Make, reduciendo tiempos de ejecución manual y optimizando flujos internos."
                />
                <ResumeCard
                  Icon={SiDjango}
                  role="Desarrollador ERP (Django)"
                  company="Sonitus"
                  date="Feb 2025 - Actualidad"
                  description="Diseño y desarrollo de sistema a la medida con Django/Docker para gestión de inventarios y soportes. Implementación de módulos en tiempo real."
                />
                <ResumeCard
                  Icon={FaCode}
                  role="Desarrollador Web"
                  company="Rent-A-House"
                  date="Feb 2025 - Mar 2025"
                  description="Desarrollo de plataforma inmobiliaria centralizada usando Python y Django, optimizando la visualización de datos de propiedades."
                />
              </div>
            </div>

            {/* Alexander Educación y Certificados */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                Certificados: <span className="text-cyan-200">Alexander</span>
              </h2>

              <div className="mt-6 space-y-6">
                <ResumeCard
                  Icon={SiN8N}
                  role="Curso Completo N8N: Automatización IA"
                  company="Udemy / Academy"
                  url="https://www.udemy.com/certificate/UC-cbc9bb30-a978-4480-b825-c3397dc07cab/"
                  description="Dominio avanzado de flujos de trabajo automatizados."
                />
                <ResumeCard
                  Icon={FaPython}
                  role="Python Essentials 1 & 2"
                  company="Python Institute"
                  url="https://www.credly.com/badges/cf50d2cd-44d6-437f-b8ac-10e2aa7d38df/public_url"
                  description="Fundamentos sólidos de programación y estructuras de datos."
                />
                <ResumeCard
                  Icon={FaDatabase}
                  role="SQL"
                  company="Udemy / Academy"
                  url="https://www.udemy.com/certificate/UC-82e4addc-1041-42c9-8cc1-2141baac46e7/"
                  description="Manejo de bases de datos relacionales."
                />
                <ResumeCard
                  Icon={FaMicrosoft}
                  role="Power BI: Dashboards"
                  company="Udemy / Academy"
                  url="https://www.udemy.com/certificate/UC-bdb3f61b-dac8-4426-a024-bbc381ddbcd9/"
                  description="Creación de tableros interactivos para toma de decisiones."
                />
                <ResumeCard
                  Icon={SiGooglegemini}
                  role="Ingenieria de Prompts para IA"
                  company="G-Talent.net"
                  url="https://courses.architechpro.cc/g-talent/validez_certificado?h=WMTw6%2F81HP%2FhMlipiKlCfcSoCpCz94zbzWk37oxhLlaMPvvuHX%2FVl6EaCrCoq9zO"
                  description="Creación y optimización de prompts para IA."
                />
              </div>
            </div>
          </div>
        )}

        {/* ==================== SLIDE 2: EYLEEN ==================== */}
        {activeTab === "eyleen" && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-8 fade-in-content">
            {/* Eyleen Experiencia */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-pink-400 pl-4">
                Experiencia: <span className="text-pink-500">Eyleen</span>
              </h2>

              <div className="mt-6 space-y-6">
                <ResumeCard
                  Icon={FaServer}
                  role="Desarrollador Python (Microservicios)"
                  company="Cypress Electronics"
                  date="Nov 2024 - Actualidad"
                  companyColor="text-pink-500"
                  description="Desarrollo de backend con Flask para análisis de métricas de sensores. Entrenamiento de modelos TensorFlow para clasificación de datos."
                />
                <ResumeCard
                  Icon={FaDatabase}
                  role="Líder de Integración SQL"
                  company="Dimassi C.A."
                  date="Ago 2024 - Feb 2025"
                  companyColor="text-pink-500"
                  description="Integración técnica entre sistemas externos y Profit Plus. Migración crítica de MS Access a SQL Server y configuración de redes."
                />
                <ResumeCard
                  Icon={SiDocker}
                  role="Full Stack"
                  company="Sonitus / Akuvox"
                  date="Jul 2025 - Ago 2025"
                  companyColor="text-pink-500"
                  description="App web full-stack para gestión de tickets. Despliegue en VPS con Docker y Nginx, usando Django, PostgreSQL y Redis."
                />
              </div>
            </div>

            {/* Eyleen Educación y Certificados */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-pink-400 pl-4">
                Certificados: <span className="text-pink-500">Eyleen</span>
              </h2>

              <div className="mt-6 space-y-6">
                <ResumeCard
                  Icon={SiTensorflow}
                  role="Data Science with Python"
                  company="Simplilearn"
                  url="https://www.simplilearn.com"
                  companyColor="text-pink-500"
                  description="Ciencia de datos aplicada y modelos de Machine Learning."
                />
                <ResumeCard
                  Icon={FaPython}
                  role="Python Essentials"
                  company="Cisco Networking Academy"
                  url="https://www.netacad.com"
                  companyColor="text-pink-500"
                  description="Certificación oficial en desarrollo Python."
                />
                <ResumeCard
                  Icon={FaDatabase}
                  role="SQL Essential Training"
                  company="LinkedIn Learning"
                  url="https://www.linkedin.com/learning"
                  companyColor="text-pink-500"
                  description="Dominio de consultas y administración de bases de datos."
                />
                <ResumeCard
                  Icon={FaCode}
                  role="Aplicaciones con Tkinter"
                  company="Udemy"
                  url="https://www.udemy.com"
                  companyColor="text-pink-500"
                  description="Desarrollo de interfaces gráficas de escritorio."
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
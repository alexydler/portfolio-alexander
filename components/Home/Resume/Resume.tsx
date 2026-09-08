"use client";

import {
  FaCode,
  FaDatabase,
  FaMicrosoft,
  FaPython,
  FaServer,
} from "react-icons/fa6";
import { SiDjango, SiGooglegemini, SiN8N } from "react-icons/si";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <h1
        className="text-center text-3xl sm:text-5xl font-bold text-white mb-10"
        data-aos="fade-right"
      >
        Mi <span className="text-cyan-300">Trayectoria</span>
      </h1>

      <div className="w-[85%] xl:w-[80%] mx-auto relative overflow-visible">

        {/* ========================= */}
        {/* EXPERIENCIA + EDUCACIÓN */}
        {/* ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-8">

          {/* EXPERIENCIA */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Experiencia Profesional
            </h2>

            <div className="mt-6 space-y-6">
              <ResumeCard
                Icon={FaCode}
                role="Desarrollo de Software & Sistemas de IA"
                company="Cypress Technologies / Khamex Systems"
                date="Ene 2026 - Presente"
                description="Participación en el desarrollo de soluciones de software y algoritmos basados en Inteligencia Artificial y visión artificial para sistemas de detección y procesamiento en tiempo real. Diseño de módulos backend de alto rendimiento utilizando C++ y Python."
              />

              <ResumeCard
                Icon={SiDjango}
                role="Desarrollador Full Stack ERP"
                company="Sonitus"
                date="Feb 2025 - Mar 2026"
                description="Diseñé y desarrollé un ERP modular a medida con frontend responsivo, backend en Python y Django, base de datos PostgreSQL, funcionalidades en tiempo real y despliegue mediante Docker en un servidor VPS Linux."
              />

              <ResumeCard
                Icon={FaServer}
                role="Desarrollador de Sistema Paperless"
                company="Anatomía Fitness"
                date="Jun 2025 - Sept 2025"
                description="Desarrollé un sistema digital para la gestión y firma de contratos, eliminando el uso de papel en el proceso de inscripción y permitiendo a los usuarios firmar acuerdos directamente desde dispositivos móviles."
              />

              <ResumeCard
                Icon={SiN8N}
                role="Desarrollo de Tecnología IA"
                company="G-Talent.net"
                date="Jun 2025 - Sept 2025"
                description="Lideré iniciativas de innovación y automatización, implementando más de cinco flujos con n8n, Zapier y Make para optimizar procesos internos y reducir tareas manuales."
              />
            </div>
          </div>

          {/* EDUCACIÓN */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
              Educación
            </h2>

            <div className="mt-6 space-y-6">
              <ResumeCard
                Icon={FaCode}
                role="Ingeniería de Sistemas"
                company="Universidad Santa María"
                date="Sept 2020 - May 2025"
                description="Formación universitaria en Ingeniería de Sistemas."
              />

              <ResumeCard
                Icon={FaServer}
                role="Máster en DevOps y Arquitectura de Sistemas Cloud"
                company="CEUPE"
                date="Dic 2025 - Presente"
                description="Formación especializada en DevOps, arquitectura cloud, infraestructura y despliegue de sistemas."
              />
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CERTIFICACIONES */}
        {/* ========================= */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">
            Certificaciones
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6">

            <ResumeCard
              Icon={FaDatabase}
              role="Introduction to Data Science"
              company="Cisco"
              url="https://www.credly.com/badges/c7a6b4db-0fdc-4344-8b11-5765417b89e6/public_url"
              description="Fundamentos de análisis e ingeniería de datos, ciencia de datos e inteligencia artificial, junto con una introducción a las oportunidades profesionales del sector."
            />

            <ResumeCard
              Icon={SiN8N}
              role="Curso Completo N8N: Domina la Automatización con IA"
              company="G-Talent.net"
              url="https://courses.architechpro.cc/g-talent/validez_certificado?h=FErGqLAVh%2BxYlBR1DjSCGqSYyZNA%2BvIz0QUGmXv3Awp3qEslz7NmqoirjzI2%2F70J"
              description="Creación de automatizaciones y flujos de trabajo con inteligencia artificial mediante n8n, sin necesidad de programación."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Fórmulas, Gráficas y Tablas Dinámicas con Microsoft Excel"
              company="Udemy / DataBoosters Academy"
              url="https://www.udemy.com/certificate/UC-90f6065c-aed2-4557-aed3-767669769942/"
              description="Manejo de fórmulas, visualización de datos y tablas dinámicas para el análisis de información con Microsoft Excel."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python Essentials 1"
              company="Cisco / OpenEDG Python Institute"
              url="https://www.credly.com/badges/1cd35e6f-dc14-4ffd-ad3e-355ecf848aba/public_url"
              description="Fundamentos de programación, sintaxis y semántica de Python, resolución de problemas y uso de la biblioteca estándar."
            />

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
              role="Ingeniería de Prompts para IA"
              company="G-Talent.net"
              url="https://courses.architechpro.cc/g-talent/validez_certificado?h=WMTw6%2F81HP%2FhMlipiKlCfcSoCpCz94zbzWk37oxhLlaMPvvuHX%2FVl6EaCrCoq9zO"
              description="Creación y optimización de prompts para IA."
            />

            <ResumeCard
              Icon={FaCode}
              role="Inglés - Principiante I (A1.1)"
              company="Babbel"
              certificatePdf="/certificates/Babbel A1-1.pdf"
              description="Formación inicial de inglés correspondiente al nivel A1.1 del MCER."
            />

            <ResumeCard
              Icon={FaCode}
              role="Inglés - Principiante II (A1.2)"
              company="Babbel"
              certificatePdf="/certificates/Babbel A1-2.pdf"
              description="Continuación del nivel principiante de inglés, equivalente al nivel A1.2 del MCER."
            />

            <ResumeCard
              Icon={FaCode}
              role="Inglés - Elemental I (A2.1)"
              company="Babbel"
              certificatePdf="/certificates/Babbel A2-1.pdf"
              description="Formación elemental de inglés orientada al nivel A2.1 del MCER."
            />

            <ResumeCard
              Icon={FaCode}
              role="Inglés - Elemental II (A2.2)"
              company="Babbel"
              certificatePdf="/certificates/Babbel A2-2.pdf"
              description="Consolidación del inglés elemental correspondiente al nivel A2.2 del MCER."
            />

            <ResumeCard
              Icon={FaCode}
              role="Conceptos de la Programación"
              company="Open Bootcamp"
              certificatePdf="/certificates/conceptos de programacion ope bootcamp.pdf"
              description="Fundamentos de programación, lógica, estructuras básicas y resolución de problemas."
            />

            <ResumeCard
              Icon={FaPython}
              role="Crea Aplicaciones de Escritorio con Tkinter en Python"
              company="Udemy / José Ojeda Rojas"
              certificatePdf="/certificates/Crea aplicaciones de escritorio con tkinter en Python.pdf"
              description="Desarrollo de interfaces y aplicaciones de escritorio con Python y Tkinter."
            />

            <ResumeCard
              Icon={FaCode}
              role="Aprende CSS3 de Cero a Experto"
              company="Udemy / Portal Ingeniería"
              certificatePdf="/certificates/Css3.pdf"
              description="Creación y estilización de interfaces web con CSS3, desde fundamentos hasta técnicas avanzadas."
            />

            <ResumeCard
              Icon={FaCode}
              role="Universidad HTML: Desde Cero hasta Experto"
              company="Udemy / Global Mentoring"
              certificatePdf="/certificates/curso html.pdf"
              description="Formación integral en estructura y marcado semántico de páginas web con HTML."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Microsoft Excel: Desde Cero para Principiantes"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/excel basico.pdf"
              description="Fundamentos de Excel para organizar, calcular y analizar información en hojas de cálculo."
            />

            <ResumeCard
              Icon={FaDatabase}
              role="Finanzas Personales: Éxito Financiero a tu Alcance"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/Finanzas-Personales-Udemy.pdf"
              description="Principios prácticos de presupuesto, ahorro y gestión financiera personal."
            />

            <ResumeCard
              Icon={FaCode}
              role="Aprende HTML5 de Cero a Experto"
              company="Udemy / Portal Ingeniería"
              certificatePdf="/certificates/html 5.pdf"
              description="Desarrollo de páginas web estructuradas y semánticas utilizando HTML5."
            />

            <ResumeCard
              Icon={FaCode}
              role="Introducción a la Programación"
              company="Open Bootcamp"
              certificatePdf="/certificates/introduccion a la programacion open bootcamp.pdf"
              description="Introducción a la lógica computacional, algoritmos y conceptos esenciales del desarrollo de software."
            />

            <ResumeCard
              Icon={FaCode}
              role="Lenguaje C de Cero a Experto"
              company="Udemy / Portal Ingeniería"
              certificatePdf="/certificates/Lenguaje C de cero a experto.pdf"
              description="Programación en C desde sintaxis básica hasta estructuras y técnicas avanzadas."
            />

            <ResumeCard
              Icon={FaServer}
              role="Programa sin Código: No-Code y Low-Code"
              company="CEUPE European Business School"
              certificatePdf="/certificates/Lowcode-noCode-CEUPE.pdf"
              description="Creación de soluciones digitales mediante plataformas no-code y low-code."
            />

            <ResumeCard
              Icon={FaCode}
              role="MVP: Qué es y Cómo Crear el Tuyo"
              company="CEUPE European Business School"
              certificatePdf="/certificates/MVP- Qué es y Cómo Crear el Tuyo.pdf"
              description="Diseño y validación de productos mínimos viables para comprobar hipótesis y reducir riesgos."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Power BI: Desde Cero para Principiantes"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/Power Bi Desde cero .pdf"
              description="Fundamentos de Power BI para importar, transformar y visualizar datos."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Funciones DAX en Power BI y ChatGPT 4"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/Power Bi Funciones dax y Chat Gpt4.pdf"
              description="Aplicación de inteligencia artificial generativa para crear y comprender funciones DAX en Power BI."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Power BI: Empieza desde Cero"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/power bii.pdf"
              description="Introducción práctica al modelado y visualización de datos mediante Power BI."
            />

            <ResumeCard
              Icon={FaMicrosoft}
              role="Microsoft PowerPoint: Crea Presentaciones Profesionales"
              company="Udemy / DataBoosters Academy"
              certificatePdf="/certificates/Power Point.pdf"
              description="Diseño y estructuración de presentaciones profesionales con Microsoft PowerPoint."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python 3: Curso Completo de Cero a Experto"
              company="Udemy / Numpi Cursos"
              certificatePdf="/certificates/Python 3 .pdf"
              description="Formación completa en sintaxis, estructuras de datos y programación con Python 3."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python de Cero a Experto"
              company="G-Talent.net"
              certificatePdf="/certificates/Python g talent 0 a experto.pdf"
              description="Fundamentos y herramientas de Python para desarrollar programas y resolver problemas."
            />

            <ResumeCard
              Icon={FaPython}
              role="Programación con Python"
              company="Udemy / José Ojeda Rojas"
              certificatePdf="/certificates/python jose ojeda.pdf"
              description="Introducción práctica al desarrollo de programas y algoritmos con Python."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python"
              company="Open Bootcamp"
              certificatePdf="/certificates/python open bootcamp.pdf"
              description="Formación en fundamentos, sintaxis y desarrollo de programas con Python."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python para Principiantes"
              company="Udemy / German Hernandez"
              certificatePdf="/certificates/Python para principiantes.pdf"
              description="Introducción a la sintaxis, variables, estructuras de control y fundamentos de Python."
            />

            <ResumeCard
              Icon={FaPython}
              role="Python: De Cero hasta Reconocimiento Facial"
              company="Udemy / Academia Apps"
              certificatePdf="/certificates/Python reconocimiento facial.pdf"
              description="Programación práctica con Python aplicada progresivamente al reconocimiento facial."
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;

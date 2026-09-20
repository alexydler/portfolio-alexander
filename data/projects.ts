export type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  status: "Disponible" | "Próximamente";
  demoPath?: string;
  caseStudyPath?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Project Manager",
    description: "Plataforma interactiva para gestión de proyectos, tareas, presupuestos y analítica.",
    technologies: ["React", "Django", "PostgreSQL", "Redis", "Docker"],
    image: "/images/p-project-manager.png",
    status: "Disponible",
    demoPath: "/demos/project-manager",
    caseStudyPath: "/projects/project-manager",
  },
  {
    title: "Constructora ERP",
    description: "ERP para gestión de proyectos de construcción, inventario, personal, despachos y presupuestos.",
    technologies: ["Next.js", "Django REST", "PostgreSQL", "Redis", "Docker"],
    image: "/images/p-constructora.png",
    status: "Disponible",
    demoPath: "/demos/constructora-erp",
    caseStudyPath: "/projects/constructora-erp",
  },
  {
    title: "Sonitus ERP",
    description: "ERP modular para gestión de soportes, proyectos, inventario, presupuestos y operaciones internas.",
    technologies: ["Django", "PostgreSQL", "Redis", "Channels", "Docker"],
    image: "/images/p-sonitus.jpeg",
    status: "Próximamente",
    caseStudyPath: "/projects/sonitus-erp",
  },
  {
    title: "Contrato Digital",
    description: "Sistema digital para captura de datos, firma, vista previa y generación segura de contratos en PDF.",
    technologies: ["Django", "Python", "PDF", "JavaScript", "Docker"],
    image: "/images/p-contratos.png",
    status: "Próximamente",
    caseStudyPath: "/projects/contrato-digital",
  },
  {
    title: "Anatomía Fitness Web",
    description: "Sitio web responsive para presentación de servicios, galería, testimonios y contenido comercial.",
    technologies: ["Django", "Bootstrap", "JavaScript", "HTML", "CSS"],
    image: "/images/p-webanatomia.png",
    status: "Próximamente",
    caseStudyPath: "/projects/anatomia-fitness",
  },
];

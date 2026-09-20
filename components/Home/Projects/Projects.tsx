import Image from "next/image";
import { PortfolioProject, portfolioProjects } from "@/data/projects";
import TechnologyBadge from "@/components/Projects/CaseStudy/TechnologyBadge";
import RouteTransitionLink from "@/components/Loading/RouteTransitionLink";

function ProjectContent({ project }: { project: PortfolioProject }) {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          width={800}
          height={650}
          className={`w-full rounded-lg transition-transform duration-300 ${project.demoPath ? "group-hover:scale-[1.02]" : ""}`}
        />
        <span className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${project.status === "Disponible" ? "border-emerald-300/30 bg-emerald-950/70 text-emerald-200" : "border-white/15 bg-slate-950/75 text-white/70"}`}>
          {project.status}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">{project.title}</h2>
      <p className="pt-2 font-medium leading-relaxed text-white/80">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechnologyBadge key={technology} name={technology} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {

  const animationProps = {
    "data-aos": "fade-up",
    "data-aos-delay": String(index * 100),
    "data-aos-anchor-placement": "top-center",
  };

  if (project.caseStudyPath) {
    return <RouteTransitionLink href={project.caseStudyPath} className="group block" {...animationProps}><ProjectContent project={project} /></RouteTransitionLink>;
  }

  if (project.demoPath) {
    return <RouteTransitionLink href={project.demoPath} className="group block" {...animationProps}><ProjectContent project={project} /></RouteTransitionLink>;
  }

  return <article {...animationProps}><ProjectContent project={project} /></article>;
}

const Projects = () => {
  return (
    <div id="works" className="pb-16 pt-16">
      <h1 className="text-center text-2xl font-bold text-white md:text-4xl xl:text-5xl">
        Proyectos <span className="text-cyan-300">Destacados</span>
      </h1>
      <div className="mx-auto mt-16 grid w-[85%] grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

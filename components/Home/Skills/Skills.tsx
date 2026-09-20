"use client";

import type { IconType } from "react-icons";
import {
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaListCheck,
  FaMicrosoft,
  FaRobot,
  FaServer,
} from "react-icons/fa6";
import {
  SiClaude,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMake,
  SiN8N,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiScrumalliance,
  SiTailwindcss,
  SiTypescript,
  SiZapier,
  SiDart,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import styles from "./Skills.module.css";

type Skill = {
  name: string;
  percentage: string;
  icon: IconType;
};

const skills: Skill[] = [
  { name: "JavaScript", percentage: "89%", icon: SiJavascript },
  { name: "React Js", percentage: "92%", icon: SiReact },
  { name: "Next Js", percentage: "95%", icon: SiNextdotjs },
  { name: "Python", percentage: "99%", icon: SiPython },
  { name: "Django", percentage: "90%", icon: SiDjango },
  { name: "CSS", percentage: "89%", icon: SiCss3 },
  { name: "HTML", percentage: "97%", icon: SiHtml5 },
  { name: "C++", percentage: "85%", icon: SiCplusplus },
  { name: "PostgreSQL", percentage: "90%", icon: SiPostgresql },
  { name: "Redis", percentage: "82%", icon: SiRedis },
  { name: "Docker", percentage: "88%", icon: SiDocker },
  { name: "Linux", percentage: "88%", icon: SiLinux },
  { name: "Git", percentage: "92%", icon: SiGit },
  { name: "FastAPI", percentage: "86%", icon: SiFastapi },
  { name: "n8n", percentage: "93%", icon: SiN8N },
  { name: "Zapier", percentage: "85%", icon: SiZapier },
  { name: "Make", percentage: "85%", icon: SiMake },
  { name: "ChatGPT", percentage: "95%", icon: SiOpenai },
  { name: "Prompt Engineering", percentage: "95%", icon: FaRobot },
  { name: "Claude", percentage: "90%", icon: SiClaude },
  { name: "Gemini", percentage: "90%", icon: SiGooglegemini },
  { name: "GitHub", percentage: "92%", icon: SiGithub },
  { name: "Arquitectura Cloud", percentage: "85%", icon: FaServer },
  { name: "Bases de Datos Cloud", percentage: "82%", icon: FaDatabase },
  { name: "Gestión de VPS", percentage: "88%", icon: FaServer },
  { name: "Desarrollo de APIs", percentage: "92%", icon: FaCode },
  { name: "TypeScript", percentage: "85%", icon: SiTypescript },
  { name: "Flutter", percentage: "75%", icon: SiFlutter },
  { name: "Dart", percentage: "75%", icon: SiDart },
  { name: "Figma", percentage: "75%", icon: SiFigma },
  { name: "Tailwind CSS", percentage: "90%", icon: SiTailwindcss },
  { name: "Microsoft Excel", percentage: "88%", icon: FaMicrosoft },
  { name: "Power BI", percentage: "86%", icon: FaMicrosoft },
  { name: "DAX", percentage: "80%", icon: FaMicrosoft },
  { name: "Data Science", percentage: "82%", icon: FaDatabase },
  { name: "Scrum", percentage: "85%", icon: SiScrumalliance },
  { name: "Kanban", percentage: "85%", icon: FaListCheck },
  { name: "XP", percentage: "80%", icon: FaDiagramProject },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;

  return (
    <Tilt scale={1.1} transitionSpeed={400} className="glare-effect shrink-0">
      <div
        data-aos="flip-right"
        data-aos-delay={index * 70}
        data-aos-anchor-placement="top-center"
        className="bg-[#14134145] text-center w-40 h-52 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-115 border border-slate-700 cursor-pointer"
      >
        <Icon className="mb-4 text-6xl" aria-hidden="true" />
        <p className="text-2xl font-semibold text-white">{skill.percentage}</p>
        <p className="text-cyan-300 mt-2 font-bold">{skill.name}</p>
      </div>
    </Tilt>
  );
}

const Skills = () => {
  return (
    <div id="skills" className="bg-slate-900 pb-16 pt-16 text-white">
      <h1 className="text-center text-2xl font-bold text-white md:text-4xl xl:text-5xl">
        Mis <span className="text-cyan-300">Habilidades</span>
      </h1>

      <div className={`${styles.marquee} mt-16`}>
        <div className={styles.track}>
          <div className={styles.group}>
            {skills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
          </div>
          <div className={styles.group} aria-hidden="true">
            {skills.map((skill, index) => <SkillCard key={`${skill.name}-copy`} skill={skill} index={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import type { IconType } from "react-icons";
import { FaCode, FaFilePdf } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
} from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Django: SiDjango,
  "Django REST": SiDjango,
  "Django REST Framework": SiDjango,
  "Django Channels": SiDjango,
  Channels: SiDjango,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Docker: SiDocker,
  Python: SiPython,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  HTML: SiHtml5,
  CSS: SiCss3,
  PDF: FaFilePdf,
  xhtml2pdf: FaFilePdf,
};

export default function TechnologyBadge({ name, prominent = false }: { name: string; prominent?: boolean }) {
  const Icon = technologyIcons[name] ?? FaCode;

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] font-semibold text-cyan-100 ${prominent ? "px-4 py-2 font-mono text-xs" : "px-3 py-1 text-xs"}`}>
      <Icon className="shrink-0 text-cyan-300" aria-hidden="true" />
      {name}
    </span>
  );
}

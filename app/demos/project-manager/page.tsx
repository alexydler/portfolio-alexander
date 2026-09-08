import dynamic from "next/dynamic";

const ProjectManagerDemo = dynamic(
  () => import("@/components/Demos/ProjectManager/ProjectManagerDemo")
);

export const metadata = {
  title: "Project Manager Demo | Alexander Ydler",
  description: "Demo interactiva de gestión de proyectos con datos ficticios.",
};

export default function ProjectManagerDemoPage() {
  return <ProjectManagerDemo />;
}

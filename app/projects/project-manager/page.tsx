import type { Metadata } from "next";
import CaseStudyPage from "@/components/Projects/CaseStudy/CaseStudyPage";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "Project Manager | Case Study", description: caseStudies["project-manager"].subtitle };
export default function Page() { return <CaseStudyPage config={caseStudies["project-manager"]} />; }

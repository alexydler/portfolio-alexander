import type { Metadata } from "next";
import CaseStudyPage from "@/components/Projects/CaseStudy/CaseStudyPage";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "Anatomía Fitness Web | Case Study", description: caseStudies["anatomia-fitness"].subtitle };
export default function Page() { return <CaseStudyPage config={caseStudies["anatomia-fitness"]} />; }

import type { Metadata } from "next";
import CaseStudyPage from "@/components/Projects/CaseStudy/CaseStudyPage";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "Sonitus ERP | Case Study", description: caseStudies["sonitus-erp"].subtitle };
export default function Page() { return <CaseStudyPage config={caseStudies["sonitus-erp"]} />; }

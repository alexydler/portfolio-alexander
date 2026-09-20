import type { Metadata } from "next";
import CaseStudyPage from "@/components/Projects/CaseStudy/CaseStudyPage";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "Constructora ERP | Case Study", description: caseStudies["constructora-erp"].subtitle };
export default function Page() { return <CaseStudyPage config={caseStudies["constructora-erp"]} />; }

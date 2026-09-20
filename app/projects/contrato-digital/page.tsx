import type { Metadata } from "next";
import CaseStudyPage from "@/components/Projects/CaseStudy/CaseStudyPage";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = { title: "Contrato Digital | Case Study", description: caseStudies["contrato-digital"].subtitle };
export default function Page() { return <CaseStudyPage config={caseStudies["contrato-digital"]} />; }

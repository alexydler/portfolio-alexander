import { BarChart3, Boxes, Building2, CalendarDays, CheckCircle2, ClipboardList, Container, Database, FileSignature, GalleryHorizontal, HelpCircle, KeyRound, LayoutDashboard, MessageSquare, PackageCheck, ServerCog, ShieldCheck, Smartphone, Truck, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TechnologyBadge from "./TechnologyBadge";
import RouteTransitionLink from "@/components/Loading/RouteTransitionLink";

export type CaseStudyIcon = "dashboard" | "projects" | "tasks" | "budget" | "users" | "calendar" | "analytics" | "chat" | "responsive" | "inventory" | "tools" | "dispatch" | "requirements" | "support" | "clients" | "form" | "signature" | "preview" | "pdf" | "gallery" | "faq" | "services";
export type CaseStudyConfig = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string[];
  context: string;
  problems: string[];
  results?: string[];
  solutionIntro: string;
  solutionLayers: [string, string][];
  demoNote?: string;
  features: { title: string; text: string; icon: CaseStudyIcon }[];
  architecture: { title: string; nodes: string[] }[];
  decisions: [string, string][];
  challenges: { title: string; text: string }[];
  demoPath?: string;
};

const icons: Record<CaseStudyIcon, LucideIcon> = {
  dashboard: LayoutDashboard, projects: Boxes, tasks: CheckCircle2, budget: Database,
  users: Users, calendar: CalendarDays, analytics: BarChart3, chat: MessageSquare,
  responsive: Smartphone, inventory: PackageCheck, tools: Wrench, dispatch: Truck,
  requirements: ClipboardList, support: HelpCircle, clients: Building2, form: ClipboardList,
  signature: FileSignature, preview: GalleryHorizontal, pdf: FileSignature, gallery: GalleryHorizontal,
  faq: HelpCircle, services: Building2,
};
const architectureIcons: LucideIcon[] = [LayoutDashboard, ServerCog, ShieldCheck, Database, Container];

export default function CaseStudyPage({ config }: { config: CaseStudyConfig }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-slate-100">
      <RouteTransitionLink
        href="/#works"
        className="fixed left-4 top-[14vh] z-[900] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#070b18]/85 px-4 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition hover:border-cyan-300/50 hover:text-cyan-200 sm:left-6 sm:text-sm"
        aria-label="Volver a la sección de proyectos"
      >
        <span aria-hidden="true">←</span>
        Volver a proyectos
      </RouteTransitionLink>
      <section className="relative border-b border-cyan-300/10 px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(34,211,238,0.14),transparent_34%),linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Case study · {config.slug}</p>
          <h1 className="mt-7 max-w-6xl text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.9]">{config.title}</h1>
          <p className="mt-9 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{config.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-2">{config.stack.map((technology) => <TechnologyBadge key={technology} name={technology} prominent />)}</div>
          <div className="mt-10 flex flex-wrap gap-3">{config.demoPath ? <RouteTransitionLink href={config.demoPath} className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200">Ver demo</RouteTransitionLink> : <span className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold text-slate-400">Demo próximamente</span>}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32"><SectionHeading eyebrow="Contexto" title="El proyecto" /><p className="text-xl leading-9 text-slate-300">{config.context}</p></section>

      <section className="border-y border-white/[0.07] bg-white/[0.025]"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32"><div><SectionHeading eyebrow="Punto de partida" title="El problema" /><ul className="mt-9 space-y-4 text-slate-300">{config.problems.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul></div><div><SectionHeading eyebrow="Enfoque" title="La solución" /><p className="mt-8 leading-7 text-slate-300">{config.solutionIntro}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{config.solutionLayers.map(([label, value]) => <div key={label} className="border-l-2 border-cyan-300/50 bg-slate-950/40 p-4"><p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{label}</p><p className="mt-2 text-sm font-bold text-white">{value}</p></div>)}</div>{config.demoNote && <p className="mt-7 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-5 text-sm leading-6 text-cyan-50">{config.demoNote}</p>}</div></div></section>

      {config.results && <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32"><SectionHeading eyebrow="Impacto" title="Resultados" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{config.results.map((result) => <article key={result} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] p-6 text-base font-semibold leading-7 text-cyan-50">{result}</article>)}</div></section>}

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><SectionHeading eyebrow="Producto" title="Funcionalidades" /><div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{config.features.map(({ title, text, icon }) => { const Icon = icons[icon]; return <article key={title} className="bg-[#090e1e] p-7 transition hover:bg-[#0d1529]"><Icon className="text-cyan-300" size={22} /><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>; })}</div></section>

      <section className="border-y border-white/[0.07] bg-[#050812]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><SectionHeading eyebrow="Sistemas" title="Arquitectura" /><div className={`mt-14 grid gap-12 ${config.architecture.length > 1 ? "lg:grid-cols-2" : "max-w-2xl"}`}>{config.architecture.map((flow) => <ArchitectureFlow key={flow.title} title={flow.title} nodes={flow.nodes} />)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeading eyebrow="Ingeniería" title="Decisiones técnicas" /><div className="grid gap-4 sm:grid-cols-2">{config.decisions.map(([title, text], index) => <article key={title} className="rounded-2xl border border-white/10 p-6"><p className="font-mono text-[10px] text-cyan-300">DECISION_{String(index + 1).padStart(2, "0")}</p><h3 className="mt-5 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}</div></div></section>

      <section className="border-t border-white/[0.07] bg-white/[0.025]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><SectionHeading eyebrow="Complejidad" title="Retos técnicos" /><div className="mt-12 divide-y divide-white/10 border-y border-white/10">{config.challenges.map((challenge, index) => <article key={challenge.title} className="grid gap-4 py-7 sm:grid-cols-[64px_0.7fr_1.3fr] sm:items-start"><span className="font-mono text-xs text-cyan-300">0{index + 1}</span><h3 className="font-bold">{challenge.title}</h3><p className="text-sm leading-6 text-slate-400">{challenge.text}</p></article>)}</div></div></section>

      <section className="px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(15,23,42,0.65))] p-8 text-center sm:p-14"><KeyRound className="mx-auto text-cyan-300" size={28} /><h2 className="mt-7 text-3xl font-black sm:text-5xl">{config.demoPath ? "Explora la demo" : "Demo próximamente"}</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">{config.demoPath ? "La demo utiliza datos ficticios y los cambios se eliminan al recargar." : "La versión pública se encuentra en preparación y no tiene una URL disponible todavía."}</p>{config.demoPath ? <RouteTransitionLink href={config.demoPath} className="mt-9 inline-flex rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200">Entrar a la demo</RouteTransitionLink> : <span className="mt-9 inline-flex rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-slate-400">Demo próximamente</span>}</div></section>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2></div>; }
function ArchitectureFlow({ title, nodes }: { title: string; nodes: string[] }) { return <div><p className="mb-5 font-mono text-xs uppercase tracking-widest text-slate-500">{title}</p><div className="relative space-y-3 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-px before:bg-cyan-300/30">{nodes.map((label, index) => { const Icon = architectureIcons[Math.min(index, architectureIcons.length - 1)]; return <div key={label} className="relative flex items-center gap-5 rounded-2xl border border-white/10 bg-[#090e1e] p-4"><span className="z-10 grid h-14 w-14 place-items-center rounded-xl border border-cyan-300/20 bg-[#07111f] text-cyan-300"><Icon size={20} /></span><div><p className="font-bold">{label}</p>{index < nodes.length - 1 && <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-600">↓ conecta con</p>}</div></div>; })}</div></div>; }

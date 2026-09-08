"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle, BarChart3, CheckCircle2, ChevronLeft, ChevronRight,
  CircleDollarSign, FolderKanban, LayoutDashboard, LogOut, Menu, MessageSquare,
  Pencil, Plus, Search, Settings, Trash2, X,
} from "lucide-react";
import {
  Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import {
  DemoBudget, DemoProject, DemoTask, Priority, ProjectStatus, TaskStatus,
  demoUsers, initialBudgets, initialProjects, initialTasks, taskTypes,
} from "@/data/projectManagerDemo";

type View = "dashboard" | "projects" | "tasks" | "project";
type ProjectTab = "tasks" | "calendar" | "analytics" | "budget" | "settings";
type Editor = { kind: "project"; item?: DemoProject } | { kind: "task"; item?: DemoTask } | null;

const statusLabel: Record<TaskStatus, string> = { TODO: "Por hacer", IN_PROGRESS: "En curso", DONE: "Completada" };
const priorityLabel: Record<Priority, string> = { LOW: "Baja", MEDIUM: "Media", HIGH: "Alta" };
const projectStatusLabel: Record<ProjectStatus, string> = { ACTIVE: "Activo", PLANNING: "Planificación", COMPLETED: "Completado" };
const statusClass: Record<TaskStatus, string> = {
  TODO: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  IN_PROGRESS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  DONE: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};
const priorityClass: Record<Priority, string> = {
  LOW: "text-slate-400", MEDIUM: "text-amber-400", HIGH: "text-rose-400",
};

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function ProjectManagerDemo() {
  const [entered, setEntered] = useState(false);
  const [view, setView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projects, setProjects] = useState(() => structuredClone(initialProjects));
  const [tasks, setTasks] = useState(() => structuredClone(initialTasks));
  const [budgets, setBudgets] = useState(() => structuredClone(initialBudgets));
  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const [projectTab, setProjectTab] = useState<ProjectTab>("tasks");
  const [editor, setEditor] = useState<Editor>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | TaskStatus>("ALL");
  const [priorityFilter, setPriorityFilter] = useState<"ALL" | Priority>("ALL");
  const [notice, setNotice] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, author: "Valentina Cruz", text: "El prototipo responsive está listo para revisión." },
    { id: 2, author: "Mateo Rivas", text: "Perfecto. Hoy cierro la integración del catálogo." },
  ]);

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];
  const projectTasks = tasks.filter((task) => task.projectId === selectedProject?.id);
  const filteredTasks = projectTasks.filter((task) =>
    (statusFilter === "ALL" || task.status === statusFilter) &&
    (priorityFilter === "ALL" || task.priority === priorityFilter) &&
    `${task.title} ${task.description}`.toLowerCase().includes(query.toLowerCase())
  );

  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const openProject = (id: number) => {
    setSelectedProjectId(id);
    setProjectTab("tasks");
    setView("project");
    setSidebarOpen(false);
  };

  const saveProject = (project: Omit<DemoProject, "id">, id?: number) => {
    if (id) setProjects((items) => items.map((item) => item.id === id ? { ...project, id } : item));
    else {
      const nextId = Math.max(0, ...projects.map((item) => item.id)) + 1;
      setProjects((items) => [...items, { ...project, id: nextId }]);
      setBudgets((items) => [...items, { projectId: nextId, mode: "GLOBAL", status: "PENDING", amount: 0 }]);
    }
    setEditor(null);
    notify(id ? "Proyecto actualizado" : "Proyecto creado");
  };

  const deleteProject = (id: number) => {
    if (!window.confirm("¿Eliminar este proyecto y todas sus tareas?")) return;
    setProjects((items) => items.filter((item) => item.id !== id));
    setTasks((items) => items.filter((item) => item.projectId !== id));
    setBudgets((items) => items.filter((item) => item.projectId !== id));
    setView("projects");
    notify("Proyecto eliminado");
  };

  const saveTask = (task: Omit<DemoTask, "id">, id?: number) => {
    if (id) setTasks((items) => items.map((item) => item.id === id ? { ...task, id } : item));
    else {
      const nextId = Math.max(0, ...tasks.map((item) => item.id)) + 1;
      setTasks((items) => [...items, { ...task, id: nextId }]);
    }
    setEditor(null);
    notify(id ? "Tarea actualizada" : "Tarea creada");
  };

  const updateTask = (id: number, patch: Partial<DemoTask>) => {
    setTasks((items) => items.map((task) => task.id === id ? { ...task, ...patch } : task));
  };

  const deleteTask = (id: number) => {
    if (!window.confirm("¿Eliminar esta tarea?")) return;
    setTasks((items) => items.filter((task) => task.id !== id));
    notify("Tarea eliminada");
  };

  if (!entered) return <DemoLogin onEnter={() => setEntered(true)} />;

  const navigate = (next: View) => {
    setView(next);
    setSidebarOpen(false);
  };

  return (
    <main className="fixed inset-0 z-[200000] flex overflow-hidden bg-[#0B0E14] text-slate-100">
      <Sidebar open={sidebarOpen} view={view} onNavigate={navigate} onClose={() => setSidebarOpen(false)} onExit={() => setEntered(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-[#151821] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button className="rounded-xl p-2 text-slate-400 hover:bg-white/5 lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Abrir menú"><Menu size={22} /></button>
            <div><p className="text-sm font-bold">Project Manager</p><p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Workspace demo</p></div>
          </div>
          <div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-xs font-bold">Sofía Torres</p><p className="text-[10px] text-slate-500">Administradora</p></div><Avatar name="Sofía Torres" /></div>
        </header>

        <div className="border-b border-amber-400/10 bg-amber-400/[0.06] px-4 py-2 text-center text-[11px] text-amber-200 sm:text-xs">
          <strong>Demo con datos ficticios.</strong> Los cambios realizados se eliminan al recargar.
        </div>

        <section className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          {view === "dashboard" && <Dashboard projects={projects} tasks={tasks} onOpenProject={openProject} onNew={() => setEditor({ kind: "project" })} />}
          {view === "projects" && <Projects projects={projects} tasks={tasks} query={query} setQuery={setQuery} onOpen={openProject} onEdit={(item) => setEditor({ kind: "project", item })} onDelete={deleteProject} onNew={() => setEditor({ kind: "project" })} />}
          {view === "tasks" && <AllTasks tasks={tasks} projects={projects} onOpenProject={openProject} />}
          {view === "project" && selectedProject && (
            <ProjectWorkspace
              project={selectedProject} tasks={projectTasks} filteredTasks={filteredTasks} budget={budgets.find((item) => item.projectId === selectedProject.id)}
              tab={projectTab} setTab={setProjectTab} query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter}
              priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} onBack={() => setView("projects")}
              onNewTask={() => setEditor({ kind: "task" })} onEditTask={(item) => setEditor({ kind: "task", item })}
              onDeleteTask={deleteTask} onUpdateTask={updateTask} onEditProject={() => setEditor({ kind: "project", item: selectedProject })}
              onDeleteProject={() => deleteProject(selectedProject.id)} onUpdateBudget={(patch) => setBudgets((items) => items.map((item) => item.projectId === selectedProject.id ? { ...item, ...patch } : item))}
              messages={chatMessages} onMessage={(text) => setChatMessages((items) => [...items, { id: Date.now(), author: "Sofía Torres", text }])}
            />
          )}
        </section>
      </div>

      {editor?.kind === "project" && <ProjectEditor item={editor.item} onClose={() => setEditor(null)} onSave={saveProject} />}
      {editor?.kind === "task" && selectedProject && <TaskEditor item={editor.item} projectId={selectedProject.id} onClose={() => setEditor(null)} onSave={saveTask} />}
      {notice && <div className="fixed bottom-5 right-5 z-[200100] rounded-2xl border border-emerald-500/20 bg-[#151821] px-5 py-3 text-sm font-bold text-emerald-400 shadow-2xl">{notice}</div>}
    </main>
  );
}

function DemoLogin({ onEnter }: { onEnter: () => void }) {
  return <main className="fixed inset-0 z-[200000] grid place-items-center overflow-hidden bg-[#0B0E14] p-5 text-white"><div className="absolute h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" /><section className="relative w-full max-w-md rounded-[2.5rem] border border-white/10 bg-[#151821] p-8 text-center shadow-2xl sm:p-12"><div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20"><FolderKanban size={30} /></div><p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-blue-400">Alexander Ydler</p><h1 className="text-3xl font-black tracking-tight sm:text-4xl">Project Manager Demo</h1><p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-400">Explora proyectos, tareas, presupuestos y analítica con información completamente ficticia.</p><button onClick={onEnter} className="mt-9 w-full rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black transition hover:bg-blue-500 active:scale-[0.98]">Entrar a la demo</button><p className="mt-5 text-[11px] text-slate-500">No requiere cuenta. Nada se guarda.</p></section></main>;
}

function Sidebar({ open, view, onNavigate, onClose, onExit }: { open: boolean; view: View; onNavigate: (view: View) => void; onClose: () => void; onExit: () => void }) {
  const items = [{ id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard }, { id: "projects" as View, label: "Proyectos", icon: FolderKanban }, { id: "tasks" as View, label: "Tareas y chat", icon: MessageSquare }];
  return <><button aria-label="Cerrar menú" onClick={onClose} className={`fixed inset-0 z-40 bg-black/70 transition lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} /><aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/5 bg-[#151821] transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}><div className="flex h-20 items-center justify-between px-6"><span className="text-xl font-black text-blue-500">PMAY</span><button onClick={onClose} className="text-slate-500 lg:hidden"><X /></button></div><nav className="flex-1 space-y-2 px-4">{items.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => onNavigate(id)} className={`flex w-full items-center gap-4 rounded-xl p-3 text-sm font-bold transition ${view === id || (view === "project" && id === "projects") ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-[#1F232F] hover:text-white"}`}><Icon size={21} />{label}</button>)}</nav><div className="border-t border-white/5 p-4"><button onClick={onExit} className="flex w-full items-center gap-4 rounded-xl p-3 text-sm font-bold text-slate-400 hover:bg-rose-500/10 hover:text-rose-400"><LogOut size={21} />Salir de la demo</button></div></aside></>;
}

function Avatar({ name }: { name: string }) { return <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-[10px] font-black text-white">{initials(name)}</span>; }

function Dashboard({ projects, tasks, onOpenProject, onNew }: { projects: DemoProject[]; tasks: DemoTask[]; onOpenProject: (id: number) => void; onNew: () => void }) {
  const pending = tasks.filter((task) => task.status !== "DONE").length;
  const delayed = tasks.filter((task) => task.status !== "DONE" && task.dueDate < "2026-09-08").length;
  return <div className="mx-auto max-w-7xl space-y-6"><PageHeader title="Resumen del Sistema" subtitle="Espacio local con información ficticia para demostración." action="Nuevo Proyecto" onAction={onNew} /><div className="grid grid-cols-2 gap-3 lg:grid-cols-4"><Stat title="Total Proyectos" value={projects.length} icon={FolderKanban} color="text-blue-400" /><Stat title="Tareas Pendientes" value={pending} icon={CheckCircle2} color="text-emerald-400" /><Stat title="Retrasadas" value={delayed} icon={AlertCircle} color="text-rose-400" /><Stat title="En Curso" value={projects.filter((item) => item.status === "ACTIVE").length} icon={BarChart3} color="text-amber-400" /></div><div className="grid gap-6 lg:grid-cols-3"><div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#151821] lg:col-span-2"><div className="flex items-center justify-between border-b border-white/5 p-6"><h2 className="font-bold">Proyectos recientes</h2><span className="text-xs text-blue-400">{projects.length} proyectos</span></div><ProjectRows projects={projects} tasks={tasks} onOpen={onOpenProject} /></div><div className="rounded-[2rem] border border-white/5 bg-[#151821] p-6"><h2 className="mb-5 font-bold">Actividad del equipo</h2><div className="space-y-5">{tasks.slice(0, 4).map((task) => <div key={task.id} className="flex gap-3"><Avatar name={demoUsers.find((user) => user.id === task.assigneeId)?.name ?? "Usuario"} /><div><p className="text-xs font-bold text-slate-200">{task.title}</p><p className="mt-1 text-[11px] text-slate-500">{statusLabel[task.status]} · {priorityLabel[task.priority]}</p></div></div>)}</div></div></div></div>;
}

function Stat({ title, value, icon: Icon, color }: { title: string; value: number; icon: typeof FolderKanban; color: string }) { return <div className="rounded-2xl border border-white/5 bg-[#151821] p-4 sm:p-5"><div className={`mb-5 w-fit rounded-xl bg-white/5 p-2 ${color}`}><Icon size={20} /></div><p className="text-2xl font-black">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">{title}</p></div>; }

function PageHeader({ title, subtitle, action, onAction }: { title: string; subtitle: string; action: string; onAction: () => void }) { return <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><h1 className="text-2xl font-black tracking-tight">{title}</h1><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div><button onClick={onAction} className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-black shadow-lg shadow-blue-600/20 hover:bg-blue-500"><Plus size={18} />{action}</button></div>; }

function ProjectRows({ projects, tasks, onOpen, onEdit, onDelete }: { projects: DemoProject[]; tasks: DemoTask[]; onOpen: (id: number) => void; onEdit?: (item: DemoProject) => void; onDelete?: (id: number) => void }) {
  return <div className="divide-y divide-white/5">{projects.map((project) => { const projectTasks = tasks.filter((task) => task.projectId === project.id); const progress = projectTasks.length ? Math.round(projectTasks.filter((task) => task.status === "DONE").length / projectTasks.length * 100) : 0; return <article key={project.id} className="group flex cursor-pointer items-center gap-4 p-5 transition hover:bg-white/[0.025]" onClick={() => onOpen(project.id)}><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400"><FolderKanban size={20} /></div><div className="min-w-0 flex-1"><h3 className="truncate text-sm font-bold group-hover:text-blue-400">{project.name}</h3><div className="mt-2 flex items-center gap-3"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800"><div className="h-full bg-blue-500" style={{ width: `${progress}%` }} /></div><span className="text-[10px] font-bold text-slate-500">{progress}%</span></div></div><span className="hidden rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[9px] font-black uppercase text-slate-400 sm:block">{projectStatusLabel[project.status]}</span>{onEdit && <button onClick={(event) => { event.stopPropagation(); onEdit(project); }} className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white" aria-label="Editar"><Pencil size={16} /></button>}{onDelete && <button onClick={(event) => { event.stopPropagation(); onDelete(project.id); }} className="rounded-lg p-2 text-slate-500 hover:bg-rose-500/10 hover:text-rose-400" aria-label="Eliminar"><Trash2 size={16} /></button>}</article>; })}</div>;
}

function Projects({ projects, tasks, query, setQuery, onOpen, onEdit, onDelete, onNew }: { projects: DemoProject[]; tasks: DemoTask[]; query: string; setQuery: (value: string) => void; onOpen: (id: number) => void; onEdit: (item: DemoProject) => void; onDelete: (id: number) => void; onNew: () => void }) {
  const filtered = projects.filter((project) => `${project.name} ${project.description}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="mx-auto max-w-6xl space-y-6"><PageHeader title="Proyectos" subtitle="Organiza iniciativas, equipos y entregas." action="Nuevo Proyecto" onAction={onNew} /><SearchField value={query} onChange={setQuery} placeholder="Buscar proyecto..." /><div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#151821]"><ProjectRows projects={filtered} tasks={tasks} onOpen={onOpen} onEdit={onEdit} onDelete={onDelete} />{!filtered.length && <Empty text="No hay proyectos con esa búsqueda." />}</div></div>;
}

function AllTasks({ tasks, projects, onOpenProject }: { tasks: DemoTask[]; projects: DemoProject[]; onOpenProject: (id: number) => void }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{ id: 1, author: "Mateo Rivas", text: "Actualicé las tareas prioritarias del sprint." }]);
  const submit = (event: FormEvent) => { event.preventDefault(); if (!message.trim()) return; setMessages((items) => [...items, { id: Date.now(), author: "Sofía Torres", text: message.trim() }]); setMessage(""); };
  return <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_360px]"><div className="space-y-6"><div><h1 className="text-2xl font-black">Tareas del equipo</h1><p className="mt-1 text-sm text-slate-500">Vista general de los tres proyectos.</p></div><div className="grid gap-3">{tasks.map((task) => <button key={task.id} onClick={() => onOpenProject(task.projectId)} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#151821] p-4 text-left hover:border-blue-500/20"><span className={`h-2.5 w-2.5 rounded-full ${task.status === "DONE" ? "bg-emerald-400" : task.status === "IN_PROGRESS" ? "bg-blue-400" : "bg-slate-500"}`} /><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{task.title}</p><p className="mt-1 text-[11px] text-slate-500">{projects.find((item) => item.id === task.projectId)?.name}</p></div><span className={`text-[10px] font-black ${priorityClass[task.priority]}`}>{priorityLabel[task.priority]}</span></button>)}</div></div><Chat messages={messages} message={message} setMessage={setMessage} onSubmit={submit} /></div>;
}

function ProjectWorkspace(props: { project: DemoProject; tasks: DemoTask[]; filteredTasks: DemoTask[]; budget?: DemoBudget; tab: ProjectTab; setTab: (tab: ProjectTab) => void; query: string; setQuery: (value: string) => void; statusFilter: "ALL" | TaskStatus; setStatusFilter: (value: "ALL" | TaskStatus) => void; priorityFilter: "ALL" | Priority; setPriorityFilter: (value: "ALL" | Priority) => void; onBack: () => void; onNewTask: () => void; onEditTask: (task: DemoTask) => void; onDeleteTask: (id: number) => void; onUpdateTask: (id: number, patch: Partial<DemoTask>) => void; onEditProject: () => void; onDeleteProject: () => void; onUpdateBudget: (patch: Partial<DemoBudget>) => void; messages: { id: number; author: string; text: string }[]; onMessage: (text: string) => void }) {
  const { project, tasks, budget, tab, setTab } = props;
  const progress = tasks.length ? Math.round(tasks.filter((task) => task.status === "DONE").length / tasks.length * 100) : 0;
  return <div className="mx-auto max-w-7xl space-y-7"><button onClick={props.onBack} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"><ChevronLeft size={18} />Volver a proyectos</button><section className="rounded-[2.25rem] border border-white/5 bg-[#151821] p-6 sm:p-8"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><div className="mb-4 flex flex-wrap items-center gap-2"><span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black uppercase text-blue-400">{projectStatusLabel[project.status]}</span><span className="text-xs text-slate-500">Entrega {new Date(`${project.endDate}T12:00:00`).toLocaleDateString("es-ES")}</span></div><h1 className="text-3xl font-black tracking-tight sm:text-4xl">{project.name}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{project.description}</p></div><div className="min-w-64 rounded-3xl border border-white/5 bg-white/[0.025] p-5"><div className="mb-3 flex justify-between text-sm font-bold"><span>Progreso real</span><span className="text-blue-400">{progress}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${progress}%` }} /></div><p className="mt-3 text-right text-[10px] text-slate-500">{tasks.filter((task) => task.status === "DONE").length} de {tasks.length} completadas</p></div></div></section><div className="flex gap-1 overflow-x-auto border-b border-white/5">{(["tasks", "calendar", "analytics", "budget", "settings"] as ProjectTab[]).map((item) => <button key={item} onClick={() => setTab(item)} className={`whitespace-nowrap border-b-2 px-4 py-3 text-xs font-black capitalize sm:px-6 sm:text-sm ${tab === item ? "border-blue-500 text-blue-400" : "border-transparent text-slate-500"}`}>{({ tasks: "Tareas", calendar: "Calendario", analytics: "Analítica", budget: "Presupuestos", settings: "Ajustes" } as Record<ProjectTab, string>)[item]}</button>)}</div>{tab === "tasks" && <TaskPanel {...props} />}{tab === "calendar" && <CalendarPanel tasks={tasks} project={project} />}{tab === "analytics" && <AnalyticsPanel tasks={tasks} />}{tab === "budget" && budget && <BudgetPanel tasks={tasks} budget={budget} onUpdate={props.onUpdateBudget} onUpdateTask={props.onUpdateTask} />}{tab === "settings" && <SettingsPanel project={project} onEdit={props.onEditProject} onDelete={props.onDeleteProject} messages={props.messages} onMessage={props.onMessage} />}</div>;
}

function TaskPanel(props: Parameters<typeof ProjectWorkspace>[0]) { return <div className="space-y-4"><div className="flex flex-col gap-3 sm:flex-row"><SearchField value={props.query} onChange={props.setQuery} placeholder="Buscar tarea..." /><select value={props.statusFilter} onChange={(e) => props.setStatusFilter(e.target.value as "ALL" | TaskStatus)} className="rounded-xl border border-white/5 bg-[#151821] px-4 py-3 text-xs font-bold text-slate-300 outline-none"><option value="ALL">Todos los estados</option><option value="TODO">Por hacer</option><option value="IN_PROGRESS">En curso</option><option value="DONE">Completadas</option></select><select value={props.priorityFilter} onChange={(e) => props.setPriorityFilter(e.target.value as "ALL" | Priority)} className="rounded-xl border border-white/5 bg-[#151821] px-4 py-3 text-xs font-bold text-slate-300 outline-none"><option value="ALL">Todas las prioridades</option><option value="HIGH">Alta</option><option value="MEDIUM">Media</option><option value="LOW">Baja</option></select><button onClick={props.onNewTask} className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-black"><Plus size={16} />Nueva tarea</button></div><div className="hidden overflow-x-auto rounded-[2rem] border border-white/5 bg-[#151821] md:block"><table className="w-full min-w-[850px] text-left"><thead><tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500"><th className="p-5">Tarea</th><th>Responsable</th><th>Prioridad</th><th>Estado</th><th className="pr-5 text-right">Acciones</th></tr></thead><tbody className="divide-y divide-white/5">{props.filteredTasks.map((task) => <TaskRow key={task.id} task={task} onEdit={props.onEditTask} onDelete={props.onDeleteTask} onUpdate={props.onUpdateTask} />)}</tbody></table></div><div className="grid gap-3 md:hidden">{props.filteredTasks.map((task) => <TaskCard key={task.id} task={task} onEdit={props.onEditTask} onDelete={props.onDeleteTask} onUpdate={props.onUpdateTask} />)}</div>{!props.filteredTasks.length && <Empty text="No hay tareas con esos filtros." />}</div>; }

function TaskRow({ task, onEdit, onDelete, onUpdate }: { task: DemoTask; onEdit: (task: DemoTask) => void; onDelete: (id: number) => void; onUpdate: (id: number, patch: Partial<DemoTask>) => void }) { const user = demoUsers.find((item) => item.id === task.assigneeId)!; return <tr className="hover:bg-white/[0.02]"><td className="p-5"><p className="text-sm font-bold">{task.title}</p><p className="mt-1 text-[11px] text-slate-500">{task.type}</p></td><td><div className="flex items-center gap-2"><Avatar name={user.name} /><span className="text-xs text-slate-300">{user.name}</span></div></td><td><select value={task.priority} onChange={(e) => onUpdate(task.id, { priority: e.target.value as Priority })} className={`bg-transparent text-xs font-black outline-none ${priorityClass[task.priority]}`}><option className="bg-[#151821]" value="LOW">Baja</option><option className="bg-[#151821]" value="MEDIUM">Media</option><option className="bg-[#151821]" value="HIGH">Alta</option></select></td><td><select value={task.status} onChange={(e) => onUpdate(task.id, { status: e.target.value as TaskStatus })} className={`rounded-lg border px-2 py-1 text-[10px] font-black outline-none ${statusClass[task.status]}`}><option className="bg-[#151821]" value="TODO">Por hacer</option><option className="bg-[#151821]" value="IN_PROGRESS">En curso</option><option className="bg-[#151821]" value="DONE">Completada</option></select></td><td className="pr-5 text-right"><button onClick={() => onEdit(task)} className="p-2 text-slate-500 hover:text-white" aria-label="Editar"><Pencil size={15} /></button><button onClick={() => onDelete(task.id)} className="p-2 text-slate-500 hover:text-rose-400" aria-label="Eliminar"><Trash2 size={15} /></button></td></tr>; }

function TaskCard({ task, onEdit, onDelete, onUpdate }: Parameters<typeof TaskRow>[0]) { return <article className="rounded-2xl border border-white/5 bg-[#151821] p-4"><div className="flex justify-between gap-4"><div><p className="text-sm font-bold">{task.title}</p><p className="mt-1 text-[10px] font-black text-blue-400">{task.type}</p></div><span className={`text-[10px] font-black ${priorityClass[task.priority]}`}>{priorityLabel[task.priority]}</span></div><p className="mt-3 text-xs leading-5 text-slate-500">{task.description}</p><div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3"><select value={task.status} onChange={(e) => onUpdate(task.id, { status: e.target.value as TaskStatus })} className={`rounded-lg border px-2 py-1 text-[10px] font-black ${statusClass[task.status]}`}><option className="bg-[#151821]" value="TODO">Por hacer</option><option className="bg-[#151821]" value="IN_PROGRESS">En curso</option><option className="bg-[#151821]" value="DONE">Completada</option></select><div><button onClick={() => onEdit(task)} className="p-2 text-slate-500"><Pencil size={15} /></button><button onClick={() => onDelete(task.id)} className="p-2 text-slate-500"><Trash2 size={15} /></button></div></div></article>; }

function CalendarPanel({ tasks, project }: { tasks: DemoTask[]; project: DemoProject }) {
  const initial = new Date(`${project.endDate}T12:00:00`); const [month, setMonth] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate(); const offset = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  return <section className="rounded-[2rem] border border-white/5 bg-[#151821] p-4 sm:p-6"><div className="mb-6 flex items-center justify-between"><div><h3 className="font-bold">Calendario de entregas</h3><p className="mt-1 text-xs capitalize text-slate-500">{month.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}</p></div><div className="flex gap-2"><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="rounded-xl bg-white/5 p-2"><ChevronLeft size={18} /></button><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="rounded-xl bg-white/5 p-2"><ChevronRight size={18} /></button></div></div><div className="grid grid-cols-7 text-center text-[9px] font-black uppercase text-slate-600 sm:text-xs">{["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => <span key={day} className="py-2">{day}</span>)}</div><div className="grid grid-cols-7 overflow-hidden rounded-xl border-l border-t border-white/5">{Array.from({ length: offset }).map((_, index) => <div key={`empty-${index}`} className="min-h-20 border-b border-r border-white/5 bg-black/5 sm:min-h-28" />)}{Array.from({ length: days }, (_, index) => index + 1).map((day) => { const date = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; const events = tasks.filter((task) => task.dueDate === date); const isDeadline = project.endDate === date; return <div key={day} className="min-h-20 border-b border-r border-white/5 p-1.5 sm:min-h-28 sm:p-2"><span className="text-[10px] text-slate-500 sm:text-xs">{day}</span>{events.slice(0, 2).map((task) => <p key={task.id} className={`mt-1 truncate rounded px-1 py-0.5 text-[8px] font-bold sm:text-[10px] ${task.status === "DONE" ? "bg-emerald-500/15 text-emerald-400" : "bg-blue-500/15 text-blue-400"}`}>{task.title}</p>)}{isDeadline && <p className="mt-1 truncate rounded bg-amber-500/15 px-1 py-0.5 text-[8px] font-bold text-amber-400 sm:text-[10px]">Entrega final</p>}</div>; })}</div></section>;
}

function AnalyticsPanel({ tasks }: { tasks: DemoTask[] }) { const statusData = (["TODO", "IN_PROGRESS", "DONE"] as TaskStatus[]).map((status) => ({ name: statusLabel[status], total: tasks.filter((task) => task.status === status).length })); const typeData = taskTypes.map((type) => ({ name: type, value: tasks.filter((task) => task.type === type).length })).filter((item) => item.value); const colors = ["#3b82f6", "#f43f5e", "#10b981", "#f59e0b"]; return <div className="grid gap-6 lg:grid-cols-2"><ChartPanel title="Tareas por estado"><ResponsiveContainer width="100%" height="100%"><BarChart data={statusData}><CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" /><XAxis dataKey="name" stroke="#64748b" fontSize={10} /><YAxis stroke="#64748b" allowDecimals={false} fontSize={10} /><Tooltip contentStyle={{ background: "#1f232f", border: "1px solid #ffffff10", borderRadius: 12 }} /><Bar dataKey="total" fill="#3b82f6" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></ChartPanel><ChartPanel title="Distribución por tipo"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={typeData} innerRadius={55} outerRadius={90} dataKey="value" nameKey="name" stroke="none">{typeData.map((item, index) => <Cell key={item.name} fill={colors[index % colors.length]} />)}</Pie><Tooltip contentStyle={{ background: "#1f232f", border: "1px solid #ffffff10", borderRadius: 12 }} /></PieChart></ResponsiveContainer></ChartPanel></div>; }
function ChartPanel({ title, children }: { title: string; children: React.ReactNode }) { return <section className="h-80 rounded-[2rem] border border-white/5 bg-[#151821] p-6"><h3 className="mb-5 text-sm font-bold">{title}</h3><div className="h-[230px]">{children}</div></section>; }

function BudgetPanel({ tasks, budget, onUpdate, onUpdateTask }: { tasks: DemoTask[]; budget: DemoBudget; onUpdate: (patch: Partial<DemoBudget>) => void; onUpdateTask: (id: number, patch: Partial<DemoTask>) => void }) { const taskTotal = tasks.reduce((sum, task) => sum + task.price, 0); const total = budget.mode === "TASK_BASED" ? taskTotal : budget.amount; return <div className="space-y-6"><div className="grid gap-4 md:grid-cols-3"><Stat title="Total presupuestado" value={total} icon={CircleDollarSign} color="text-blue-400" /><div className="rounded-2xl border border-white/5 bg-[#151821] p-5"><p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Estado</p><select value={budget.status} onChange={(e) => onUpdate({ status: e.target.value as DemoBudget["status"] })} className="mt-5 w-full rounded-xl border border-white/5 bg-[#0B0E14] p-3 text-sm font-bold"><option value="PENDING">Pendiente</option><option value="APPROVED">Aprobado</option><option value="REJECTED">Rechazado</option></select></div><div className="rounded-2xl border border-white/5 bg-[#151821] p-5"><p className="text-[10px] font-black uppercase tracking-wider text-slate-500">Modalidad</p><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => onUpdate({ mode: "TASK_BASED" })} className={`rounded-xl p-3 text-xs font-bold ${budget.mode === "TASK_BASED" ? "bg-blue-600" : "bg-[#0B0E14] text-slate-500"}`}>Por tareas</button><button onClick={() => onUpdate({ mode: "GLOBAL" })} className={`rounded-xl p-3 text-xs font-bold ${budget.mode === "GLOBAL" ? "bg-blue-600" : "bg-[#0B0E14] text-slate-500"}`}>Global</button></div></div></div><div className="rounded-[2rem] border border-white/5 bg-[#151821] p-6">{budget.mode === "GLOBAL" ? <div className="mx-auto max-w-md py-8 text-center"><CircleDollarSign className="mx-auto mb-5 text-blue-400" size={42} /><h3 className="font-bold">Monto fijo del proyecto</h3><input type="number" value={budget.amount} onChange={(e) => onUpdate({ amount: Number(e.target.value) })} className="mt-6 w-full rounded-2xl border border-white/5 bg-[#0B0E14] p-5 text-center text-3xl font-black outline-none focus:border-blue-500" /></div> : <div><h3 className="mb-5 font-bold">Desglose por tareas</h3><div className="space-y-2">{tasks.map((task) => <div key={task.id} className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.02] p-3"><span className="truncate text-xs font-bold text-slate-300">{task.title}</span><input aria-label={`Costo de ${task.title}`} type="number" value={task.price} onChange={(e) => onUpdateTask(task.id, { price: Number(e.target.value) })} className="w-28 rounded-lg border border-white/5 bg-[#0B0E14] px-3 py-2 text-right text-xs font-bold" /></div>)}</div><p className="mt-5 text-right text-sm font-black text-blue-400">Total: ${taskTotal.toLocaleString("en-US")}</p></div>}</div></div>; }

function SettingsPanel({ project, onEdit, onDelete, messages, onMessage }: { project: DemoProject; onEdit: () => void; onDelete: () => void; messages: { id: number; author: string; text: string }[]; onMessage: (text: string) => void }) { const [message, setMessage] = useState(""); const submit = (event: FormEvent) => { event.preventDefault(); if (!message.trim()) return; onMessage(message.trim()); setMessage(""); }; return <div className="grid gap-6 lg:grid-cols-2"><section className="rounded-[2rem] border border-white/5 bg-[#151821] p-6"><Settings className="mb-5 text-blue-400" /><h3 className="text-lg font-bold">Configuración del proyecto</h3><p className="mt-2 text-sm leading-6 text-slate-500">Actualiza nombre, descripción, estado, líder, equipo y fecha de entrega.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><button onClick={onEdit} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 p-3 text-xs font-black"><Pencil size={16} />Editar proyecto</button><button onClick={onDelete} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-500/10 p-3 text-xs font-black text-rose-400"><Trash2 size={16} />Eliminar</button></div><div className="mt-6 border-t border-white/5 pt-5"><p className="text-xs font-bold text-slate-400">Equipo asignado</p><div className="mt-3 flex -space-x-2">{project.teamIds.map((id) => <Avatar key={id} name={demoUsers.find((user) => user.id === id)?.name ?? "Usuario"} />)}</div></div></section><Chat messages={messages} message={message} setMessage={setMessage} onSubmit={submit} /></div>; }

function Chat({ messages, message, setMessage, onSubmit }: { messages: { id: number; author: string; text: string }[]; message: string; setMessage: (value: string) => void; onSubmit: (event: FormEvent) => void }) { return <section className="flex min-h-96 flex-col rounded-[2rem] border border-white/5 bg-[#151821] p-5"><div className="mb-5 flex items-center gap-3"><MessageSquare className="text-blue-400" /><div><h3 className="font-bold">Chat del equipo</h3><p className="text-[10px] text-emerald-400">4 miembros en línea · simulación local</p></div></div><div className="flex-1 space-y-4 overflow-y-auto">{messages.map((item) => <div key={item.id} className={`flex gap-3 ${item.author === "Sofía Torres" ? "flex-row-reverse text-right" : ""}`}><Avatar name={item.author} /><div><p className="mb-1 text-[10px] font-bold text-slate-500">{item.author}</p><p className="rounded-2xl bg-white/5 px-4 py-2 text-xs leading-5 text-slate-300">{item.text}</p></div></div>)}</div><form onSubmit={onSubmit} className="mt-5 flex gap-2 border-t border-white/5 pt-4"><input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe un mensaje..." className="min-w-0 flex-1 rounded-xl border border-white/5 bg-[#0B0E14] px-4 py-3 text-xs outline-none focus:border-blue-500" /><button className="rounded-xl bg-blue-600 px-4 text-xs font-black">Enviar</button></form></section>; }

function SearchField({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) { return <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/5 bg-[#151821] px-4"><Search size={16} className="text-slate-500" /><input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-transparent py-3 text-xs outline-none placeholder:text-slate-600" /></label>; }
function Empty({ text }: { text: string }) { return <div className="py-14 text-center text-sm italic text-slate-600">{text}</div>; }

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="fixed inset-0 z-[200050] grid place-items-center overflow-y-auto bg-black/80 p-4" onMouseDown={onClose}><section className="my-auto w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#151821] p-6 shadow-2xl sm:p-8" onMouseDown={(e) => e.stopPropagation()}><div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-black">{title}</h2><button type="button" onClick={onClose} className="rounded-xl bg-white/5 p-2 text-slate-400"><X size={20} /></button></div>{children}</section></div>; }
const fieldClass = "w-full rounded-xl border border-white/5 bg-[#0B0E14] px-4 py-3 text-sm text-white outline-none focus:border-blue-500";
function ProjectEditor({ item, onClose, onSave }: { item?: DemoProject; onClose: () => void; onSave: (project: Omit<DemoProject, "id">, id?: number) => void }) { const [form, setForm] = useState<Omit<DemoProject, "id">>(item ? { name: item.name, description: item.description, status: item.status, leaderId: item.leaderId, teamIds: item.teamIds, endDate: item.endDate } : { name: "", description: "", status: "PLANNING", leaderId: 1, teamIds: [1], endDate: "2026-12-15" }); const submit = (e: FormEvent) => { e.preventDefault(); if (form.name.trim()) onSave({ ...form, name: form.name.trim() }, item?.id); }; return <Modal title={item ? "Editar proyecto" : "Nuevo proyecto"} onClose={onClose}><form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-bold text-slate-400 sm:col-span-2">Nombre<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${fieldClass} mt-2`} /></label><label className="text-xs font-bold text-slate-400 sm:col-span-2">Descripción<textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${fieldClass} mt-2 resize-none`} /></label><label className="text-xs font-bold text-slate-400">Estado<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as ProjectStatus })} className={`${fieldClass} mt-2`}><option value="PLANNING">Planificación</option><option value="ACTIVE">Activo</option><option value="COMPLETED">Completado</option></select></label><label className="text-xs font-bold text-slate-400">Entrega<input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} className={`${fieldClass} mt-2`} /></label><label className="text-xs font-bold text-slate-400 sm:col-span-2">Líder<select value={form.leaderId} onChange={(e) => setForm({ ...form, leaderId: Number(e.target.value) })} className={`${fieldClass} mt-2`}>{demoUsers.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}</select></label><div className="sm:col-span-2"><p className="mb-2 text-xs font-bold text-slate-400">Equipo</p><div className="grid grid-cols-2 gap-2">{demoUsers.map((user) => <label key={user.id} className="flex items-center gap-2 rounded-xl bg-[#0B0E14] p-3 text-xs"><input type="checkbox" checked={form.teamIds.includes(user.id)} onChange={(e) => setForm({ ...form, teamIds: e.target.checked ? [...form.teamIds, user.id] : form.teamIds.filter((id) => id !== user.id) })} />{user.name}</label>)}</div></div><button className="rounded-xl bg-blue-600 p-3 text-sm font-black sm:col-span-2">Guardar proyecto</button></form></Modal>; }

function TaskEditor({ item, projectId, onClose, onSave }: { item?: DemoTask; projectId: number; onClose: () => void; onSave: (task: Omit<DemoTask, "id">, id?: number) => void }) { const [form, setForm] = useState<Omit<DemoTask, "id">>(item ? { projectId: item.projectId, title: item.title, description: item.description, type: item.type, status: item.status, priority: item.priority, assigneeId: item.assigneeId, dueDate: item.dueDate, price: item.price } : { projectId, title: "", description: "", type: "TASK", status: "TODO", priority: "MEDIUM", assigneeId: 1, dueDate: "2026-10-15", price: 0 }); const submit = (e: FormEvent) => { e.preventDefault(); if (form.title.trim()) onSave({ ...form, title: form.title.trim() }, item?.id); }; return <Modal title={item ? "Editar tarea" : "Nueva tarea"} onClose={onClose}><form onSubmit={submit} className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-bold text-slate-400 sm:col-span-2">Título<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={`${fieldClass} mt-2`} /></label><label className="text-xs font-bold text-slate-400 sm:col-span-2">Descripción<textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${fieldClass} mt-2 resize-none`} /></label><Select label="Tipo" value={form.type} onChange={(value) => setForm({ ...form, type: value as DemoTask["type"] })} options={taskTypes.map((type) => [type, type])} /><Select label="Prioridad" value={form.priority} onChange={(value) => setForm({ ...form, priority: value as Priority })} options={[["LOW", "Baja"], ["MEDIUM", "Media"], ["HIGH", "Alta"]]} /><Select label="Estado" value={form.status} onChange={(value) => setForm({ ...form, status: value as TaskStatus })} options={[["TODO", "Por hacer"], ["IN_PROGRESS", "En curso"], ["DONE", "Completada"]]} /><label className="text-xs font-bold text-slate-400">Entrega<input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className={`${fieldClass} mt-2`} /></label><label className="text-xs font-bold text-slate-400">Responsable<select value={form.assigneeId} onChange={(e) => setForm({ ...form, assigneeId: Number(e.target.value) })} className={`${fieldClass} mt-2`}>{demoUsers.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}</select></label><label className="text-xs font-bold text-slate-400">Costo estimado<input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className={`${fieldClass} mt-2`} /></label><button className="rounded-xl bg-blue-600 p-3 text-sm font-black sm:col-span-2">Guardar tarea</button></form></Modal>; }
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: readonly (readonly [string, string])[] }) { return <label className="text-xs font-bold text-slate-400">{label}<select value={value} onChange={(e) => onChange(e.target.value)} className={`${fieldClass} mt-2`}>{options.map(([option, text]) => <option key={option} value={option}>{text}</option>)}</select></label>; }

export default ProjectManagerDemo;

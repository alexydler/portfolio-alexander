export type DemoUser = {
  id: number;
  name: string;
  role: "ADMIN" | "DEVELOPER" | "DESIGNER" | "ANALYST";
};

export type ProjectStatus = "ACTIVE" | "PLANNING" | "COMPLETED";
export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";
export type Priority = "LOW" | "MEDIUM" | "HIGH";

export type DemoProject = {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  leaderId: number;
  teamIds: number[];
  endDate: string;
};

export type DemoTask = {
  id: number;
  projectId: number;
  title: string;
  description: string;
  type: "FEATURE" | "BUG" | "TASK" | "IMPROVEMENT";
  status: TaskStatus;
  priority: Priority;
  assigneeId: number;
  dueDate: string;
  price: number;
};

export type DemoBudget = {
  projectId: number;
  mode: "TASK_BASED" | "GLOBAL";
  status: "PENDING" | "APPROVED" | "REJECTED";
  amount: number;
};

export const demoUsers: DemoUser[] = [
  { id: 1, name: "Sofía Torres", role: "ADMIN" },
  { id: 2, name: "Mateo Rivas", role: "DEVELOPER" },
  { id: 3, name: "Valentina Cruz", role: "DESIGNER" },
  { id: 4, name: "Diego Méndez", role: "ANALYST" },
];

export const initialProjects: DemoProject[] = [
  { id: 1, name: "Atlas Commerce", description: "Rediseño de la experiencia de compra y panel operativo.", status: "ACTIVE", leaderId: 1, teamIds: [1, 2, 3], endDate: "2026-10-28" },
  { id: 2, name: "Pulse Analytics", description: "Dashboard de inteligencia comercial para equipos de ventas.", status: "PLANNING", leaderId: 4, teamIds: [1, 2, 4], endDate: "2026-11-18" },
  { id: 3, name: "Nova Mobile", description: "Aplicación móvil para coordinación de servicios técnicos.", status: "COMPLETED", leaderId: 2, teamIds: [2, 3, 4], endDate: "2026-08-25" },
];

export const initialTasks: DemoTask[] = [
  { id: 1, projectId: 1, title: "Arquitectura del catálogo", description: "Definir módulos y contratos de datos.", type: "FEATURE", status: "DONE", priority: "HIGH", assigneeId: 2, dueDate: "2026-09-18", price: 850 },
  { id: 2, projectId: 1, title: "Prototipo de checkout", description: "Diseñar el flujo responsive de compra.", type: "TASK", status: "IN_PROGRESS", priority: "HIGH", assigneeId: 3, dueDate: "2026-09-24", price: 620 },
  { id: 3, projectId: 1, title: "Corregir cálculo de impuestos", description: "Ajustar redondeo por región.", type: "BUG", status: "TODO", priority: "MEDIUM", assigneeId: 2, dueDate: "2026-10-02", price: 340 },
  { id: 4, projectId: 2, title: "Modelo de métricas", description: "Definir KPIs y fuentes del dashboard.", type: "TASK", status: "IN_PROGRESS", priority: "HIGH", assigneeId: 4, dueDate: "2026-09-30", price: 700 },
  { id: 5, projectId: 2, title: "Sistema de filtros", description: "Crear filtros combinables por segmento.", type: "FEATURE", status: "TODO", priority: "MEDIUM", assigneeId: 2, dueDate: "2026-10-12", price: 480 },
  { id: 6, projectId: 2, title: "Mejorar contraste de gráficas", description: "Revisar paleta y accesibilidad.", type: "IMPROVEMENT", status: "TODO", priority: "LOW", assigneeId: 3, dueDate: "2026-10-20", price: 260 },
  { id: 7, projectId: 3, title: "Flujo de órdenes", description: "Implementar estados de servicio.", type: "FEATURE", status: "DONE", priority: "HIGH", assigneeId: 2, dueDate: "2026-08-10", price: 920 },
  { id: 8, projectId: 3, title: "Pruebas de campo", description: "Validar experiencia con técnicos.", type: "TASK", status: "DONE", priority: "MEDIUM", assigneeId: 4, dueDate: "2026-08-17", price: 540 },
  { id: 9, projectId: 3, title: "Optimizar modo offline", description: "Reducir conflictos de sincronización.", type: "IMPROVEMENT", status: "DONE", priority: "MEDIUM", assigneeId: 2, dueDate: "2026-08-22", price: 460 },
];

export const initialBudgets: DemoBudget[] = [
  { projectId: 1, mode: "TASK_BASED", status: "APPROVED", amount: 1810 },
  { projectId: 2, mode: "GLOBAL", status: "PENDING", amount: 5200 },
  { projectId: 3, mode: "TASK_BASED", status: "APPROVED", amount: 1920 },
];

export const taskTypes = ["FEATURE", "BUG", "TASK", "IMPROVEMENT"] as const;

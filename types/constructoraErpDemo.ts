export type ErpRole = "ADMIN" | "SUPERVISOR" | "ALMACENISTA";
export type ErpView = "dashboard" | "projects" | "project" | "inventory" | "dispatches" | "budgets";
export type ProjectStatus = "ACTIVO" | "PAUSADO" | "CERRADO";
export type TaskStatus = "PENDIENTE" | "EN_PROGRESO" | "COMPLETADA";

export type ErpUser = { id: number; name: string; role: ErpRole };
export type Client = { id: number; name: string; contact: string };
export type Supplier = { id: number; name: string; category: string };
export type Warehouse = { id: number; code: string; name: string; location: string };
export type Project = { id: number; code: string; name: string; description: string; clientId: number; supervisorId: number; status: ProjectStatus; location: string; startDate: string; endDate: string; progress: number; checklist: { id: number; label: string; done: boolean }[]; notes: string[]; evidenceCount: number };
export type ProjectTask = { id: number; projectId: number; title: string; status: TaskStatus; responsibleId: number };
export type InventoryItem = { id: number; kind: "MATERIAL" | "HERRAMIENTA"; sku: string; name: string; unit: string; warehouseId: number; stock: number; minimum: number; supplierId: number; condition?: "DISPONIBLE" | "EN_USO" | "MANTENIMIENTO" };
export type Dispatch = { id: number; projectId: number; responsibleId: number; warehouseId: number; itemId: number; quantity: number; type: "DESPACHO" | "DEVOLUCION"; date: string };
export type Budget = { id: number; projectId: number; code: string; status: "BORRADOR" | "APROBADO" | "REVISION"; directCost: number; administration: number; utility: number };
export type StaffMember = { id: number; name: string; specialty: string; projectId: number };
export type Requirement = { id: number; projectId: number; item: string; quantity: number; status: "PENDIENTE" | "APROBADO" };
export type Requisition = { id: number; projectId: number; code: string; status: "PENDIENTE" | "DESPACHADA"; itemCount: number };

export type ErpState = {
  projects: Project[];
  tasks: ProjectTask[];
  inventory: InventoryItem[];
  dispatches: Dispatch[];
  budgets: Budget[];
};

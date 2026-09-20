import type { Budget, Client, Dispatch, ErpState, ErpUser, InventoryItem, Project, ProjectTask, Requirement, Requisition, StaffMember, Supplier, Warehouse } from "@/types/constructoraErpDemo";

export const users: ErpUser[] = [
  { id: 1, name: "Mariana Rojas", role: "ADMIN" },
  { id: 2, name: "Carlos Méndez", role: "SUPERVISOR" },
  { id: 3, name: "Lucía Paredes", role: "ALMACENISTA" },
];
export const clients: Client[] = [
  { id: 1, name: "Grupo Horizonte", contact: "Elena Vidal" },
  { id: 2, name: "Inversiones Mirador", contact: "Samuel Acosta" },
  { id: 3, name: "Desarrollos Arboleda", contact: "Paula Montes" },
];
export const suppliers: Supplier[] = [
  { id: 1, name: "Suministros Andinos", category: "Obra gris" },
  { id: 2, name: "Ferretería Central", category: "Herramientas" },
  { id: 3, name: "Acabados Nova", category: "Acabados" },
];
export const warehouses: Warehouse[] = [
  { id: 1, code: "ALM-01", name: "Almacén Central", location: "Zona Industrial Norte" },
  { id: 2, code: "ALM-02", name: "Depósito de Obra", location: "Sector La Arboleda" },
];
export const initialProjects: Project[] = [
  { id: 1, code: "OBR-026", name: "Residencias Altavista", description: "Construcción de torre residencial de ocho niveles.", clientId: 1, supervisorId: 2, status: "ACTIVO", location: "Valle Verde", startDate: "2026-01-12", endDate: "2026-12-18", progress: 64, checklist: [{ id: 1, label: "Cimentación", done: true }, { id: 2, label: "Estructura", done: true }, { id: 3, label: "Instalaciones", done: false }], notes: ["Inspección estructural aprobada.", "Coordinar entrega de cableado."], evidenceCount: 12 },
  { id: 2, code: "OBR-031", name: "Centro Empresarial Nova", description: "Adecuación integral de oficinas y áreas comunes.", clientId: 2, supervisorId: 2, status: "ACTIVO", location: "Distrito Central", startDate: "2026-03-04", endDate: "2026-10-30", progress: 38, checklist: [{ id: 1, label: "Demoliciones", done: true }, { id: 2, label: "Divisiones", done: false }, { id: 3, label: "Acabados", done: false }], notes: ["Muestra de piso pendiente de aprobación."], evidenceCount: 7 },
  { id: 3, code: "OBR-019", name: "Plaza Arboleda", description: "Remodelación comercial y paisajismo exterior.", clientId: 3, supervisorId: 2, status: "PAUSADO", location: "La Arboleda", startDate: "2025-11-10", endDate: "2026-09-20", progress: 81, checklist: [{ id: 1, label: "Locales", done: true }, { id: 2, label: "Paisajismo", done: false }], notes: ["Obra pausada por aprobación municipal."], evidenceCount: 18 },
];
export const initialTasks: ProjectTask[] = [
  { id: 1, projectId: 1, title: "Instalar tableros eléctricos", status: "EN_PROGRESO", responsibleId: 2 }, { id: 2, projectId: 1, title: "Revisar encofrado nivel 6", status: "PENDIENTE", responsibleId: 2 }, { id: 3, projectId: 1, title: "Liberar frente de plomería", status: "COMPLETADA", responsibleId: 2 },
  { id: 4, projectId: 2, title: "Montar divisiones internas", status: "EN_PROGRESO", responsibleId: 2 }, { id: 5, projectId: 2, title: "Aprobar muestra de luminarias", status: "PENDIENTE", responsibleId: 1 }, { id: 6, projectId: 2, title: "Inspeccionar climatización", status: "PENDIENTE", responsibleId: 2 },
  { id: 7, projectId: 3, title: "Completar señalización", status: "COMPLETADA", responsibleId: 2 }, { id: 8, projectId: 3, title: "Recibir mobiliario urbano", status: "PENDIENTE", responsibleId: 3 },
];
export const initialInventory: InventoryItem[] = [
  { id: 1, kind: "MATERIAL", sku: "MAT-001", name: "Cemento Portland", unit: "sacos", warehouseId: 1, stock: 84, minimum: 40, supplierId: 1 },
  { id: 2, kind: "MATERIAL", sku: "MAT-002", name: "Cabilla 1/2", unit: "unidades", warehouseId: 1, stock: 28, minimum: 35, supplierId: 1 },
  { id: 3, kind: "MATERIAL", sku: "MAT-003", name: "Bloque estructural", unit: "unidades", warehouseId: 2, stock: 560, minimum: 200, supplierId: 1 },
  { id: 4, kind: "MATERIAL", sku: "MAT-004", name: "Cable THHN 12", unit: "metros", warehouseId: 1, stock: 120, minimum: 150, supplierId: 2 },
  { id: 5, kind: "MATERIAL", sku: "MAT-005", name: "Tubería PVC 2 pulgadas", unit: "tramos", warehouseId: 2, stock: 75, minimum: 30, supplierId: 2 },
  { id: 6, kind: "MATERIAL", sku: "MAT-006", name: "Pintura interior blanca", unit: "galones", warehouseId: 1, stock: 46, minimum: 20, supplierId: 3 },
  { id: 7, kind: "MATERIAL", sku: "MAT-007", name: "Porcelanato gris", unit: "cajas", warehouseId: 2, stock: 18, minimum: 24, supplierId: 3 },
  { id: 8, kind: "MATERIAL", sku: "MAT-008", name: "Arena lavada", unit: "m³", warehouseId: 2, stock: 42, minimum: 15, supplierId: 1 },
  { id: 9, kind: "HERRAMIENTA", sku: "HER-001", name: "Taladro percutor", unit: "equipos", warehouseId: 1, stock: 4, minimum: 2, supplierId: 2, condition: "DISPONIBLE" },
  { id: 10, kind: "HERRAMIENTA", sku: "HER-002", name: "Mezcladora portátil", unit: "equipos", warehouseId: 2, stock: 2, minimum: 1, supplierId: 2, condition: "EN_USO" },
  { id: 11, kind: "HERRAMIENTA", sku: "HER-003", name: "Nivel láser", unit: "equipos", warehouseId: 1, stock: 1, minimum: 2, supplierId: 2, condition: "DISPONIBLE" },
  { id: 12, kind: "HERRAMIENTA", sku: "HER-004", name: "Vibrador de concreto", unit: "equipos", warehouseId: 2, stock: 1, minimum: 1, supplierId: 2, condition: "MANTENIMIENTO" },
];
export const initialDispatches: Dispatch[] = [
  { id: 1, projectId: 1, responsibleId: 2, warehouseId: 1, itemId: 1, quantity: 20, type: "DESPACHO", date: "2026-09-07" },
  { id: 2, projectId: 2, responsibleId: 2, warehouseId: 2, itemId: 5, quantity: 12, type: "DESPACHO", date: "2026-09-06" },
  { id: 3, projectId: 1, responsibleId: 3, warehouseId: 1, itemId: 9, quantity: 1, type: "DEVOLUCION", date: "2026-09-05" },
];
export const initialBudgets: Budget[] = [
  { id: 1, projectId: 1, code: "PRE-026", status: "APROBADO", directCost: 284000, administration: 12, utility: 15 },
  { id: 2, projectId: 2, code: "PRE-031", status: "REVISION", directCost: 168500, administration: 10, utility: 14 },
  { id: 3, projectId: 3, code: "PRE-019", status: "BORRADOR", directCost: 93400, administration: 11, utility: 12 },
];
export const staff: StaffMember[] = [{ id: 1, name: "Andrés Silva", specialty: "Electricista", projectId: 1 }, { id: 2, name: "Rosa León", specialty: "Maestra de obra", projectId: 1 }, { id: 3, name: "Miguel Soto", specialty: "Instalador", projectId: 2 }];
export const requirements: Requirement[] = [{ id: 1, projectId: 1, item: "Cable THHN 12", quantity: 80, status: "APROBADO" }, { id: 2, projectId: 1, item: "Tablero eléctrico", quantity: 4, status: "PENDIENTE" }, { id: 3, projectId: 2, item: "Luminaria LED", quantity: 36, status: "PENDIENTE" }];
export const requisitions: Requisition[] = [{ id: 1, projectId: 1, code: "REQ-104", status: "DESPACHADA", itemCount: 3 }, { id: 2, projectId: 2, code: "REQ-108", status: "PENDIENTE", itemCount: 2 }, { id: 3, projectId: 3, code: "REQ-097", status: "DESPACHADA", itemCount: 4 }];

export const initialErpState: ErpState = { projects: initialProjects, tasks: initialTasks, inventory: initialInventory, dispatches: initialDispatches, budgets: initialBudgets };

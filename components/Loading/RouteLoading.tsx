"use client";

import { PacmanLoader } from "react-spinners";

export default function RouteLoading() {
  return (
    <div
      className="fixed inset-0 z-[300000] flex min-h-screen flex-col items-center justify-center bg-[#070b18] text-white"
      role="status"
      aria-live="polite"
      aria-label="Cargando contenido"
    >
      <div className="rounded-3xl border border-yellow-300/15 bg-yellow-300/[0.04] px-12 py-9 shadow-[0_0_60px_rgba(250,204,21,0.14)]">
        <PacmanLoader color="#facc15" size={30} speedMultiplier={1.1} />
      </div>
      <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
        Cargando 
      </p>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function CarEscapePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoCanvasRef = useRef<HTMLCanvasElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isUnityReady, setIsUnityReady] = useState(false);

  useEffect(() => {
    console.log("Iniciando carga de Unity...");

    // --- CONFIGURACIÓN (Saca estos valores de tu index.html original) ---
    const buildUrl = "https://cdn.jsdelivr.net/gh/abisdbest/classroom.google.com@85146ac051b67a3c32ebdf898bb0144d818d580b/drive.google.com/escape%20road/TemplateData";
    
    // REEMPLAZA EL CONTENIDO ENTRE COMILLAS CON TU BASE64 DEL index.html
    // Nota: Asegúrate de que empiece por "data:application/javascript;base64,..." 
    // (Si en tu HTML dice @file, cámbialo por application)
    const loaderUrl = "data:application/javascript;base64,ZnVuY3Rpb24gY3JlYXRlVT..."; 

    const config = {
      dataUrl: buildUrl + "/data.unityweb",
      frameworkUrl: "data:application/javascript;base64,ZnVuY3Rpb24gdW5pdHlGcmF...", // Pega aquí el base64 del framework
      codeUrl: buildUrl + "/wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "1games.io",
      productName: "Escape Road",
      productVersion: "2.0",
      devicePixelRatio: 1,
    };

    // Función para dibujar la barra de carga (Lógica de tu original)
    const updateLoadingUI = (progress: number) => {
      setLoadingProgress(Math.round(progress * 100));
      const canvas = logoCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const img = document.getElementById("ld_bg") as HTMLImageElement;
      
      if (ctx && img) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const sw = canvas.width / 1920;
        const sh = canvas.height / 1080;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Barra de fondo
        ctx.fillStyle = "#977e21";
        ctx.fillRect((1920 - 700) * 0.5 * sw, (1080 - 150) * sh, 700 * sw, 50 * sh);
        // Barra de progreso
        ctx.fillStyle = "#fad234";
        ctx.fillRect((1920 - 690) * 0.5 * sw, (1080 - 145) * sh, 690 * progress * sw, 40 * sw);
      }
    };

    // Carga dinámica del Script Loader
    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      console.log("Script Loader de Unity cargado con éxito.");
      
      // @ts-ignore
      window.createUnityInstance(canvasRef.current, config, (progress: number) => {
        updateLoadingUI(progress);
      }).then((instance: any) => {
        console.log("Instancia de Unity creada.");
        // @ts-ignore
        window.unityInstance = instance;
        setIsUnityReady(true);
      }).catch((err: any) => {
        console.error("Error al crear la instancia de Unity:", err);
      });
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Botón para cerrar la pestaña */}
      <button 
        onClick={() => window.close()}
        className="absolute top-4 left-4 z-50 bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-500 transition-colors"
      >
        ✕ Cerrar Juego
      </button>

      {/* Canvas del Juego */}
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full ${!isUnityReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}
      />

      {/* Pantalla de Carga Estilo Original */}
      {!isUnityReady && (
        <div className="absolute inset-0 z-40 bg-black flex flex-col items-center justify-center">
          <canvas ref={logoCanvasRef} className="absolute inset-0 w-full h-full" />
          <div className="z-50 text-white font-bold text-2xl mt-[70vh]">
            CARGANDO: {loadingProgress}%
          </div>
          {/* Imagen oculta necesaria para el dibujo del canvas */}
          <img 
            id="ld_bg" 
            src="https://cdn.jsdelivr.net/gh/abisdbest/classroom.google.com@85146ac051b67a3c32ebdf898bb0144d818d580b/drive.google.com/escape%20road/loading.png" 
            className="hidden" 
            alt="loading"
          />
        </div>
      )}
    </div>
  );
}
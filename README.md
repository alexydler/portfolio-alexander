# Portfolio de Alexander Ydler

Portfolio profesional desarrollado con Next.js, React, TypeScript y Tailwind CSS. Incluye proyectos, case studies, demos interactivas, experiencia, certificaciones y medios de contacto.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Validación

```bash
npx tsc --noEmit
npx eslint .
npm run build
```

## Producción con Docker

La imagen utiliza el modo standalone de Next.js y se publica únicamente en la interfaz local del VPS:

```bash
docker compose up -d --build
```

El servicio queda disponible en `http://127.0.0.1:3001`. Nginx debe actuar como reverse proxy hacia esa dirección; el puerto no queda expuesto públicamente por Docker.

Para generar metadatos, enlaces canónicos y el sitemap con el dominio definitivo:

```bash
SITE_URL=https://tu-dominio.com docker compose up -d --build
```

`SITE_URL` no es un secreto. Si no se proporciona, se utiliza `http://localhost:3001`.

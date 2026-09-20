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

## Producción

El proyecto puede desplegarse directamente en Vercel:

1. Importar el repositorio de GitHub.
2. Mantener el framework detectado como Next.js.
3. Usar `npm run build` como comando de compilación.
4. Publicar sin variables de entorno adicionales.

Vercel proporciona automáticamente la URL base utilizada por los metadatos, `robots.txt` y el sitemap. Al conectar un dominio personalizado como dominio principal del proyecto, esa URL se actualiza sin configuración adicional.

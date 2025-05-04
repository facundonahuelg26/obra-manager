# Introducción a Next.js 15

Este documento es una guía rápida para familiarizarse con los conceptos básicos de Next.js 15, sus diferencias con una SPA tradicional hecha en React, y cómo está estructurado el proyecto actual.

---

## 📁 Enrutamiento con la carpeta `app`

En Next.js 15, el enrutamiento está basado en el sistema de archivos dentro de la carpeta `app/`.

- Cada carpeta dentro de `app/` representa una ruta.
- Los archivos `page.tsx` o `page.jsx` definen la UI de esa ruta.
- Los archivos `layout.tsx` sirven para layouts compartidos entre subrutas.
- Se pueden anidar carpetas para crear rutas dinámicas (`[id]`, `[slug]`, etc.).
- `loading.tsx`, `error.tsx` y `not-found.tsx` se pueden usar para manejar estados específicos.

---

## 🔁 Componentes de servidor y de cliente

Next.js 15 introduce el concepto de componentes de servidor por defecto.

- **Componentes de servidor**: ejecutados en el servidor. Se prefieren por rendimiento, seguridad y SEO.
- **Componentes de cliente**: se usan cuando se necesita interactividad (formularios, botones, `useState`, `useEffect`, etc.).

### 🟨 Directiva `use client`

Cuando un componente necesita ser de cliente (por ejemplo, un formulario o un selector), debe incluir al inicio del archivo:

```tsx
'use client'
```

### ⚡ Diferencias con una SPA tradicional (React)

| Característica | Next.js 15 (App Router)  | SPA (React)             |
| -------------- | ------------------------ | ----------------------- |
| Enrutamiento   | Basado en archivos       | Manual con React Router |
| Renderizado    | Server-first             | Client-side             |
| SEO            | Optimizado               | Limitado                |
| Carga inicial  | Más rápida (streaming)   | Pesada                  |
| Arquitectura   | Modular (layouts, slots) | Generalmente plana      |

### 📡 Consultas a APIs: ¿Dónde hacerlas?

#### ❌ No hacer fetch en page.tsx

Aunque técnicamente se puede, es preferible NO hacer consultas directamente en las pages.
✅ Hacer fetch en componentes de servidor

Ventajas:

- Si falla una consulta en un componente falla en ese solo lugar.

- Si demora la carga de una solicitud demorara en ese solo lugar.
- Mejora la performance.

## 🧩 Estructura del proyecto: carpeta `features`

En lugar de usar una carpeta genérica `components/`, este proyecto organiza todo por **feature** (funcionalidad).

### 📂 ¿Qué es `features/`?

Cada carpeta dentro de `features/` encapsula:

- El componente principal
- Su lógica
- Sus estilos
- Sus hooks o servicios

### ✅ Ventajas

- Mejor escalabilidad
- Código más organizado
- Separación clara de responsabilidades
- Facilita el trabajo en equipo

### 📁 Ejemplo de estructura

---

```
features/
├── products/
│ ├── components/
│ ├── services/
│ └── products-list.tsx
```

### 📂 Carpeta `features/common/`

Contiene componentes compartidos entre distintas features. Ejemplos:

- Botones (`Button`)
- Inputs (`TextField`)
- Spinners
- Etiquetas reutilizables

## ✅ Recomendaciones generales

- Pensar server-first: usar componentes de servidor siempre que se pueda.

- No abusar de los use client.

- Separar lógica de presentación.

- Mantener las llamadas a APIs y acceso a datos fuera de las páginas.

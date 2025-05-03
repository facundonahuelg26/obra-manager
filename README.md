# 🚀 Obra manager

Obra manager es una aplicación desarrollada con **Next.js** que permite visualizar y analizar datos de obras de construcción de manera interactiva.

## 🛠 Tecnologías

- **Next.js**
- **React**
- **Tailwind CSS** (o la librería de estilos que uses)
- **GraphQL / REST API** (según cómo consumas datos)

## 🚀 Instalación y Uso

Cloná el repositorio e instalá las dependencias:

```bash
git clone https://github.com/facundonahuelg26/obra-manager.git
cd obra-manager
npm install
```

## Para correr el entorno de desarrollo:

```bash
npm run dev
```

Abrí http://localhost:3000 en tu navegador para ver la app.

## 🔑 Variables de Entorno

Para que la aplicación funcione correctamente, creá un archivo .env en la raíz del proyecto con las siguientes variables (Ver .env.example).

## 📂 Estructura del Proyecto

📦 obra-manager  
 ┣ 📂 app # Rutas y páginas principales  
 ┣ 📂 components # Componentes reutilizables  
 ┣ 📂 styles # Estilos globales y Tailwind  
 ┣ 📂 utils # Funciones auxiliares  
 ┣ 📜 .env.local # Variables de entorno (no se sube al repo)  
 ┣ 📜 next.config.js # Configuración de Next.js  
 ┗ 📜 package.json # Dependencias y scripts

## 📌Funcionalidades del proyecto

- **Autenticación con Auth.js y perfil de usuario**
- **Integración con API de proyectos**
- **Una vista con estadisticas generales**
- **Soporte para filtros avanzados**

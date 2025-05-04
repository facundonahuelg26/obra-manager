# 🧑‍💻 Historias de Usuario - Tareas de Desarrollo Frontend

Este documento detalla dos historias de usuario para tareas de desarrollo frontend. **Es obligatorio que se cumplan todos los criterios de aceptación** para considerar el trabajo como completado y aceptado.

---

## 🧩 Historia de Usuario 1: Vista de detalle de proyecto

### 📄 Descripción

Como desarrollador del sistema, quiero visualizar el detalle de un proyecto específico para poder entender su información completa y consultarla cuando la necesite.

### ✅ Criterios de aceptación

- El diseño **debe ser 100% responsive** (adaptarse correctamente a desktop, tablet y mobile).
- Se deben seguir **buenas prácticas de código** y **encapsulamiento de lógica**.
- El componente debe integrarse usando el **sistema de `LayoutContainer` y `Grid`** existente en el proyecto para mantener la consistencia visual y estructural.
- Los nombres de carpetas, componentes y funciones deben ser **descriptivos y claros**.
- Se deben mostrar como mínimo los siguientes datos del proyecto:
  - Nombre del proyecto
  - Descripción
  - Lista de materiales
  - Otros datos relevantes provistos por el backend

### 🛠️ Consideraciones técnicas

- Utilizar la librería **Next UI (Hero UI)**, customizado con Tailwind CSS.
- El diseño debe estar visualmente alineado con el resto del sistema.

---

## 🧩 Historia de Usuario 2: Formulario de creación de proyecto

### 📄 Descripción

Como desarrollador de la aplicación, quiero completar un formulario para crear un nuevo proyecto, de manera clara, estética y sin errores.

### ✅ Criterios de aceptación

- El formulario debe ser **visualmente estético y responsive**.
- Debe tener campos validados (requeridos, formatos, etc.).
- Los errores deben mostrarse **visual y claramente** junto a cada campo afectado.
- Toda la información debe capturarse y procesarse mediante una función `handleSubmit`.
- Al finalizar, los datos deben enviarse correctamente (enviar = simular o conectar endpoint si ya existe).
- El botón de "Crear proyecto" debe estar al final del formulario.
- Seguir buenas prácticas de código y **encapsular la lógica** adecuadamente.
- Utilizar el sistema de `LayoutContainer` y `Grid` ya definido en el proyecto.
- Usar nombres **descriptivos para componentes, funciones y carpetas**.

### 🛠️ Consideraciones técnicas

- Utilizar la librería **Next UI (Hero UI)** totalmente customizada con Tailwind CSS.
- Validación de errores: en principio partamos con lo que proporciona Hero UI.

---

⚠️ **Importante:** Por último, hacer un commit y pushear los cambios desde tu visual studio, para que se revise y analice tanto el codigo como la UI. El trabajo entregado **solo será aceptado si se cumplen todos los criterios de aceptación detallados en cada historia**.

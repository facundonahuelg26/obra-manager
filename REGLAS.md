# 📋 Reglas del proyecto

¡Bienvenido! Antes de empezar a trabajar en este proyecto, quiero dejarte algunas pautas para que estemos alineados y mantengamos una base de código ordenada, prolija y escalable.

## 1. 📦 Alcance del trabajo

- Tu responsabilidad principal será el **Frontend**: creación, actualización y mantenimiento de vistas y componentes.
- No te preocupes por tareas de Backend o integración con APIs (salvo que explícitamente se acuerde).

---

## 2. 💻 Buenas prácticas de código

- **Orden y limpieza:** El código debe ser fácil de leer, con indentación correcta, nombres descriptivos tanto en componentes como en archivos y carpetas, asi también con comentarios solo donde sea necesario.
- **Evitar hardcodeos:** Siempre que se pueda, parametrizar datos o usar constantes.
- **Componentes reutilizables:** Si ves patrones que se repiten, considerá hacer un componente reutilizable.
- **Modularidad:** Cada archivo debe tener una única responsabilidad. Si un componente empieza a crecer mucho, separá su lógica o sus partes en archivos propios.
- **Responsabilidad única:** Cada componente o función debe hacer **una sola cosa**.

---

## 3. 🔥 Encapsulamiento de la lógica

- **Separar UI de lógica:** Si hay cálculos, formateos o procesos, extraerlos fuera del renderizado (usá helpers o hooks si hace falta).
- **Evitar lógica directamente en JSX:** Todo lo que puedas preparar antes del `return`, mejor.

---

## 4. 🎨 Estilos y UI

- El proyecto ya cuenta con **Tailwind CSS** instalado.
- Se utiliza la librería de componentes **Hero UI** (anteriormente conocida como Next UI).
- Antes de trabajar con componentes de Hero UI, se debe pedir una **presentación general** para entender su funcionamiento y buenas prácticas de uso.
- **Consistencia:** Seguir el mismo sistema de diseño en todo el proyecto.
- **Naming de clases o estilos:** Ser claro y respetar el patrón de nombrado descriptivo.

---

## 5. 🔀 Git y manejo de ramas

- Cada tarea o feature debe trabajarse en una **rama nueva** siguiendo esta nomenclatura:  
  `mi-nombre-om-01`, `mi-nombre-om-02`, etc.  
  (Ejemplo: `facundo-om-01`, `facundo-om-02`, etc.)
- **Commits:** La nomenclatura de los mensajes de commit será:  
  `[primera letra del nombre + apellido completo en minúsculas] descripción`  
  (Ejemplo: `[fgutierrez] update projects view`).
- **Pusheos:** Solo se puede pushear para crear **Pull Requests** de revisión.  
  **Está prohibido hacer merge directamente a ramas principales** (por ejemplo `main`, `staging`).
- Todos los merge a ramas principales solo pueden ser realizados por el responsable del proyecto.

---

## 6. 📚 Comunicación

- Antes de arrancar una tarea, asegurate de entenderla bien. Si hay dudas, preguntar siempre.
- Mejor preguntar de más que asumir cosas incorrectas.
- Avisar cuando se finaliza una tarea o si se encuentra algún bloqueo.

---

# 🎯 Objetivo principal

**Código claro, simple, mantenible y escalable.**

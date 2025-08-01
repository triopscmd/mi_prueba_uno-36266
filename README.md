# Asana-Lite

Proyecto de gestión de tareas y proyectos simplificado, inspirado en Asana, construido con React, TypeScript, TailwindCSS y Vite.

## Descripción del Proyecto
Asana-Lite es una aplicación web que busca ofrecer una experiencia de gestión de proyectos ligera y eficiente. Permite a los usuarios organizar tareas, visualizar el progreso y colaborar de manera efectiva a través de diversas vistas como un tablero Kanban, una lista de tareas y una línea de tiempo.

## Tecnologías Utilizadas
*   **Frontend:** React.js
*   **Lenguaje:** TypeScript
*   **Build Tool:** Vite
*   **Estilos:** TailwindCSS
*   **Routing:** React Router DOM
*   **State Management:** (Ver sección "Plan de Gestión de Estado Escalable")

## Estructura del Proyecto
Para una descripción detallada de la estructura de archivos y carpetas, así como los componentes y módulos clave, por favor, consulta el archivo [`PROJECT_PLAN.md`](./PROJECT_PLAN.md).

## Instalación y Ejecución

### Requisitos
*   Node.js (v18 o superior recomendado)
*   npm o yarn (npm v9 o superior recomendado)

### Pasos de Instalación
1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd asana-lite
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

### Ejecución de la Aplicación
1.  **Modo Desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    La aplicación se iniciará en `http://localhost:5173` (o un puerto disponible).

2.  **Modo Producción (Build):**
    ```bash
    npm run build
    # o
    yarn build
    ```
    Esto creará una versión optimizada para producción en el directorio `dist/`. Puedes previsualizarla con:
    ```bash
    npm run preview
    # o
    yarn preview
    ```

## Plan de Gestión de Estado Escalable

Para asegurar una gestión de estado eficiente, mantenible y escalable en Asana-Lite, se empleará una estrategia híbrida, combinando la simplicidad del estado local con soluciones más robustas para el estado global de la aplicación.

1.  **Estado Local (Component-specific State):**
    *   **Herramientas:** `useState` y `useReducer` de React.
    *   **Uso:** Ideal para estados que son exclusivos de un componente o de un subárbol de componentes muy específico y que no necesitan ser compartidos globalmente (e.g., valores de formularios, estado de carga de un componente individual, visibilidad de un modal temporal).
    *   **Beneficios:** Simple, rápido de implementar, mínima sobrecarga.

2.  **Context API (Domain-specific State):**
    *   **Herramientas:** `React.createContext`, `useContext` y opcionalmente `useReducer`.
    *   **Uso:** Para estados que necesitan ser compartidos a través de múltiples componentes dentro de un dominio o característica específica, pero que no son tan globales como para justificar una solución de estado centralizado completa. Esto ayuda a evitar el "prop drilling" sin la complejidad de una librería externa.
    *   **Ejemplos:** `AuthContext` (estado de autenticación del usuario), `ThemeContext` (tema de la UI), `ProjectContext` (para compartir datos del proyecto actual en un subárbol). Se podría crear un `TaskFilterContext` para filtros específicos de tareas.
    *   **Beneficios:** Nativo de React, evita prop drilling para estados "casi globales", buena separación por dominio.

3.  **Zustand (Global Application State):**
    *   **Herramientas:** La librería `Zustand`.
    *   **Uso:** Preferido para el estado global y persistente de la aplicación que afecta a múltiples características y componentes no relacionados, o que necesita ser accesible de forma centralizada. Esto incluye datos de la API (proyectos, tareas principales), estado de la UI global (e.g., estado de la barra lateral expandida/contraída).
    *   **Razones:**
        *   **Simplicidad:** API concisa y menos boilerplate comparado con Redux.
        *   **Rendimiento:** Solo los componentes que usan un pedazo específico del estado se re-renderizan.
        *   **Escalabilidad:** Soporta middleware, selectores y un enfoque modular para grandes aplicaciones.
        *   **Flexibilidad:** Permite definir múltiples stores independientes para diferentes dominios de datos si es necesario, sin un store global monolítico.
    *   **Beneficios:** Centralización de lógica compleja, depuración más sencilla con herramientas de desarrollo (si se integra con Redux DevTools), gestión eficiente de datos asíncronos (combinado con `src/services/api.ts`).

## Contribución
Las contribuciones son bienvenidas. Por favor, consulta los issues en el dashboard de desarrollo para conocer las tareas pendientes y futuras mejoras.

## Licencia
Este proyecto está bajo la licencia [MIT License](LICENSE).
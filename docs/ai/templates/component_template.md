# Template: Nuevo Componente

Usa esta plantilla para crear un componente nuevo consistente con el design system.

## 1 - Estructura de archivos

Crear carpeta:

- src/components/ComponentName/

Crear archivos:

- ComponentName.jsx
- ComponentName.styles.js
- ComponentName.stories.jsx
- ComponentName.docs.jsx

## 2 - ComponentName.jsx

Puntos obligatorios:

- Importar React y PropTypes.
- Hacer destructuring de props dentro del cuerpo.
- Definir defaults seguros.
- Pasar props a styled components con prefijo $ cuando corresponda.
- Exportar componente nombrado.

## 3 - ComponentName.styles.js

Puntos obligatorios:

- Usar styled-components.
- Usar utilidades de spacing.
- Usar utilidades de color basadas en tokens.
- Exportar bajo objeto Styles.

## 4 - ComponentName.stories.jsx

Puntos obligatorios:

- Definir argTypes con descripcion en espanol.
- Definir Controls adecuados por tipo de prop.
- Incluir Playground.
- Conectar docs.page con ComponentNameDocs.

## 5 - ComponentName.docs.jsx

Secciones obligatorias:

1. Titulo y descripcion.
2. Principios.
3. Propiedades.
4. Variantes y ejemplos.
5. Casos de uso comunes.
6. Buenas practicas y evitar.

## 6 - Validacion final

- npm run lint
- npm run check:components

Si agregas un patron nuevo, actualiza AGENTS.MD y docs/ai/decisions.md en el mismo cambio.
# Domain: Components

## Contrato minimo por componente

Cada componente debe tener esta estructura:

- src/components/ComponentName/ComponentName.jsx
- src/components/ComponentName/ComponentName.styles.js
- src/components/ComponentName/ComponentName.stories.jsx
- src/components/ComponentName/ComponentName.docs.jsx

Excepciones heredadas actuales en el repositorio:

- Input no tiene archivo Input.styles.js en la raiz del componente.
- ThemeProvider no tiene archivo ThemeProvider.styles.js.

Estas excepciones estan permitidas por el validador hasta una futura migracion.

## Reglas obligatorias

- Usar PropTypes en todos los componentes publicos.
- Destructuring de props dentro del cuerpo del componente.
- Usar valores por defecto seguros.
- Pasar props de styled-components con prefijo $ cuando no sean atributos HTML.
- Evitar estilos inline hardcodeados.

## Composicion de componentes complejos

Para componentes con subpartes (como Panel, Grid, Steps), exponer API de composicion en objeto:

- Panel.Wrapper
- Panel.Content
- Panel.Footer

## Storybook

- Debe incluir argTypes completos con descripcion en espanol.
- Debe tener playground usable para probar props.
- Debe conectar docs page con Component.docs.jsx.

## Documentacion extendida

Toda documentacion extendida debe cubrir:

1. Titulo y descripcion.
2. Principios.
3. Propiedades.
4. Variantes y ejemplos.
5. Casos de uso comunes.
6. Buenas practicas y anti-patrones.

## Checklist rapido

- Tiene PropTypes.
- Usa tokens del tema.
- Usa spacing system direction-value.
- Tiene stories y docs completas.
- Pasa lint.

## Convenciones de naming

- Archivos de componentes: PascalCase (Badge.jsx, Badge.styles.js).
- Archivos de utilidades y scripts: snake_case en ingles (check_component_structure.mjs).
- Variables y funciones: camelCase en ingles.
- Comentarios: en espanol.
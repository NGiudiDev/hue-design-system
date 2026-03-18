# AGENTS.MD - hue-design-system

> Guía completa: [docs/ai/full_guidelines.md](docs/ai/full_guidelines.md)

## Reglas no negociables

1. **Estructura de componente**: `.jsx` + `.styles.js` + `.stories.jsx` + `.docs.jsx`
2. **PropTypes obligatorios** en todos los componentes.
3. **Prefijo `$`** en props pasadas a styled-components (excepto atributos HTML).
4. **Tokens del tema** en lugar de valores hardcodeados.
5. **Spacing system** con formato `"direction-value"` (ej: `"a-0"`, `"x-16 y-8"`).
6. **Destructuring de props** dentro del cuerpo del componente, no en los parámetros.
7. **Validación defensiva** con `console.warn` y fallbacks seguros.

## Naming

- **Componentes y archivos de componente**: PascalCase (`Badge.jsx`, `Badge.styles.js`)
- **Archivos de utilidades y scripts**: snake_case en inglés (`check_component_structure.mjs`)
- **Variables y funciones**: camelCase en inglés (`getColorValue`, `hasErrors`)
- **Comentarios**: en español

## Idioma

- Código (variables, funciones, archivos de soporte): **inglés**.
- Comentarios y documentación user-facing: **español**.

## Estilos

- Usar exclusivamente **styled-components**.
- Usar `marginProperties` / `paddingProperties` y `getColorValue`.
- Exportar bajo objeto `Styles`.

## Storybook y docs

- argTypes con descripción en español y control adecuado.
- Playground interactivo obligatorio.
- Documentación extendida `.docs.jsx` con estructura consistente.

## Linting

- Comillas dobles, semicolons, no newline al final, máximo 1 línea vacía.
- Imports ordenados: React > PropTypes > componentes internos > estilos > utils > constantes.

## Validaciones

```bash
npm run lint
npm run check:components
```

## Documentación extendida

- [docs/ai/full_guidelines.md](docs/ai/full_guidelines.md) — guía completa con ejemplos
- [docs/ai/domains/](docs/ai/domains/) — guías por dominio
- [docs/ai/templates/component_template.md](docs/ai/templates/component_template.md) — plantilla de componente
- [docs/ai/common_errors.md](docs/ai/common_errors.md) — errores frecuentes
- [docs/ai/decisions.md](docs/ai/decisions.md) — registro de decisiones
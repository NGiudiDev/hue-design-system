# Domain: Theme

## Objetivo

Centralizar decisiones de color, tipografia, sombras, breakpoints y animaciones para evitar valores hardcodeados.

## Archivos fuente

- src/theme/colors.js
- src/theme/typography.js
- src/theme/shadows.js
- src/theme/breakpoints.js
- src/theme/animations.js
- src/theme/icons.js

## Reglas

- Nunca usar hex directos en componentes si existe token equivalente.
- La resolucion de color debe usar utilidades del sistema.
- Cambios de theme deben ser compatibles con ThemeProvider global.

## Criterios para agregar tokens

Agregar un token nuevo solo si:

- Se reutiliza en al menos dos componentes.
- No existe token semantico equivalente.
- Tiene nombre semantico (ejemplo: success.main, no green500).

## Riesgos comunes

- Duplicar colores cercanos con nombres distintos.
- Introducir tipografias fuera de la escala oficial.
- Saltar ThemeProvider en ejemplos o docs.
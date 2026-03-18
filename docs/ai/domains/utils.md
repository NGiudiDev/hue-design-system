# Domain: Utils

## Objetivo

Estandarizar utilidades compartidas para spacing y colores, evitando logica duplicada en componentes.

## Archivos clave

- src/utils/spacing.js
- src/utils/colors.js

## Reglas

- Usar marginProperties y paddingProperties para spacing.
- Usar getColorValue para resolver tokens de color.
- Evitar reimplementar parsing de spacing dentro de cada componente.

## Cuadro de decision

- Necesidad visual simple de layout: usar props margin/padding existentes.
- Necesidad de token de color: usar getColorValue.
- Necesidad nueva repetida en mas de un componente: proponer util compartida.

## Anti-patrones

- Copiar y pegar funciones de spacing entre componentes.
- Hardcodear defaults de color sin token.
- Mezclar utilidades con reglas de negocio.
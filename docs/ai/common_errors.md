# Errores Frecuentes

## 1 - Props sin prefijo $ en styled-components

Sintoma:

- Warnings o props no deseadas en el DOM.

Correccion:

- Envolver props custom con prefijo $ al pasar al styled component.

## 2 - Colores hardcodeados

Sintoma:

- Inconsistencia visual y deuda tecnica.

Correccion:

- Reemplazar por tokens de src/theme/colors.js y getColorValue.

## 3 - Historias incompletas

Sintoma:

- Storybook sin controles utiles.

Correccion:

- Completar argTypes y agregar Playground.

## 4 - Falta de docs extendida

Sintoma:

- Componente dificil de usar correctamente.

Correccion:

- Crear archivo Component.docs.jsx con estructura completa.

## 5 - Destructuring de props en parametros

Sintoma:

- Inconsistencia con convenciones internas.

Correccion:

- Mover destructuring al cuerpo del componente.
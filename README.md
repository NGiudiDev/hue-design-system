# Hue Design System

El propósito de esta librería es crear un sistema de diseño para simplificar el desarrollo de proyectos en React, utilizando la menor cantidad de dependencias posible para facilitar su mantenimiento.

## Documentacion

Este repositorio incluye una capa de documentacion orientada a asistentes de IA para mejorar consistencia y reducir retrabajo.

### Puntos de entrada

- AGENTS.MD
- docs/ai/README.md

### Guias por dominio

- docs/ai/domains/components.md
- docs/ai/domains/theme.md
- docs/ai/domains/utils.md

### Plantillas y soporte operativo

- docs/ai/templates/component_template.md
- docs/ai/common_errors.md
- docs/ai/decisions.md

### Validaciones

Ejecuta estos comandos para validar calidad y estructura minima:

- npm run lint
- npm run check:components

Si se agrega o cambia una convencion, debe actualizarse AGENTS.MD y docs/ai/decisions.md en el mismo PR.

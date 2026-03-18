# Documentacion para IA

Este directorio centraliza la documentacion operativa para asistentes de IA y colaboradores humanos.

## Objetivos

- Reducir respuestas inconsistentes de la IA.
- Estandarizar la generacion de componentes y docs.
- Convertir reglas en validaciones ejecutables.

## Orden de lectura recomendado

1. AGENTS.MD (reglas globales y no negociables).
2. docs/ai/domains/components.md (patrones y contrato por componente).
3. docs/ai/domains/theme.md (uso de tokens y theme).
4. docs/ai/domains/utils.md (helpers compartidos).
5. docs/ai/templates/component_template.md (scaffold guiado).
6. docs/ai/common_errors.md (fallas comunes y correccion).
7. docs/ai/decisions.md (decisiones arquitectonicas y cambios de criterio).

## Flujo recomendado para trabajar con IA

1. Antes de pedir cambios, comparte alcance y componente objetivo.
2. Pide salida en formato de diff/edicion real, no solo propuesta.
3. Ejecuta validaciones:
   - npm run lint
   - npm run check:components
4. Si hay nuevas convenciones, actualiza AGENTS.MD y docs/ai/decisions.md en el mismo PR.

## Definicion de listo

Un cambio se considera listo cuando:

- Cumple AGENTS.MD.
- Mantiene documentacion en espanol para contenido user-facing.
- No introduce anti-patrones del proyecto.
- Pasa lint y el check de estructura de componentes.

## Comandos

- npm run lint
- npm run check:components
# Registro de Decisiones

## 2026-03-18 - Sistema de documentacion para IA en capas

Decision:

- Adoptar estructura de documentacion para IA con guia global + guias locales + plantillas + checklist automatizable.

Motivo:

- Reducir variacion en respuestas de IA y mejorar consistencia de implementaciones.

Impacto:

- Se agrega docs/ai como entrypoint.
- Se agrega script de verificacion estructural de componentes.
- README apunta a la nueva documentacion.

Regla de mantenimiento:

- Cualquier cambio de convencion debe actualizar AGENTS.MD y este archivo en el mismo PR.

## 2026-03-18 - Convencion de naming para archivos, variables y comentarios

Decision:

- Archivos de soporte y utilidades en snake_case en ingles.
- Variables y funciones en camelCase en ingles.
- Comentarios en espanol.
- Carpeta de guias por dominio renombrada de zonas a domains.

Motivo:

- Mantener consistencia y facilitar la lectura de agentes de IA y colaboradores.

Impacto:

- Se renombran archivos y carpetas existentes.
- Se actualiza AGENTS.MD con las reglas formales.
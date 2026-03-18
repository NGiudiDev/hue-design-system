# Template: Nuevo Componente

> Ejemplos completos en [full_guidelines.md](../full_guidelines.md).

## Archivos a crear

- src/components/ComponentName/ComponentName.jsx
- src/components/ComponentName/ComponentName.styles.js
- src/components/ComponentName/ComponentName.stories.jsx
- src/components/ComponentName/ComponentName.docs.jsx

## Checklist por archivo

### ComponentName.jsx
- [ ] Import React y PropTypes
- [ ] Destructuring de props dentro del cuerpo
- [ ] Defaults seguros
- [ ] Props a styled-components con prefijo $
- [ ] Export nombrado

### ComponentName.styles.js
- [ ] styled-components
- [ ] marginProperties / paddingProperties
- [ ] getColorValue con tokens
- [ ] Export bajo objeto Styles

### ComponentName.stories.jsx
- [ ] argTypes con descripcion en espanol
- [ ] Controls por tipo de prop
- [ ] Playground
- [ ] docs.page conectado a ComponentNameDocs

### ComponentName.docs.jsx
- [ ] Titulo y descripcion
- [ ] Principios
- [ ] Propiedades (Canvas + Controls)
- [ ] Variantes y ejemplos
- [ ] Buenas practicas y evitar

## Validacion

```bash
npm run lint
npm run check:components
```
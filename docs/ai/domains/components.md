# Domain: Components

> Reglas detalladas y ejemplos en [full_guidelines.md](../full_guidelines.md).

## Excepciones heredadas

- Input no tiene archivo Input.styles.js en la raiz del componente.
- ThemeProvider no tiene archivo ThemeProvider.styles.js ni ThemeProvider.docs.jsx de forma convencional.

Estas excepciones estan permitidas por el validador hasta una futura migracion.

## Composicion de componentes complejos

Para componentes con subpartes (como Panel, Grid, Steps), exponer API de composicion en objeto:

- Panel.Wrapper / Panel.Content / Panel.Footer
- Grid.Container / Grid.Item
- Steps (Wrapper + Step)

## Checklist rapido

- [ ] Tiene `.jsx` + `.styles.js` + `.stories.jsx` + `.docs.jsx`
- [ ] Tiene PropTypes
- [ ] Usa tokens del tema
- [ ] Usa spacing system direction-value
- [ ] Tiene stories y docs completas
- [ ] Pasa lint
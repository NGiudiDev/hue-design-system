import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./react-C1q00N_b.js";import{a as n,i as r}from"./spacing-ByfHzs_K.js";import{t as i}from"./jsx-runtime-B-hFyic3.js";import{c as a,i as o,s}from"./blocks-DyvKxrGa.js";import{a as c,n as l,o as u,t as d}from"./Text-CeVFLe4j.js";var f,p,m=e((()=>{t(),a(),u(),l(),n(),f=i(),p=()=>(0,f.jsx)(r,{children:(0,f.jsxs)(s,{children:[(0,f.jsx)(d,{margin:`b-16`,type:`pageTitle`,children:`ThemeProvider`}),(0,f.jsx)(d,{margin:`b-16 x-8`,children:`ThemeProvider es el componente proveedor de tema que debe envolver toda la aplicación para proporcionar acceso a los tokens de diseño del Design System. Utiliza el ThemeProvider de styled-components para hacer disponibles colores, tipografía, espaciado, sombras y otros elementos del tema a todos los componentes.`}),(0,f.jsx)(d,{margin:`b-24`,type:`title`,children:`Principios`}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`Proveedor Central`}),(0,f.jsx)(d,{children:`Actúa como fuente única de verdad para todos los tokens de diseño, garantizando consistencia en toda la aplicación.`})]}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`Acceso Universal`}),(0,f.jsx)(d,{children:`Proporciona acceso a los tokens del tema a través de props.theme en todos los styled-components y componentes del sistema.`})]}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`Optimización de Recursos`}),(0,f.jsx)(d,{children:`Incluye preconexiones a Google Fonts y optimizaciones de carga para mejorar el rendimiento de la aplicación.`})]}),(0,f.jsxs)(c.Wrapper,{margin:`b-32 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`Estructura Sistemática`}),(0,f.jsx)(d,{children:`Organiza los tokens en categorías lógicas (colores, tipografía, espaciado) para facilitar su uso y mantenimiento.`})]}),(0,f.jsx)(d,{type:`title`,children:`Propiedades`}),(0,f.jsx)(o,{}),(0,f.jsx)(d,{margin:`b-16`,type:`title`,children:`Configuración e Instalación`}),(0,f.jsx)(d,{margin:`b-16`,type:`bodySemibold`,children:`Configuración Básica`}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,children:`ThemeProvider debe envolver el componente raíz de tu aplicación para proporcionar acceso global al tema.`}),(0,f.jsx)(d,{as:`pre`,margin:`b-8`,children:`  import React from "react";

  import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
  import { MainContent } from "./components/MainContent";

  function App() {
    return (
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    );
  }

  export default App;
  `})]}),(0,f.jsx)(d,{margin:`b-16`,type:`bodySemibold`,children:`Acceso al Tema en Styled-Components`}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,children:`Una vez configurado ThemeProvider, todos los styled-components tienen acceso automático al tema a través de props.`}),(0,f.jsx)(d,{as:`pre`,margin:`b-8`,children:`import styled from "styled-components";

  const StyledComponent = styled.div\`
  /* Acceso a colores */
  color: \${props => props.theme.colors.primary.main};
  background-color: \${props => props.theme.colors.white.surface};

  /* Acceso a tipografía */
  font-size: \${props => props.theme.typography.title.size};
  font-weight: \${props => props.theme.typography.title.weight};
  line-height: \${props => props.theme.typography.title.lineHeight};

  /* Acceso a sombras */
  box-shadow: \${props => props.theme.shadows.level2};

  /* Media queries con breakpoints */
  @media (min-width: \${props => props.theme.breakpoints.md}) {
    font-size: \${props => props.theme.typography.pageTitle.size};
  }
  \`;`})]}),(0,f.jsx)(d,{margin:`b-16`,type:`bodySemibold`,children:`Uso con Hook useTheme`}),(0,f.jsxs)(c.Wrapper,{margin:`b-24 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,children:`Para acceder al tema en componentes funcionales sin styled-components.`}),(0,f.jsx)(d,{as:`pre`,margin:`b-8`,children:`import React from "react";
  import { useTheme } from "styled-components";

  const MyComponent = () => {
  const theme = useTheme();

  const dynamicStyles = {
    color: theme.colors.primary.main,
    fontSize: theme.typography.bodyRegular.size,
    boxShadow: theme.shadows.level1,
  };

  return (
    <div style={dynamicStyles}>
      Contenido con estilos del tema
    </div>
  );
  };`})]}),(0,f.jsx)(d,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,f.jsx)(d,{margin:`b-4`,children:`• Envolver toda la aplicación con ThemeProvider en el componente raíz`}),(0,f.jsx)(d,{margin:`b-4`,children:`• Usar tokens del tema en lugar de valores hardcodeados`}),(0,f.jsx)(d,{margin:`b-4`,children:`• Acceder al tema a través de props.theme en styled-components`}),(0,f.jsx)(d,{margin:`b-4`,children:`• Mantener los archivos de tema organizados por categoría`}),(0,f.jsx)(d,{margin:`b-4`,children:`• Documentar tokens personalizados cuando extendas el tema`}),(0,f.jsx)(d,{children:`• Usar useTheme hook para acceso al tema en componentes funcionales`})]}),(0,f.jsxs)(c.Wrapper,{margin:`b-16 x-8`,children:[(0,f.jsx)(d,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,f.jsx)(d,{margin:`b-4`,children:`• No anidar múltiples ThemeProvider sin propósito específico`}),(0,f.jsx)(d,{margin:`b-4`,children:`• No acceder directamente a archivos de tema fuera de ThemeProvider`}),(0,f.jsx)(d,{margin:`b-4`,children:`• No usar valores hardcodeados cuando existan tokens equivalentes`}),(0,f.jsx)(d,{margin:`b-4`,children:`• No modificar el objeto tema directamente en tiempo de ejecución`}),(0,f.jsx)(d,{children:`• No omitir ThemeProvider en aplicaciones que usan el Design System`})]})]})}),p.__docgenInfo={description:``,methods:[],displayName:`ThemeProviderDocs`}})),h,g,_,v;e((()=>{t(),m(),u(),l(),n(),h=i(),g={argTypes:{children:{control:{type:`text`},description:`Los componentes de la aplicación que necesitan acceso al tema del Design System.`}},component:r,parameters:{docs:{page:p}},tags:[`autodocs`],title:`Foundation/ThemeProvider`},_={args:{children:`Contenido envuelto en ThemeProvider`},render:e=>(0,h.jsx)(r,{children:(0,h.jsxs)(c.Wrapper,{children:[(0,h.jsx)(d,{type:`title`,margin:`b-16`,children:e.children}),(0,h.jsx)(d,{children:`Este contenido tiene acceso a todos los tokens del tema.`})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Contenido envuelto en ThemeProvider"
  },
  render: args => <ThemeProvider>\r
      <Panel.Wrapper>\r
        <Text type="title" margin="b-16">{args.children}</Text>\r
        <Text>Este contenido tiene acceso a todos los tokens del tema.</Text>\r
      </Panel.Wrapper>\r
    </ThemeProvider>
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
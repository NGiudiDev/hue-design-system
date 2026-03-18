import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i}from"./spacing-CWM_BPBo.js";import{t as a}from"./jsx-runtime-DweqXWlm.js";import{c as o,i as s,s as c}from"./blocks-B7aBnu_Z.js";import{a as l,n as u,o as d,t as f}from"./Text-CV7_TDRk.js";var p,m,h=t((()=>{e(n(),1),o(),d(),u(),r(),p=a(),m=()=>(0,p.jsx)(i,{children:(0,p.jsxs)(c,{children:[(0,p.jsx)(f,{margin:`b-16`,type:`pageTitle`,children:`ThemeProvider`}),(0,p.jsx)(f,{margin:`b-16 x-8`,children:`ThemeProvider es el componente proveedor de tema que debe envolver toda la aplicación para proporcionar acceso a los tokens de diseño del Design System. Utiliza el ThemeProvider de styled-components para hacer disponibles colores, tipografía, espaciado, sombras y otros elementos del tema a todos los componentes.`}),(0,p.jsx)(f,{margin:`b-24`,type:`title`,children:`Principios`}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`Proveedor Central`}),(0,p.jsx)(f,{children:`Actúa como fuente única de verdad para todos los tokens de diseño, garantizando consistencia en toda la aplicación.`})]}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`Acceso Universal`}),(0,p.jsx)(f,{children:`Proporciona acceso a los tokens del tema a través de props.theme en todos los styled-components y componentes del sistema.`})]}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`Optimización de Recursos`}),(0,p.jsx)(f,{children:`Incluye preconexiones a Google Fonts y optimizaciones de carga para mejorar el rendimiento de la aplicación.`})]}),(0,p.jsxs)(l.Wrapper,{margin:`b-32 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`Estructura Sistemática`}),(0,p.jsx)(f,{children:`Organiza los tokens en categorías lógicas (colores, tipografía, espaciado) para facilitar su uso y mantenimiento.`})]}),(0,p.jsx)(f,{type:`title`,children:`Propiedades`}),(0,p.jsx)(s,{}),(0,p.jsx)(f,{margin:`b-16`,type:`title`,children:`Configuración e Instalación`}),(0,p.jsx)(f,{margin:`b-16`,type:`bodySemibold`,children:`Configuración Básica`}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,children:`ThemeProvider debe envolver el componente raíz de tu aplicación para proporcionar acceso global al tema.`}),(0,p.jsx)(f,{as:`pre`,margin:`b-8`,children:`  import React from "react";

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
  `})]}),(0,p.jsx)(f,{margin:`b-16`,type:`bodySemibold`,children:`Acceso al Tema en Styled-Components`}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,children:`Una vez configurado ThemeProvider, todos los styled-components tienen acceso automático al tema a través de props.`}),(0,p.jsx)(f,{as:`pre`,margin:`b-8`,children:`import styled from "styled-components";

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
  \`;`})]}),(0,p.jsx)(f,{margin:`b-16`,type:`bodySemibold`,children:`Uso con Hook useTheme`}),(0,p.jsxs)(l.Wrapper,{margin:`b-24 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,children:`Para acceder al tema en componentes funcionales sin styled-components.`}),(0,p.jsx)(f,{as:`pre`,margin:`b-8`,children:`import React from "react";
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
  };`})]}),(0,p.jsx)(f,{margin:`b-16`,type:`title`,children:`Buenas Prácticas`}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`✅ Recomendado`}),(0,p.jsx)(f,{margin:`b-4`,children:`• Envolver toda la aplicación con ThemeProvider en el componente raíz`}),(0,p.jsx)(f,{margin:`b-4`,children:`• Usar tokens del tema en lugar de valores hardcodeados`}),(0,p.jsx)(f,{margin:`b-4`,children:`• Acceder al tema a través de props.theme en styled-components`}),(0,p.jsx)(f,{margin:`b-4`,children:`• Mantener los archivos de tema organizados por categoría`}),(0,p.jsx)(f,{margin:`b-4`,children:`• Documentar tokens personalizados cuando extendas el tema`}),(0,p.jsx)(f,{children:`• Usar useTheme hook para acceso al tema en componentes funcionales`})]}),(0,p.jsxs)(l.Wrapper,{margin:`b-16 x-8`,children:[(0,p.jsx)(f,{margin:`b-8`,type:`bodySemibold`,children:`❌ Evitar`}),(0,p.jsx)(f,{margin:`b-4`,children:`• No anidar múltiples ThemeProvider sin propósito específico`}),(0,p.jsx)(f,{margin:`b-4`,children:`• No acceder directamente a archivos de tema fuera de ThemeProvider`}),(0,p.jsx)(f,{margin:`b-4`,children:`• No usar valores hardcodeados cuando existan tokens equivalentes`}),(0,p.jsx)(f,{margin:`b-4`,children:`• No modificar el objeto tema directamente en tiempo de ejecución`}),(0,p.jsx)(f,{children:`• No omitir ThemeProvider en aplicaciones que usan el Design System`})]})]})}),m.__docgenInfo={description:``,methods:[],displayName:`ThemeProviderDocs`}})),g,_,v,y;t((()=>{e(n(),1),h(),d(),u(),r(),g=a(),_={argTypes:{children:{control:{type:`text`},description:`Los componentes de la aplicación que necesitan acceso al tema del Design System.`}},component:i,parameters:{docs:{page:m}},tags:[`autodocs`],title:`Foundation/ThemeProvider`},v={args:{children:`Contenido envuelto en ThemeProvider`},render:e=>(0,g.jsx)(i,{children:(0,g.jsxs)(l.Wrapper,{children:[(0,g.jsx)(f,{type:`title`,margin:`b-16`,children:e.children}),(0,g.jsx)(f,{children:`Este contenido tiene acceso a todos los tokens del tema.`})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Contenido envuelto en ThemeProvider"
  },
  render: args => <ThemeProvider>\r
      <Panel.Wrapper>\r
        <Text type="title" margin="b-16">{args.children}</Text>\r
        <Text>Este contenido tiene acceso a todos los tokens del tema.</Text>\r
      </Panel.Wrapper>\r
    </ThemeProvider>
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};